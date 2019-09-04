import React, { useEffect, useRef, useState } from 'react'

import TextInput from '../TextInput'
import { RightArrow } from '../../icons'

interface SearchFormType {
  term: string
}

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

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSearch(term)
  }

  function documentClick(event: Event) {
    // workaround for undefined error in typescript
    const current = searchBoxRef.current || {
      contains: (target: any): boolean => target === null,
    }

    if (
      current.contains(event.target) ||
      searchButton.current.contains(event.target)
    ) {
      return
    }

    setShowSearch(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', documentClick)

    return () => {
      document.removeEventListener('mousedown', documentClick)
    }
  }, [])

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
