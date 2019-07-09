import { Form, Field, Formik } from 'formik'
import React from 'react'

import { TextInput } from '../../components'
import { Logo as DefaultLogo, Search as SearchIcon } from '../../icons'

interface MastheadProps {
  Logo?: React.ComponentType
  onSearch?: (term: string) => void
  searchPlaceholder?: string
  title: string
}

interface SearchFormType {
  term: string
}

const Masthead: React.FC<MastheadProps> = ({
  Logo = DefaultLogo,
  onSearch,
  searchPlaceholder = '',
  title,
}) => {
  const initialValues: SearchFormType = { term: '' }

  const onSubmit = ({ term }: SearchFormType) => {
    onSearch(term)
  }

  return (
    <div className="rn-masthead">
      <div className="rn-masthead__service-name">
        <Logo />
        <span className="rn-masthead__title">{title}</span>
      </div>
      {onSearch && (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form className="rn-masthead__search">
            <Field
              component={TextInput}
              endAdornment={<SearchIcon />}
              id="term"
              name="term"
              placeholder={searchPlaceholder}
            />
          </Form>
        </Formik>
      )}
    </div>
  )
}

export default Masthead
