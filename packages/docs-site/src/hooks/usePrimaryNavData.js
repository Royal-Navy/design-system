import startsWith from 'lodash/startsWith'

import { nestByURLStructure, stripLeadingSlash } from '../utils/nav'
import useNavigationQuery from './useNavigationQuery'

const usePrimaryNavData = location => {
  const pages = useNavigationQuery()

  const nested = nestByURLStructure(pages)
  const parsedCurrentLocation = stripLeadingSlash(location.pathname)

  return nested.map(({ href, label }) => {
    const parsedLink = stripLeadingSlash(href)
    const active =
      (parsedLink.length === 0 && parsedCurrentLocation.length === 0) ||
      (parsedLink.length > 0 && startsWith(parsedCurrentLocation, parsedLink))

    return {
      active,
      href,
      label,
    }
  })
}

export default usePrimaryNavData
