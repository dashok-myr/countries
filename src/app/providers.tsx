"use client";
import { ThemeProvider } from "next-themes";

// @ts-ignore
export function Providers({ children }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
