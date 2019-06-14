import { Form, Field, Formik } from 'formik'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import {
  Button,
  Nav,
  PhaseBanner,
  Icons,
} from '@royalnavy/react-component-library'

import TextInput from '../TextInput'
import SiteLogo from './images/site-logo.svg'

import './masthead.scss'

const { Search, TriangleDown, TriangleUp } = Icons

const MastHead = ({ navItems }) => {
  const [open, setOpen] = useState(false)

  const initialValues = { search: '' }
  const hasNavItems = navItems.length > 0

  const onSubmit = term => {
    console.log('Do a thing:', term)
  }

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div className="masthead">
      <div className="masthead__container">
        <SiteLogo className="masthead__logo" />
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form className="masthead__search">
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
      <PhaseBanner className="masthead__phasebanner" />
      {hasNavItems && (
        <div
          data-testid="primary-nav"
          className={`masthead__container masthead__nav ${
            open ? 'is-open' : 'is-closed'
          }`}
        >
          <Nav orientation="horizontal" navItems={navItems} />
        </div>
      )}
    </div>
  )
}

MastHead.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.boolean,
      href: PropTypes.string,
      label: PropTypes.string,
    })
  ),
}

MastHead.defaultProps = {
  navItems: [],
}

export default MastHead
