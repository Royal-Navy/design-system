import React, { useState } from 'react'
import classNames from 'classnames'

import { Button, BUTTON_SIZE, BUTTON_VARIANT } from '../Button'
import { Checkbox } from '../Checkbox'
import { PropsWithClassName } from '../../types/PropsWithClassName'

interface DismissibleBannerWithTitleProps extends PropsWithClassName {
  hasCheckbox?: boolean
  children: string
  onDismiss: (
    event: React.FormEvent<HTMLButtonElement>,
    canShowAgain: boolean
  ) => void
  title: string
}

interface DismissibleBannerWithArbitraryContentProps
  extends PropsWithClassName {
  hasCheckbox?: boolean
  children: React.ReactElement
  onDismiss: (
    event: React.FormEvent<HTMLButtonElement>,
    canShowAgain: boolean
  ) => void
  title?: never
}

type DismissibleBannerProps =
  | DismissibleBannerWithTitleProps
  | DismissibleBannerWithArbitraryContentProps

export const DismissibleBanner: React.FC<DismissibleBannerProps> = ({
  hasCheckbox = true,
  children,
  className,
  onDismiss,
  title,
}) => {
  const [canShowAgain, setCanShowAgain] = useState(true)

  function onButtonClick(event: React.FormEvent<HTMLButtonElement>) {
    onDismiss(event, canShowAgain)
  }

  const classes = classNames('rn-dismissable-banner', className)

  return (
    <div className={classes} data-testid="dimissablebanner-wrapper">
      <div className="rn-dismissable-banner__content">
        {title && (
          <>
            <h2
              className="rn-dismissable-banner__title"
              data-testid="dimissablebanner-title"
            >
              {title}
            </h2>
            <p
              className="rn-dismissable-banner__description"
              data-testid="dimissablebanner-description"
            >
              {children}
            </p>
          </>
        )}
        {!title && children}
      </div>
      <div className="rn-dismissable-banner__footer">
        {hasCheckbox && (
          <Checkbox
            className="rn-checkbox--dontshow"
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
      </div>
    </div>
  )
}

DismissibleBanner.displayName = 'DismissibleBanner'
