import React, { useRef, useState } from 'react'

import { TextInput } from '../../TextInput'
import { RightArrow } from '../../../icons'
import { useDocumentClick } from '../../../hooks'
import { StyledSearchBar } from './partials/StyledSearchBar'
import { StyledForm } from './partials/StyledForm'
import { StyledButton } from './partials/StyledButton'

export interface SearchbarProps {
  className?: string
  onSearch: (term: string) => void
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

  useDocumentClick(searchBoxRef, (event: Event) => {
    if (!searchButton.current.contains(event.target)) {
      setShowSearch(false)
    }
  })

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSearch(term)
  }

  return (
    <StyledSearchBar
      ref={searchBoxRef}
      data-testid="searchbar"
      {...rest}
    >
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
          <RightArrow />
        </StyledButton>
      </StyledForm>
    </StyledSearchBar>
  )
}

SearchBar.displayName = 'SearchBar'
