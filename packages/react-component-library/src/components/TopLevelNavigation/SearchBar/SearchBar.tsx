import React, { useCallback, useRef, useState } from 'react'
import { IconChevronRight } from '@defencedigital/icon-library'

import { TextInput } from '../../TextInput'
import { useDocumentClick } from '../../../hooks'
import { StyledSearchBar } from './partials/StyledSearchBar'
import { StyledForm } from './partials/StyledForm'
import { StyledButton } from './partials/StyledButton'

export interface SearchbarProps {
  className?: string
  onSearch: (event: React.FormEvent<HTMLFormElement>, term: string) => void
  searchButton: any
  searchPlaceholder: string
  setShowSearch: (isVisible: boolean) => void
  style?: Record<string, unknown>
}

export const SearchBar: React.FC<SearchbarProps> = ({
  onSearch,
  searchButton,
  searchPlaceholder,
  setShowSearch,
  ...rest
}) => {
  const searchBoxRef = useRef()
  const [term, setTerm] = useState('')

  const onDocumentClick = useCallback(
    (event: Event) => {
      if (!searchButton.current.contains(event.target)) {
        setShowSearch(false)
      }
    },
    [searchButton, setShowSearch]
  )

  useDocumentClick(searchBoxRef, onDocumentClick)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSearch(event, term)
  }

  return (
    <StyledSearchBar ref={searchBoxRef} data-testid="searchbar" {...rest}>
      <StyledForm data-testid="searchbar-form" onSubmit={onSubmit}>
        <TextInput
          autoFocus
          id="term"
          name="term"
          onChange={(event) => {
            setTerm(event.target.value)
          }}
          placeholder={searchPlaceholder}
          value={term}
        />
        <StyledButton
          aria-label="Search"
          data-testid="searchbar-submit-button"
          type="submit"
        >
          <IconChevronRight />
        </StyledButton>
      </StyledForm>
    </StyledSearchBar>
  )
}

SearchBar.displayName = 'SearchBar'
