import React, { useEffect, useRef } from 'react'
import { Form, Field, Formik } from 'formik'

import withFormik from '../../enhancers/withFormik'
import TextInput from '../TextInput'
import { RightArrow } from '../../icons'

const FormikTextInput = withFormik(TextInput)

interface SearchFormType {
  term: string
}

const initialValues: SearchFormType = { term: '' }

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

  const onSubmit = ({ term }: SearchFormType) => {
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
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <div
        ref={searchBoxRef}
        className={`rn-searchbar ${className}`}
        {...rest}
        data-testid="searchbar"
      >
        <Form className="rn-searchbar__form" data-testid="searchbar-form">
          <Field
            component={FormikTextInput}
            id="term"
            name="term"
            onBlur={() => {}}
            placeholder={searchPlaceholder}
          />
          <button
            type="submit"
            className="rn-searchbar__submit-button"
            data-testid="searchbar-submit-button"
          >
            <RightArrow />
          </button>
        </Form>
      </div>
    </Formik>
  )
}
