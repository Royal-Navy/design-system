import sortBy from 'lodash/sortBy'
import startsWith from 'lodash/startsWith'

import { nestByURLStructure, stripTrailingSlash } from '../utils/nav'
import useNavigationQuery from './useNavigationQuery'

const useSecondaryNavData = location => {
  const checkActive = item => ({
    ...item,
    active:
      stripTrailingSlash(item.href) === stripTrailingSlash(location.pathname),
  })

  const pages = useNavigationQuery()

  const section = nestByURLStructure(pages).find(
    edge => edge.href.length > 1 && startsWith(location.pathname, edge.href)
  )

  if (!section) {
    return []
  }

  const { children: sectionNavItems } = section

  let navItems = sectionNavItems
    .map(checkActive)
    .map(({ active, children, href, label }) => ({
      active,
      children: sortBy(children.map(checkActive), ['index', 'label']),
      href,
      label,
    }))
    .map(({ active, href, label, children }) => {
      if (children && children.length >= 1) {
        children.unshift(
          checkActive({
            index: 0,
            label: 'Overview',
            href,
          })
        )
      }

      return {
        active,
        href,
        label,
        children,
      }
    })

  navItems = sortBy(navItems, ['index', 'label'])

  navItems.unshift(
    checkActive({
      index: 0,
      href: section.href,
      label: 'Overview',
      children: [],
    })
  )

  return navItems
}

export default useSecondaryNavData
