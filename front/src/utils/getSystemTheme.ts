type themeType = "light" | "dark";

const getSystemTheme = (): themeType => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  )
    return "dark";

  return "light";
};

export default getSystemTheme;
