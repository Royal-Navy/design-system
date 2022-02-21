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
  setShowSearch: (isVisible: boolean) => void
  style?: Record<string, unknown>
}

export const SearchBar: React.FC<SearchbarProps> = ({
  onSearch,
  searchButton,
  setShowSearch,
  ...rest
}) => {
  const searchBoxRef = useRef(null)
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
          label=""
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setTerm(event.target.value)
          }}
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
