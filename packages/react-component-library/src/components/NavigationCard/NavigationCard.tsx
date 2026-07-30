import { IconChevronRight } from '@royalnavy/icon-library'
import React from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { NAVIGATION_CARD_COLOR } from './constants'
import {
  StyledChevron,
  StyledContent,
  StyledDescription,
  StyledIconPanel,
  StyledNavigationCard,
  StyledTitle,
} from './partials'
import { NavigationCardColorType } from './types'

export interface NavigationCardProps
  extends Omit<ComponentWithClass, 'children'> {
  /**
   * The link element (e.g. an anchor or router `Link`) whose text becomes the
   * card title. The whole card is made clickable via this single link.
   */
  link: React.ReactElement
  /**
   * Optional icon rendered in the coloured panel to the left of the content.
   */
  icon?: React.ReactNode
  /**
   * Optional supporting text displayed beneath the title.
   */
  description?: React.ReactNode
  /**
   * Colour applied to the icon panel, chevron and hover/focus states.
   */
  color?: NavigationCardColorType
}

export const NavigationCard: React.FC<NavigationCardProps> = ({
  link,
  icon,
  description,
  color = NAVIGATION_CARD_COLOR.ACTION,
  ...rest
}) => (
  <StyledNavigationCard data-testid="navigation-card" $color={color} {...rest}>
    {icon && (
      <StyledIconPanel
        data-testid="navigation-card-icon"
        $color={color}
        aria-hidden
      >
        {icon}
      </StyledIconPanel>
    )}
    <StyledContent>
      <StyledTitle $color={color}>{link}</StyledTitle>
      {description && <StyledDescription>{description}</StyledDescription>}
    </StyledContent>
    <StyledChevron
      data-testid="navigation-card-chevron"
      $color={color}
      aria-hidden
    >
      <IconChevronRight />
    </StyledChevron>
  </StyledNavigationCard>
)

NavigationCard.displayName = 'NavigationCard'
