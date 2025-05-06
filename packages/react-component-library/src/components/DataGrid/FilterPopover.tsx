import React from 'react'
import { IconFilterList } from '@royalnavy/icon-library'
import {
  type Header as TanstackHeader,
  type Table as TanstackTable,
} from '@tanstack/react-table'

import { Popover } from '../Popover'
import { StyledFilterInput, StyledColButton } from './partials'

interface FilterPopoverProps<T extends object> {
  /**
   * The tanstack/react-table header instance.
   */
  header: TanstackHeader<T, unknown>
  /**
   * The tanstack/react-table instance.
   */
  table: TanstackTable<T>
}

const CLOSE_DELAY = 0

export const FilterPopover = <T extends object>({
  header,
  table,
}: FilterPopoverProps<T>) => {
  return (
    <Popover
      closeDelay={CLOSE_DELAY}
      placement="bottom"
      isClick
      content={
        <StyledFilterInput
          autoFocus
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            table.getColumn(header.id)?.setFilterValue(e.target.value)
          }
          placeholder={`Filter ${String(header.column.columnDef.header)}`}
          value={(table.getColumn(header.id)?.getFilterValue() as string) ?? ''}
        />
      }
    >
      <StyledColButton
        aria-label={`Filter ${String(header.column.columnDef.header)}`}
      >
        <IconFilterList />
      </StyledColButton>
    </Popover>
  )
}
