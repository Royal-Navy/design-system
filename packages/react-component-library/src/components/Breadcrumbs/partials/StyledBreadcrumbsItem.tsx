import { styled } from 'styled-components'
import { animation, themeColor, spacing } from '@royalnavy/design-tokens'

export const StyledBreadcrumbsItem = styled.li`
  display: inline-flex;
  transition: all ${animation('default')};
  align-items: center;

  > a {
    color: ${themeColor('neutral', '400')};
    font-weight: 400;
    text-decoration: none;

    &:hover {
      color: ${themeColor('action', '500')};
    }
  }

  svg {
    margin: 0 ${spacing('2')};
  }

  span,
  a {
    vertical-align: top;
  }
`
