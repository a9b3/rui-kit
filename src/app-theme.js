let appTheme = {
  spacingSmall: '1em',
}

export function getTheme() {
  return appTheme
}

export function setTheme(override) {
  appTheme = Object.assign({}, appTheme, override)
}
