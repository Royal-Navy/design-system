import React from 'react'

import {
  SelectBaseOptionAsStringProps,
  SelectBaseOptionProps,
} from './SelectBaseOption'

type SelectChildType<T> =
  | React.ReactElement<T>
  | React.ReactFragment
  | false
  | null
  | undefined

export type SelectChildWithStringType =
  SelectChildType<SelectBaseOptionAsStringProps>

export type SelectChildrenType =
  | SelectChildType<SelectBaseOptionProps>
  | SelectChildType<SelectBaseOptionProps>[]
