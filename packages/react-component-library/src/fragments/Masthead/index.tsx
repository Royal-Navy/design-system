import { Form, Field, Formik } from 'formik'
import React, { useState } from 'react'

import { Button, Nav, PhaseBanner, TextInput } from '../../components'
import { Search, TriangleDown, TriangleUp } from '../../icons'
import SiteLogo from './Logo'

export interface MastheadNavItem {
  active?: boolean
  href: string
  label: string
}

export interface SearchFormProps {
  term: string
}

export interface MastheadProps {
  navItems?: MastheadNavItem[]
  onSearch?: (data: SearchFormProps) => void
  phase?: 'alpha' | 'beta'
  title?: string
}

const Masthead: React.FC<MastheadProps> = ({
  navItems = [],
  onSearch = () => {},
  phase,
  title,
}) => {
  const [open, setOpen] = useState(false)

  const initialValues: SearchFormProps = { term: '' }
  const hasNavItems = navItems.length > 0

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div className="rn-masthead">
      <div className="rn-masthead__container">
        <span className="rn-masthead__logo">
          <SiteLogo title={title} />
        </span>
        <Formik initialValues={initialValues} onSubmit={onSearch}>
          <Form className="rn-masthead__search">
            <Field
              component={TextInput}
              endAdornment={<Search />}
              id="searcbar"
              name="search"
              placeholder="search"
            />

            {hasNavItems && (
              <Button
                data-testid="primary-nav-button"
                onClick={toggle}
                icon={open ? <TriangleDown /> : <TriangleUp />}
              >
                Menu
              </Button>
            )}
          </Form>
        </Formik>
      </div>
      {phase && <PhaseBanner phase={phase} />}
      {hasNavItems && (
        <div
          data-testid="primary-nav"
          className={`rn-masthead__container rn-masthead__nav ${
            open ? 'is-open' : 'is-closed'
          }`}
        >
          <Nav orientation="horizontal" navItems={navItems} />
        </div>
      )}
    </div>
  )
}

export default Masthead
