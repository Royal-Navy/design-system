import { Paths } from './paths.ts'

export const ApplicationConstants = {
  title: 'Royal Navy Design System',
} as const

export const Links = [
  { title: 'Home', route: Paths.home, description: 'Home page' },
  {
    title: 'SideNav Left',
    route: Paths.sideNav,
    description: 'SideNav appears to the left of Masthead',
  },
  {
    title: 'SideNav Below',
    route: Paths.sideNavOutside,
    description: 'SideNav appears below the Masthead',
  },
  {
    title: 'Top navigation',
    route: Paths.topNav,
    description: 'Using masthead navigation at the top of the page',
  },
]
