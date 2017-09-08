import { observable } from 'mobx'
import tinycolor      from 'tinycolor2'

const defaultVariables = {
  // Default set of colors, should probably avoid using these.
  white    : '#ffffff',
  black    : '#000000',
  gray     : '#363732',
  lightgray: '#DCE1E9',
  cyan     : '#81D2C7',
  blue     : '#66C3FF',
  yellow   : '#FFC937',
  pink     : '#D4AFB9',
  green    : '#21A179',
  red      : '#C67B7D',
  slate    : '#2e3d49',

  // These have more semantic meaning, should prefer these over the generic
  // color names.
  brand    : '#D4AFB9',
  secondary: '#0D0A08',
  error    : '#C67B7D',
  warning  : '#FFC937',
  success  : '#21A179',

  defaultColor         : '#666667',
  defaultColorSecondary: tinycolor('#666667').setAlpha(.8).toString(),
  headerColor          : tinycolor('#666667').darken(10).toString(),

  // Use for layout spacing (margin, padding etc).
  spacing1: '6rem',
  spacing2: '4rem',
  spacing3: '2rem',
  spacing4: '1rem',
  spacing5: '.6rem',
  spacing6: '.4rem',

  // Use for font sizes.
  // h1
  size1: '3em',
  // h2
  size2: '2.25em',
  // h3
  size3: '1.75em',
  // h4
  size4: '1.125em',
  // default
  size5: '1em',
  // small
  size6: '.8em',

  maxWidth: '80rem',

  codeTheme: 'tomorrow-night-eighties',
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
