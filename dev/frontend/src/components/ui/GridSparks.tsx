"use client";

import { useEffect, useRef, useState } from "react";

const GRID_SIZE = 24;
const SPARK_COUNT = 12;

const MIN_STEPS = 4;
const MAX_STEPS = 12;

type Direction = "left" | "right" | "up" | "down";

type Bounds = {
  cols: number;
  rows: number;
};

type SparkState = {
  id: number;
  x: number;
  y: number;
  size: number;
  movingProperty: "left" | "top";
  duration: number;
  lastDirection: Direction | null;
};

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function randomInt(min: number, max: number) {
  return Math.floor(randomBetween(min, max + 1));
}

function getBounds(container: HTMLElement | null): Bounds | null {
  if (!container) return null;

  const width = container.clientWidth;
  const height = container.clientHeight;

  if (width === 0 || height === 0) return null;

  return {
    cols: Math.max(2, Math.floor(width / GRID_SIZE)),
    rows: Math.max(2, Math.floor(height / GRID_SIZE)),
  };
}

function getRandomGridPoint(bounds: Bounds) {
  return {
    x: randomInt(1, Math.max(1, bounds.cols - 1)) * GRID_SIZE,
    y: randomInt(1, Math.max(1, bounds.rows - 1)) * GRID_SIZE,
  };
}

function getOppositeDirection(direction: Direction | null) {
  if (direction === "left") return "right";
  if (direction === "right") return "left";
  if (direction === "up") return "down";
  if (direction === "down") return "up";
  return null;
}

function getNextSparkState(spark: SparkState, bounds: Bounds): SparkState {
  const currentCol = Math.round(spark.x / GRID_SIZE);
  const currentRow = Math.round(spark.y / GRID_SIZE);

  const possibleDirections: Direction[] = [];

  if (currentCol > 1) possibleDirections.push("left");
  if (currentCol < bounds.cols - 1) possibleDirections.push("right");
  if (currentRow > 1) possibleDirections.push("up");
  if (currentRow < bounds.rows - 1) possibleDirections.push("down");

  if (possibleDirections.length === 0) return spark;

  const oppositeDirection = getOppositeDirection(spark.lastDirection);

  const filteredDirections =
    possibleDirections.length > 1
      ? possibleDirections.filter(
          (direction) => direction !== oppositeDirection
        )
      : possibleDirections;

  const direction =
    filteredDirections[randomInt(0, filteredDirections.length - 1)];

  let maxAvailableSteps = 1;

  if (direction === "left") maxAvailableSteps = currentCol - 1;
  if (direction === "right") maxAvailableSteps = bounds.cols - 1 - currentCol;
  if (direction === "up") maxAvailableSteps = currentRow - 1;
  if (direction === "down") maxAvailableSteps = bounds.rows - 1 - currentRow;

  const steps = randomInt(
    Math.min(MIN_STEPS, maxAvailableSteps),
    Math.min(MAX_STEPS, maxAvailableSteps)
  );

  const nextCol =
    direction === "left"
      ? currentCol - steps
      : direction === "right"
        ? currentCol + steps
        : currentCol;

  const nextRow =
    direction === "up"
      ? currentRow - steps
      : direction === "down"
        ? currentRow + steps
        : currentRow;

  return {
    ...spark,
    x: nextCol * GRID_SIZE,
    y: nextRow * GRID_SIZE,
    movingProperty:
      direction === "left" || direction === "right" ? "left" : "top",
    duration: steps * randomBetween(280, 460),
    lastDirection: direction,
  };
}

export default function GridSparks() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [sparks, setSparks] = useState<SparkState[]>([]);

  useEffect(() => {
    const bounds = getBounds(containerRef.current);
    if (!bounds) return;

    const initialSparks = Array.from({ length: SPARK_COUNT }, (_, index) => {
      const point = getRandomGridPoint(bounds);

      return {
        id: index,
        x: point.x,
        y: point.y,
        size: randomBetween(7, 11),
        movingProperty: "left" as const,
        duration: randomBetween(1000, 1800),
        lastDirection: null,
      };
    });

    setSparks(initialSparks);

    const startTimer = setTimeout(() => {
      setSparks((current) =>
        current.map((spark) => getNextSparkState(spark, bounds))
      );
    }, 300);

    return () => clearTimeout(startTimer);
  }, []);

  return (
    <div ref={containerRef} className="grid-sparks-random" aria-hidden="true">
      {sparks.map((spark) => (
        <span
          key={spark.id}
          className={`spark-dot-grid spark-${spark.lastDirection ?? "right"}`}
          style={{
            width: `${spark.size}px`,
            height: `${spark.size}px`,
            left: `${spark.x - spark.size / 2}px`,
            top: `${spark.y - spark.size / 2}px`,
            transitionProperty: spark.movingProperty,
            transitionDuration: `${spark.duration}ms`,
          }}
          onTransitionEnd={(event) => {
            if (event.propertyName !== spark.movingProperty) return;

            const bounds = getBounds(containerRef.current);
            if (!bounds) return;

            setSparks((current) =>
              current.map((currentSpark) =>
                currentSpark.id === spark.id
                  ? getNextSparkState(currentSpark, bounds)
                  : currentSpark
              )
            );
          }}
        />
      ))}
    </div>
  );
}