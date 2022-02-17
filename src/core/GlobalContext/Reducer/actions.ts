
type ToggleThemeAction = {
  type: "TOGGLE THEME",
};

export const toggleTheme = (): ToggleThemeAction => ({
  type: "TOGGLE THEME"
});

type UpdateImageAction = {
  type: "UPDATE IMAGE",
  image: string,
};

export const updateImage = (image: string): UpdateImageAction => ({
  type: "UPDATE IMAGE",
  image,
});

type ResetThemeAction = {
  type: "RESET THEME",
};

export const resetTheme = (): ResetThemeAction => ({
  type: "RESET THEME"
});

export type Action = ToggleThemeAction
  | UpdateImageAction
  | ResetThemeAction;