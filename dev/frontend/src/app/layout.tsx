import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import {
  ColorSchemeScript,
  MantineProvider,
  createTheme,
  mantineHtmlProps,
} from "@mantine/core";

import "@mantine/core/styles.css";
import "./globals.css";
import GridSparks from "@/components/ui/GridSparks";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const theme = createTheme({
  fontFamily: "var(--font-outfit)",
  fontFamilyMonospace: "var(--font-jetbrains)",

  colors: {
    orange: [
      "#FFF3EB",
      "#FFE1D1",
      "#FFB690",
      "#DE8557",
      "#FB923C",
      "#F97316",
      "#F97316",
      "#D85F08",
      "#8F3900",
      "#582200",
    ],
  },

  primaryColor: "orange",
});

export const metadata: Metadata = {
  title: "Sean Delos Santos | Backend-Leaning Full-Stack Developer",
  description:
    "Portfolio of Sean Delos Santos, a backend-leaning full-stack developer focused on secure, maintainable web applications, internal tools, and data-driven business systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      {...mantineHtmlProps}
      className={`${outfit.variable} ${jetbrains.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>

      <body className="min-h-full bg-primary-base font-outfit text-accent-light">
        <MantineProvider theme={theme} defaultColorScheme="light">
          <div className="system-grid-bg min-h-dvh bg-primary-base text-accent-light">
            <GridSparks />

            <div className="relative z-10">{children}</div>
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}