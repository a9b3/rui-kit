import { observable } from 'mobx'
import variables      from 'esayemm-styles/variables'
import tinycolor      from 'tinycolor2'

const defaultTheme = {
  primaryColor  : tinycolor(variables.gray).setAlpha(.7),
  primaryBgColor: variables.white,
}

class Theme {
  variables = observable.map()

  constructor() {
    this.setTheme(defaultTheme)
  }

  setTheme(themeObj) {
    for (const key in themeObj) {
      this.variables.set(key, themeObj[key])
    }
  }

  get(key) {
    return this.variables.get(key)
  }
}

export default new Theme()
