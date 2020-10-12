import React, { useContext } from 'react'
import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import { IconExitToApp } from '@royalnavy/icon-library'

import { Avatar } from '../../Avatar'
import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { LinkTypes } from '../../../common/Link'
import { SidebarContext } from './context'

export interface SidebarUserProps extends ComponentWithClass {
  initials: string
  link: React.ReactElement<LinkTypes>
  name: string
}

const { spacing, color, fontSize } = selectors

const StyledSidebarUser = styled.div`
  display: flex;
  align-items; center;
  padding: ${spacing('6')} ${spacing('4')};
  background-color: ${color('neutral', '500')};
`

const StyledSidebarUserText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 1rem);
  padding: 0 0 0 ${spacing('4')};

  > div {
    display: inline-flex;
    justify-content: center;
    flex-direction: column;

    span:first-of-type {
      color: ${color('neutral', 'white')};
      font-size: ${fontSize('s')};
    }

    span:last-of-type {
      margin-top: ${spacing('1')};
      color: ${color('neutral', '300')};
      font-size: ${fontSize('xs')};
    }
  }

  svg {
    width: 1.35rem;
    height: 1.35rem;
    color: ${color('neutral', 'white')};
    background-color: ${color('neutral', '400')};
    border-radius: 2px;
    padding: ${spacing('2')};
  }
`

const StyledAvatar = styled(Avatar)`
  width: 1.5rem;
  height: 1.5rem;
  font-size: ${fontSize('xs')};

  &:hover {
    text-decoration: none;
  }
`

export const SidebarUser: React.FC<SidebarUserProps> = ({
  initials,
  link,
  name,
}) => {
  const { isOpen } = useContext(SidebarContext)

  return React.cloneElement(link as React.ReactElement, {
    ...link.props,
    children: (
      <StyledSidebarUser>
        <StyledAvatar initials={initials} />
        {isOpen && (
          <StyledSidebarUserText>
            <div>
              <span>{name}</span>
              <span>View Profile</span>
            </div>
            <IconExitToApp />
          </StyledSidebarUserText>
        )}
      </StyledSidebarUser>
    ),
    'data-testid': 'sidebar-user',
  })
}

SidebarUser.displayName = 'SidebarUser'
