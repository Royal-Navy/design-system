import { Transition } from 'react-transition-group'
import React from 'react'
import type { Placement } from '@floating-ui/core'

import { FLOATING_BOX_SCHEME } from '../../primitives/FloatingBox/constants'
import { FloatingBoxContent } from '../../primitives/FloatingBox/FloatingBoxContent'
import { getId } from '../../helpers'
import { StyledArrow } from '../../primitives/FloatingBox/partials/StyledArrow'
import { StyledDatePickerESheet } from './partials/StyledDatePickerESheet'

interface DatePickerESheetProps {
  arrowElementRef: React.MutableRefObject<HTMLDivElement>
  children?: React.ReactElement
  contentId?: string
  floatingElementRef: (node: HTMLElement | null) => void
  isVisible?: boolean
  placement: Placement
  role?: string
  styles: { [key: string]: React.CSSProperties }
}

const TRANSITION_STYLES = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
}

export const DatePickerESheet: React.FC<DatePickerESheetProps> = ({
  arrowElementRef,
  children,
  contentId = getId('datepicker-sheet'),
  floatingElementRef,
  isVisible,
  placement,
  styles,
  ...rest
}) => {
  return (
    <Transition in={isVisible} timeout={0} unmountOnExit>
      {(state) => (
        <StyledDatePickerESheet
          style={{ ...styles.float, ...TRANSITION_STYLES[state] }}
          ref={floatingElementRef}
          role="dialog"
          data-testid="floating-box"
          {...rest}
        >
          <FloatingBoxContent
            contentId={contentId}
            scheme={FLOATING_BOX_SCHEME.LIGHT}
            data-testid="floating-box-content"
          >
            <StyledArrow
              $placement={placement}
              ref={arrowElementRef}
              style={styles.arrow}
            />
            {children}
          </FloatingBoxContent>
        </StyledDatePickerESheet>
      )}
    </Transition>
  )
}
