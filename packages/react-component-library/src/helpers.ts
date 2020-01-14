function warnIfOverwriting<P>(props: P, propertyName: string, componentName: string) {
  if (props[propertyName]) {
    console.warn(
      `Prop \`${propertyName}\` on \`${componentName}\` will be overwritten`
    )
  }
}

export { warnIfOverwriting }
