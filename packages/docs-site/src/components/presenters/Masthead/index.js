import React, { useState } from 'react'
import {
  Button,
  Nav,
  PhaseBanner,
  Icons,
} from '@royalnavy/react-component-library'
import { Form, Field, Formik } from 'formik'

import TextInput from '../TextInput'
import SiteLogo from './images/site-logo.svg'

import './masthead.scss'

const { Search, TriangleDown, TriangleUp } = Icons

const MastHead = () => {
  const [open, setOpen] = useState(false)

  const initialValues = { search: '' }

  const onSubmit = term => {
    console.log('Do a thing:', term)
  }

  const toggle = () => {
    setOpen(!open)
  }

  const navItems = [
    {
      href: '1',
      label: 'Get started',
    },
    {
      href: '1',
      label: 'Styles',
    },
    {
      active: true,
      href: '1',
      label: 'Components',
    },
    {
      href: '1',
      label: 'Patterns',
    },
    {
      href: '1',
      label: 'Community',
    },
    {
      href: '1',
      label: 'About',
    },
  ]

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

            <Button
              onClick={toggle}
              icon={open ? <TriangleDown /> : <TriangleUp />}
            >
              Menu
            </Button>
          </Form>
        </Formik>
      </div>
      <PhaseBanner className="masthead__phasebanner" />
      <div className="masthead__container">
        <Nav
          className={open ? 'is-open' : 'is-closed'}
          orientation="horizontal"
          navItems={navItems}
        />
      </div>
    </div>
  )
}

export default MastHead
