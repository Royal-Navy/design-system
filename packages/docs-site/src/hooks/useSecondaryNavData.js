import { useStaticQuery } from 'gatsby'
import sortBy from 'lodash/sortBy'
import startsWith from 'lodash/startsWith'

import { nestByURLStructure, stripTrailingSlash } from '../utils/nav'
import NavigationQuery from './NavigationQuery'

const useSecondaryNavData = location => {
  const checkActive = item => ({
    ...item,
    active:
      stripTrailingSlash(item.href) === stripTrailingSlash(location.pathname),
  })

  const {
    allMarkdownRemark: { edges: pages },
  } = useStaticQuery(NavigationQuery)

  const section = nestByURLStructure(pages).find(
    edge => edge.href.length > 1 && startsWith(location.pathname, edge.href)
  )

  if (!section) {
    return []
  }

  const { children: sectionNavItems } = section

  const navItems = sectionNavItems
    .map(checkActive)
    .map(({ active, children, href, label }) => ({
      active,
      children: sortBy(children.map(checkActive), 'label'),
      href,
      label,
    }))

  return sortBy(navItems, 'label')
}

export default useSecondaryNavData
