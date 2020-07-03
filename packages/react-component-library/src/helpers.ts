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

export { getKey, warnIfOverwriting }
