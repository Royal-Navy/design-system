import React from 'react'

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

function hasClass(allClasses: string | undefined, className: string): boolean {
  return Boolean(allClasses && allClasses.split(' ').includes(className))
}

function isIE11(): boolean {
  if (typeof window === 'undefined') {
    logger.warn('`window` object does not exist')

    return false
  }

  // @ts-ignore
  return !!window.MSInputMethodContext && !!document.documentMode
}

function warnIfOverwriting<Props>(
  props: Props,
  propertyName: keyof Props,
  componentName: string
): void {
  if (props[propertyName]) {
    logger.warn(
      `Prop \`${propertyName.toString()}\` on \`${componentName}\` will be overwritten`
    )
  }
}

function withKey(
  element: React.ReactElement,
  prefix: string,
  suffix: string | number
): React.ReactNode {
  if (element) {
    return React.cloneElement(element, {
      key: getKey(prefix, suffix),
    })
  }

  return null
}

function sleep(ms: number): Promise<undefined> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export type ValueOf<T> = T[keyof T]

export type KeysWithValueType<Obj, ValueType> = {
  [Key in keyof Obj]: Obj[Key] extends ValueType ? Key : never
}[keyof Obj & string]

export {
  getInitials,
  getKey,
  hasClass,
  isIE11,
  warnIfOverwriting,
  withKey,
  sleep,
}
