import React from 'react'
import { v4 as uuidv4 } from 'uuid'

function getKey(prefix: string, suffix: string | number): string {
  return `${prefix}-${suffix}`.replace(/\s/g, '')
}

function getId(prefix: string): string {
  return getKey(prefix, uuidv4())
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

export { getId, getKey, warnIfOverwriting, withKey }
