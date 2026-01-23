// src/components/ThemeProvider.tsx

"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";  // ← ¡cambia esto! Quita /dist/types
import { type ReactNode } from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps & { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}