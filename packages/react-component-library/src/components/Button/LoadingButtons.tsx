import React, { useEffect, useState } from 'react'

import { Button } from './Button'
import { BUTTON_VARIANT } from './constants'
import { COMPONENT_SIZE, ComponentSizeType } from '../Forms'

const allVariants = [
  BUTTON_VARIANT.PRIMARY,
  BUTTON_VARIANT.SECONDARY,
  BUTTON_VARIANT.TERTIARY,
  BUTTON_VARIANT.DANGER,
]

export const LoadingButtons = ({
  size = COMPONENT_SIZE.FORMS,
}: {
  size: ComponentSizeType
}) => {
  const [isLoading, setIsLoading] = useState(allVariants)

  useEffect(() => {
    const handleInterval = () => {
      if (!isLoading.length) {
        setIsLoading(allVariants)
        return
      }

      setIsLoading((current) => {
        return current.slice(1)
      })
    }

    const interval = window.setInterval(handleInterval, 1000)

    return () => window.clearInterval(interval)
  }, [isLoading])

  return (
    <>
      <Button
        size={size}
        isLoading={isLoading.some((_) => _ === BUTTON_VARIANT.PRIMARY)}
        title="Primary loading"
      >
        Primary
      </Button>
      &nbsp;
      <Button
        size={size}
        isLoading={isLoading.some((_) => _ === BUTTON_VARIANT.SECONDARY)}
        variant={BUTTON_VARIANT.SECONDARY}
      >
        Secondary
      </Button>
      &nbsp;
      <Button
        size={size}
        isLoading={isLoading.some((_) => _ === BUTTON_VARIANT.TERTIARY)}
        variant={BUTTON_VARIANT.TERTIARY}
      >
        Tertiary
      </Button>
      &nbsp;
      <Button
        size={size}
        isLoading={isLoading.some((_) => _ === BUTTON_VARIANT.DANGER)}
        variant={BUTTON_VARIANT.DANGER}
      >
        Danger
      </Button>
    </>
  )
}
