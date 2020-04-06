export function getKey(
  prefix: string,
  index: number | string
): string {
  return `${prefix}-${index}`
}
