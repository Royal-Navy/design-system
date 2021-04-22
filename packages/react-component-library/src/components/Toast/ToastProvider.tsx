import React from 'react'

import {
  ToastProvider as BaseToastProvider,
  ToastProviderProps as BaseToastProviderProps,
} from 'react-toast-notifications'

import { Toast } from '.'

export type ToastProviderProps = BaseToastProviderProps

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  ...props
}) => {
  return (
    <BaseToastProvider components={{ Toast }} {...props}>
      {children}
    </BaseToastProvider>
  )
}

ToastProvider.displayName = 'ToastProvider'
