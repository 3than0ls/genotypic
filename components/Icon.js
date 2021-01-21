import React from 'react'
const iconsContext = require.context('~/icons', true, /js$/)

export function Icon({
  name,
  className = '',
  width = undefined,
  height = undefined,
  size,
  color = '',
  ...props
}) {
  if (size) {
    width = height = size
  }
  const Icon = iconsContext(`./${name}.js`).default
  return (
    <Icon
      width={width}
      height={height}
      className={className}
      color={color}
      {...props}
    />
  )
}
