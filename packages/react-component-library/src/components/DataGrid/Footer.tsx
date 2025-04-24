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
  dataLength?: number
  isPaginated: boolean
  onPaginationChange: BasePaginationOnChangeType
  onRowsPerPageChange: BaseSelectOnChangeType
  pagination: PaginationState
  pageCount: number
}

export const Footer = ({
  dataLength,
  isPaginated,
  onPaginationChange,
  onRowsPerPageChange,
  pageCount,
  pagination,
}: FooterProps) => (
  <StyledFooter>
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
