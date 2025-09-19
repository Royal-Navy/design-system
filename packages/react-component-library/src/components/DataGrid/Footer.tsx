import React from 'react'
import { type PaginationState } from '@tanstack/react-table'

import {
  Pagination,
  type OnChangeType as BasePaginationOnChangeType,
} from '../Pagination'
import { StyledFooter } from './partials'
import { RowsPerPage } from '../RowsPerPage/RowsPerPage'
import { OnChangeType as BaseSelectOnChangeType } from '../SelectBase'

interface FooterProps {
  /**
   * Total number of data items when pagination is used.
   */
  dataLength?: number
  /**
   * Whether the footer includes pagination controls.
   */
  isPaginated: boolean
  /**
   * Callback function triggered when pagination is changed.
   */
  onPaginationChange: BasePaginationOnChangeType
  /**
   * Callback function triggered when the rows-per-page value changes.
   */
  onRowsPerPageChange: BaseSelectOnChangeType<string | null>
  /**
   * Current pagination state object.
   */
  pagination: PaginationState
  /**
   * Total number of pages when using manual pagination.
   */
  pageCount: number
  /**
   * Whether the footer should take up the full width of its container.
   */
  isFullWidth: boolean
  /**
   * Optional content to be displayed in the left side of the footer.
   * Useful for adding action buttons or custom controls.
   */
  footerLeftSlot?: React.ReactNode
  /**
   * Whether to show the "Showing X to Y of Z" text in the RowsPerPage component.
   */
  showRowsPerPageItemRange?: boolean
}

export const Footer = ({
  dataLength,
  isPaginated,
  onPaginationChange,
  onRowsPerPageChange,
  pageCount,
  pagination,
  isFullWidth,
  footerLeftSlot,
  showRowsPerPageItemRange,
}: FooterProps) => {
  // For internal pagination, use dataLength directly
  // For manual pagination without totalCount, fallback to pageCount * pageSize
  const totalItems = dataLength ?? pageCount * pagination.pageSize

  return (
    <StyledFooter $isFullWidth={isFullWidth}>
      {footerLeftSlot || <div />}
      {isPaginated && (
        <Pagination
          name="datagrid-pagination"
          initialPage={pagination.pageIndex + 1}
          pageSize={pagination.pageSize}
          total={totalItems}
          onChange={onPaginationChange}
        />
      )}
      <RowsPerPage
        onChange={onRowsPerPageChange}
        showItemRange={showRowsPerPageItemRange}
        currentPage={pagination.pageIndex + 1}
        totalItems={totalItems}
        value={pagination.pageSize.toString()}
      />
    </StyledFooter>
  )
}
