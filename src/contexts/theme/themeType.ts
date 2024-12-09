export type ThemeType = {
  isDark: boolean;
  setIsDark: (isDark: boolean | ((prev: boolean) => boolean)) => void
}