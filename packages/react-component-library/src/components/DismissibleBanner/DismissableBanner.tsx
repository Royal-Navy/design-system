import React, { useState } from 'react'
import classNames from 'classnames'

import { Button, BUTTON_SIZE, BUTTON_VARIANT } from '../Button'
import { Checkbox } from '../Checkbox'

interface DismissibleBannerProps extends ComponentWithClass {
  children: string
  onDismiss: (
    event: React.FormEvent<HTMLButtonElement>,
    canShowAgain: boolean
  ) => void
  title: string
}

export const DismissibleBanner: React.FC<DismissibleBannerProps> = ({
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
      </div>
      <div className="rn-dismissable-banner__footer">
        <Checkbox
          className="rn-checkbox--dontshow"
          label="Don't show this again"
          name="dimissablebanner-dontshow"
          onChange={() => setCanShowAgain(!canShowAgain)}
        />
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
