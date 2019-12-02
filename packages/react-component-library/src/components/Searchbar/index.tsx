import React, { useRef, useState } from 'react'

import TextInput from '../TextInput'
import { RightArrow } from '../../icons'
import { useDocumentClick } from '../../hooks'

export interface SearchbarProps {
  className?: string
  onSearch: (term: string) => void
  searchButton: any
  searchPlaceholder: string
  setShowSearch: (visible: boolean) => void
  style?: object
}

export const Searchbar: React.FC<SearchbarProps> = ({
  className = '',
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
    <div
      ref={searchBoxRef}
      className={`rn-searchbar ${className}`}
      {...rest}
      data-testid="searchbar"
    >
      <form
        className="rn-searchbar__form"
        data-testid="searchbar-form"
        onSubmit={onSubmit}
      >
        <TextInput
          autoFocus
          id="term"
          name="term"
          onChange={event => {
            setTerm(event.target.value)
          }}
          placeholder={searchPlaceholder}
          value={term}
        />
        <button
          type="submit"
          className="rn-searchbar__submit-button"
          data-testid="searchbar-submit-button"
        >
          <RightArrow />
        </button>
      </form>
    </div>
  )
}
