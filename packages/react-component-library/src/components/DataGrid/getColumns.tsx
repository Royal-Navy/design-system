import React from 'react'
import {
  IconKeyboardArrowDown,
  IconKeyboardArrowRight,
} from '@royalnavy/icon-library'
import { type ColumnDef } from '@tanstack/react-table'

import { IndeterminateCheckbox } from '../Checkbox'
import { StyledExpandButton, StyledControlCell } from './partials'

export function getColumns<T>(
  columns: ColumnDef<T>[],
  enableRowSelection?: boolean,
  hideCheckboxes?: boolean,
  hasSubRows?: boolean
): ColumnDef<T>[] | undefined {
  if ((!enableRowSelection || hideCheckboxes) && !hasSubRows) {
    return columns
  }

  const showCheckboxes = enableRowSelection && !hideCheckboxes

  const rowSelectExpandColumn: ColumnDef<T> = {
    id: 'select-expand',
    header: ({ table }) => {
      const {
        getIsAllRowsSelected,
        getIsSomeRowsSelected,
        getToggleAllRowsSelectedHandler,
        getToggleAllRowsExpandedHandler,
        getIsAllRowsExpanded,
        getCanSomeRowsExpand,
      } = table

      const anySelectedGlobally =
        Object.keys(table.getState().rowSelection || {}).length > 0

      const isAllSelectedOnPage = getIsAllRowsSelected()
      const isSomeSelectedOnPage = getIsSomeRowsSelected()

      const isIndeterminate =
        isSomeSelectedOnPage || (anySelectedGlobally && !isAllSelectedOnPage)

      return (
        <>
          {showCheckboxes && (
            <IndeterminateCheckbox
              checked={isAllSelectedOnPage}
              indeterminate={isIndeterminate}
              onChange={getToggleAllRowsSelectedHandler()}
              aria-label="Select / deselect all rows"
            />
          )}
          {getCanSomeRowsExpand() && (
            <StyledExpandButton
              onClick={getToggleAllRowsExpandedHandler()}
              aria-label="Expand / collapse all rows"
            >
              {getIsAllRowsExpanded() ? (
                <IconKeyboardArrowDown />
              ) : (
                <IconKeyboardArrowRight />
              )}
            </StyledExpandButton>
          )}
        </>
      )
    },
    cell: ({
      row: {
        getIsSelected,
        getCanSelect,
        getIsSomeSelected,
        getToggleSelectedHandler,
        getToggleExpandedHandler,
        getIsExpanded,
        getCanExpand,
        id,
        depth,
      },
    }) => (
      <StyledControlCell $depth={depth}>
        {showCheckboxes && (
          <IndeterminateCheckbox
            checked={getIsSelected()}
            disabled={!getCanSelect()}
            indeterminate={getIsSomeSelected()}
            onChange={getToggleSelectedHandler()}
            aria-labelledby={id}
          />
        )}
        {getCanExpand() && (
          <StyledExpandButton
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation()
              getToggleExpandedHandler()()
            }}
            aria-expanded={getIsExpanded()}
            aria-label="Expand / collapse row"
          >
            {getIsExpanded() ? (
              <IconKeyboardArrowDown />
            ) : (
              <IconKeyboardArrowRight />
            )}
          </StyledExpandButton>
        )}
      </StyledControlCell>
    ),
  }

  return [rowSelectExpandColumn, ...columns]
}
