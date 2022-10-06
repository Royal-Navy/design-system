export default {
  rail: '[data-testid="rangeslider-rail"]',
  handle: {
    value: '[data-testid="rangeslider-value"]',
    handle: '[data-testid="rangeslider-handle"]',
  },
  markers: '[data-testid="rangeslider-marker"]',
  thresholds: {
    betweenThresholds: '[data-testid="rangeslider-track-between-thresholds"]',
    aboveThresholds: '[data-testid="rangeslider-track-above-thresholds"]',
  },
} as const
