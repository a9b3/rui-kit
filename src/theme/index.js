import { observable } from 'mobx'
import variables      from 'esayemm-styles/variables'
import tinycolor      from 'tinycolor2'

const defaultVariables = {
  primaryColor  : tinycolor(variables.gray).setAlpha(.7),
  primaryBgColor: variables.white,
}

class Theme {
  variables = observable.map()

  constructor() {
    this.setVariables(defaultVariables)
  }

  setVariables(themeObj) {
    for (const key in themeObj) {
      this.variables.set(key, themeObj[key])
    }
  }

  get(key) {
    return this.variables.get(key)
  }
}

export default new Theme()
