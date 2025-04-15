import React from 'react'
import { type PaginationState } from '@tanstack/react-table'

import { type PaginationProps as BasePaginationProps } from '../Pagination'
import { StyledPagination } from './partials'

interface PaginationProps
  extends Pick<BasePaginationProps, 'onChange' | 'pageSize'> {
  pagination: PaginationState
  dataLength?: number
  pageCount: number
}

export const Pagination = ({
  pagination,
  pageSize,
  dataLength,
  pageCount,
  onChange,
}: PaginationProps) => {
  return (
    <StyledPagination
      name="datagrid-pagination"
      initialPage={pagination.pageIndex + 1}
      pageSize={pagination.pageSize}
      total={dataLength ?? pageCount * pageSize}
      onChange={onChange}
    />
  )
}
