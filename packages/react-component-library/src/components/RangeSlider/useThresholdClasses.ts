export function useThresholdClasses(
  percent: number,
  thresholds: number[],
  componentName: string
): { [key: string]: boolean } {
  const singleThreshold = thresholds?.length === 1
  const doubleThreshold = thresholds?.length === 2

  const lowerCaseName = componentName.toLowerCase()

  return {
    [`rn-rangeslider__${lowerCaseName}--below-first-threshold`]:
      (singleThreshold || doubleThreshold) && percent <= thresholds[0],
    [`rn-rangeslider__${lowerCaseName}--between-thresholds`]:
      doubleThreshold && percent < thresholds[1] && percent >= thresholds[0],
    [`rn-rangeslider__${lowerCaseName}--above-thresholds`]:
      (singleThreshold || doubleThreshold) &&
      percent >= thresholds[thresholds.length - 1],
  }
}
