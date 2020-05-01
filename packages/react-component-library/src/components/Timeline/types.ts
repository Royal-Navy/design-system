export interface TimelineComponent {
  type: {
    name: string
  }
}

export interface TimelineRootComponent extends TimelineComponent {
  type: {
    name: 'TimelineSide'
  }
}

export interface TimelineHeadComponent extends TimelineComponent {
  type: {
    name:
      | 'TimelineTodayMarker'
      | 'TimelineMonths'
      | 'TimelineWeeks'
      | 'TimelineDays'
  }
}

export interface TimelineBodyComponent extends TimelineComponent {
  type: {
    name: 'TimelineRows'
  }
}
