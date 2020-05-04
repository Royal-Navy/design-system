import startsWith from 'lodash/startsWith'
import sortBy from 'lodash/sortBy'

import {
  nestByURLStructure,
  stripLeadingSlash,
  stripTrailingSlash,
} from '../utils/nav'

import useNavigationQuery from './useNavigationQuery'

const usePrimaryNavData = (location) => {
  const checkActive = (item) => ({
    ...item,
    active:
      stripTrailingSlash(item.href) === stripTrailingSlash(location.pathname),
  })

  const pages = useNavigationQuery()

  const nested = nestByURLStructure(pages)
  const parsedCurrentLocation = stripLeadingSlash(location.pathname)

  return nested
    .map(({ href, label, children }) => {
      const parsedLink = stripLeadingSlash(href)
      const active =
        (parsedLink.length === 0 && parsedCurrentLocation.length === 0) ||
        (parsedLink.length > 0 && startsWith(parsedCurrentLocation, parsedLink))

      if (children && children.length >= 1) {
        children.push({
          index: 0,
          label: `${label} overview`,
          active: false,
          href,
        })
      }

      return {
        active,
        href,
        label,
        children,
      }
    })
    .map(({ active, children, href, label }) => ({
      active,
      children: sortBy(children.map(checkActive), ['index', 'label']),
      href,
      label,
    }))
}

export default usePrimaryNavData
