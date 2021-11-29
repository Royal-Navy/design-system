import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import logger from './utils/logger'

function getInitials(name: string): string {
  return name
    .split(/[\s-]+/)
    .map((namePart) => namePart[0])
    .join('')
}

function getKey(prefix: string, suffix: string | number): string {
  return `${prefix}-${suffix}`.replace(/\s/g, '')
}

function getId(prefix: string): string {
  return getKey(prefix, uuidv4())
}

function hasClass(allClasses: string, className: string): boolean {
  return allClasses && allClasses.split(' ').includes(className)
}

function isFirefox(): boolean {
  return navigator.userAgent.toLowerCase().indexOf('firefox') > -1
}

function isIE11(): boolean {
  if (typeof window === 'undefined') {
    logger.warn(`window object does not exist`)

    return false
  }

  // @ts-ignore
  return !!window.MSInputMethodContext && !!document.documentMode
}

function warnIfOverwriting<P>(
  props: P,
  propertyName: string,
  componentName: string
): void {
  if (props[propertyName]) {
    logger.warn(
      `Prop \`${propertyName}\` on \`${componentName}\` will be overwritten`
    )
  }
}

function withKey(
  element: React.ReactElement,
  prefix: string,
  suffix: string | number
): React.ReactElement {
  if (element) {
    return React.cloneElement(element, {
      key: getKey(prefix, suffix),
    })
  }

  return null
}

function sleep(ms: number): Promise<undefined> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export {
  getInitials,
  getId,
  getKey,
  hasClass,
  isFirefox,
  isIE11,
  warnIfOverwriting,
  withKey,
  sleep,
}
