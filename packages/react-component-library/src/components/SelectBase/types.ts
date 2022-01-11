import React from 'react'

import { SelectBaseOptionProps } from './SelectBaseOption'

export type SelectChildType =
  | React.ReactElement<SelectBaseOptionProps>
  | React.ReactFragment
  | false
  | null
  | undefined

export type SelectChildrenType = SelectChildType | SelectChildType[]
