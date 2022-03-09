import React, { useState } from 'react'

import { Button, BUTTON_VARIANT } from '../Button'
import { COMPONENT_SIZE } from '../Forms'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledDismissibleBanner } from './partials/StyledDismissibleBanner'
import { StyledContent } from './partials/StyledContent'
import { StyledTitle } from './partials/StyledTitle'
import { StyledFooter } from './partials/StyledFooter'
import { StyledDontShow } from './partials/StyledDontShow'
import { StyledDescription } from './partials/StyledDescription'
import { CHECKBOX_RADIO_VARIANT } from '../CheckboxRadioBase'

export interface DismissibleBannerWithTitleProps extends ComponentWithClass {
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

export interface DismissibleBannerWithArbitraryContentProps
  extends ComponentWithClass {
  /**
   * Toggles whether to display the 'Don't show this again' checkbox.
   */
  hasCheckbox?: boolean
  /**
   * Arbitrary JSX content to display in the main body of the component.
   */
  children: React.ReactChild
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

  const onButtonClick = (event: React.FormEvent<HTMLButtonElement>) => {
    onDismiss?.(event, canShowAgain)
  }

  return (
    <StyledDismissibleBanner data-testid="dimissiblebanner-wrapper" {...rest}>
      <StyledContent>
        {title && (
          <>
            <StyledTitle data-testid="dimissiblebanner-title">
              {title}
            </StyledTitle>
            <StyledDescription data-testid="dimissiblebanner-description">
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
            name="dimissiblebanner-dontshow"
            onChange={() => setCanShowAgain(!canShowAgain)}
            variant={CHECKBOX_RADIO_VARIANT.NO_CONTAINER}
          />
        )}
        {!hasCheckbox && <span />}
        <Button
          data-testid="dimissiblebanner-dismiss"
          onClick={onButtonClick}
          size={COMPONENT_SIZE.SMALL}
          variant={BUTTON_VARIANT.SECONDARY}
        >
          Dismiss
        </Button>
      </StyledFooter>
    </StyledDismissibleBanner>
  )
}

DismissibleBanner.displayName = 'DismissibleBanner'
