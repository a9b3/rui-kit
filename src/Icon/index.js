import styles    from './styles.css'

import cx        from 'classnames'
import PropTypes from 'prop-types'
import React     from 'react'

// To add a new icon copy and paste the svg file content
export const ICONS = {
  hamburger: ({ fill, className }) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="126"
      height="97"
      viewBox="0 0 126 97"
    >
      <title>hamburger</title>
      <path
        fill={fill}
        fillRule="evenodd"
        d="M9.5,0 L116.5,0 C121.746705,0 126,4.25329488 126,9.5 C126,14.7467051 121.746705,19 116.5,19 L9.5,19 C4.25329488,19 0,14.7467051 0,9.5 C0,4.25329488 4.25329488,0 9.5,0 Z M9.5,39 L116.5,39 C121.746705,39 126,43.2532949 126,48.5 C126,53.7467051 121.746705,58 116.5,58 L9.5,58 C4.25329488,58 0,53.7467051 0,48.5 C0,43.2532949 4.25329488,39 9.5,39 Z M9.5,78 L116.5,78 C121.746705,78 126,82.2532949 126,87.5 C126,92.7467051 121.746705,97 116.5,97 L9.5,97 C4.25329488,97 0,92.7467051 0,87.5 C0,82.2532949 4.25329488,78 9.5,78 Z"
      />
    </svg>
  ),
  chevron: ({ fill, className }) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="63px"
      height="101px"
      viewBox="0 0 63 101"
    >
      <title>chevron</title>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Artboard"
          transform="translate(-118.000000, -80.000000)"
          fill={fill}
        >
          <path
            d="M143.194174,130.466252 L180.932504,92.7279221 L168.204581,80 L118,130.204581 L118.26167,130.466252 L118,130.727922 L168.204581,180.932504 L180.932504,168.204581 L143.194174,130.466252 Z"
            id="Combined-Shape"
          />
        </g>
      </g>
    </svg>
  ),
}

export default function Icon({ type, ...props }) {
  return ICONS[type]({
    ...props,
    className: cx(styles.icon, props.className),
  })
}
Icon.propTypes = {
  type: PropTypes.oneOf(Object.keys(ICONS)).isRequired,
  className: PropTypes.string,
  fill: PropTypes.string,
}
Icon.defaultProps = {
  fill: '#000000',
}
