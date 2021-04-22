import React, { useState } from 'react'

import { Button, BUTTON_SIZE, BUTTON_VARIANT } from '../Button'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledDismissibleBanner } from './partials/StyledDismissibleBanner'
import { StyledContent } from './partials/StyledContent'
import { StyledTitle } from './partials/StyledTitle'
import { StyledFooter } from './partials/StyledFooter'
import { StyledDontShow } from './partials/StyledDontShow'
import { StyledDescription } from './partials/StyledDescription'

interface DismissibleBannerWithTitleProps extends ComponentWithClass {
  /**
   * Toggles whether to display the 'Don't show this again' checkbox.
   */
  hasCheckbox?: boolean
  /**
   * Description text to display in the main body of the component.
   */
  children: string
  /**
   * Optional handler function to be invoked when the Dismiss button is clicked.
   */
  onDismiss?: (
    event: React.FormEvent<HTMLButtonElement>,
    canShowAgain: boolean
  ) => void
  /**
   * Optional text title to display at the top of the component.
   */
  title: string
}

interface DismissibleBannerWithArbitraryContentProps
  extends ComponentWithClass {
  /**
   * Toggles whether to display the 'Don't show this again' checkbox.
   */
  hasCheckbox?: boolean
  /**
   * Arbitrary JSX content to display in the main body of the component.
   */
  children: React.ReactElement
  /**
   * Optional handler function to be invoked when the Dismiss button is clicked.
   */
  onDismiss?: (
    event: React.FormEvent<HTMLButtonElement>,
    canShowAgain: boolean
  ) => void
  /**
   * Optional text title to display at the top of the component.
   */
  title?: never
}

export type DismissibleBannerProps =
  | DismissibleBannerWithTitleProps
  | DismissibleBannerWithArbitraryContentProps

export const DismissibleBanner: React.FC<DismissibleBannerProps> = ({
  hasCheckbox = true,
  children,
  onDismiss,
  title,
  ...rest
}) => {
  const [canShowAgain, setCanShowAgain] = useState(true)

  function onButtonClick(event: React.FormEvent<HTMLButtonElement>) {
    onDismiss(event, canShowAgain)
  }

  return (
    <StyledDismissibleBanner data-testid="dimissablebanner-wrapper" {...rest}>
      <StyledContent>
        {title && (
          <>
            <StyledTitle data-testid="dimissablebanner-title">
              {title}
            </StyledTitle>
            <StyledDescription data-testid="dimissablebanner-description">
              {children}
            </StyledDescription>
          </>
        )}
        {!title && children}
      </StyledContent>
      <StyledFooter>
        {hasCheckbox && (
          <StyledDontShow
            label="Don't show this again"
            name="dimissablebanner-dontshow"
            onChange={() => setCanShowAgain(!canShowAgain)}
          />
        )}
        {!hasCheckbox && <span />}
        <Button
          onClick={onButtonClick}
          size={BUTTON_SIZE.SMALL}
          variant={BUTTON_VARIANT.SECONDARY}
        >
          Dismiss
        </Button>
      </StyledFooter>
    </StyledDismissibleBanner>
  )
}

DismissibleBanner.displayName = 'DismissibleBanner'
