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
  onRowsPerPageChange: BaseSelectOnChangeType
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
}: FooterProps) => (
  <StyledFooter $isFullWidth={isFullWidth}>
    {footerLeftSlot || <div />}
    {isPaginated && (
      <Pagination
        name="datagrid-pagination"
        initialPage={pagination.pageIndex + 1}
        pageSize={pagination.pageSize}
        total={dataLength ?? pageCount * pagination.pageSize}
        onChange={onPaginationChange}
      />
    )}
    <RowsPerPage onChange={onRowsPerPageChange} />
  </StyledFooter>
)
