import React from 'react'

function getKey(prefix: string, suffix: string | number): string {
  return `${prefix}-${suffix}`.replace(/\s/g, '')
}

function warnIfOverwriting<P>(
  props: P,
  propertyName: string,
  componentName: string
) {
  if (props[propertyName]) {
    console.warn(
      `Prop \`${propertyName}\` on \`${componentName}\` will be overwritten`
    )
  }
}

function withKey(
  element: React.ReactElement,
  prefix: string,
  suffix: string | number
) {
  if (element) {
    return React.cloneElement(element, {
      key: getKey(prefix, suffix),
    })
  }

  return null
}

export { getKey, warnIfOverwriting, withKey }
