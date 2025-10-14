import { useContext } from "react"
import { ThemeProviderContext } from "../context/theme-provider";
import type { ThemeProviderState } from "../context/theme-provider";

export const useTheme = (): ThemeProviderState => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}