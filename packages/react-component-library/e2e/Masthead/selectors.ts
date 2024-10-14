export default {
  banner: '[data-testid="masthead-banner"]',
  buttons: {
    search: '[data-testid="masthead-search-button"]',
    notifications: '[data-testid="notification-button"]',
    user: '[data-testid="user-button"]',
  },
  navigation: {
    button: '[data-testid="masthead-nav-item"] a[data-testid="link"] span',
  },
} as const
