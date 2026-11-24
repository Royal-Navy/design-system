import { styled } from 'styled-components'
import { themeColor, spacing } from '@royalnavy/design-tokens'

export const StyledContextMenuItem = styled.li`
  border-radius: 2px;

  > * {
    text-overflow: ellipsis;
    display: flex;
    padding: ${spacing('3')} ${spacing('4')};
    line-height: 1.2;
  }

  &:hover {
    background-color: ${themeColor('neutral', '100')};

    > * {
      text-decoration: none;
    }
  }
`
