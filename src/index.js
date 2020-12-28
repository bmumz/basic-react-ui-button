import React, { useState } from 'react'
import './button.css'
// import Styles from './styles.module.css'
import PropTypes from 'prop-types'

export default function BasicButtonComponent({
  bgColor,
  shape,
  size,
  transition,
  border,
  onClick,
  hoverBgColor,
  fontFamily,
  fontColor,
  text
}) {
  const [buttonColor, setButtonColor] = useState(bgColor)

  const buttonShape = ['round', 'square']

  const buttonSize = ['small', 'medium', 'large']

  const buttonTransition = ['grow', 'jump', 'stretch']

  const buttonBorder = [
    'none',
    'border--dark',
    'border--light',
    'half--dark',
    'half--light'
  ]

  const checkShape =
    shape !== undefined && buttonShape.includes(shape) ? shape : buttonShape[1]

  const checkSize =
    size !== undefined && buttonSize.includes(size) ? size : buttonSize[1]

  const checkTransition =
    transition !== undefined && buttonTransition.includes(transition)
      ? transition
      : buttonTransition[1]

  const checkBorder =
    border !== undefined && buttonBorder.includes(border)
      ? border
      : buttonBorder[3]

  const checkFontFamily = fontFamily !== undefined ? fontFamily : 'Helvetica'

  const checkHoverBgColor = hoverBgColor !== undefined ? hoverBgColor : bgColor

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setButtonColor(checkHoverBgColor)}
      onMouseLeave={() => setButtonColor(bgColor)}
      className={`button ${checkSize} ${checkShape} ${checkBorder} ${checkFontFamily} ${checkTransition}`}
      style={{
        backgroundColor: bgColor,
        fontFamily: checkFontFamily,
        color: fontColor
      }}
    >
      {text}
    </button>
  )
}

BasicButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  hoverBgColor: PropTypes.string,
  fontColor: PropTypes.string.isRequired,
  fontFamily: PropTypes.string,
  shape: PropTypes.string,
  size: PropTypes.string,
  transition: PropTypes.string,
  border: PropTypes.string,
  onClick: PropTypes.func.isRequired
}
