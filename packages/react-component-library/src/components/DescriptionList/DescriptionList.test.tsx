import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { DescriptionList, DescriptionListItem } from '.'

describe('DescriptionList', () => {
  let wrapper: RenderResult

  describe('default props', () => {
    beforeEach(() => {
      wrapper = render(
        <DescriptionList data-arbitrary="arbitrary" description="description">
          <DescriptionListItem data-arbitrary="arbitrary-item" title="One">
            1
          </DescriptionListItem>
          <DescriptionListItem title="Two">2</DescriptionListItem>
          <DescriptionListItem title="Three">3</DescriptionListItem>
        </DescriptionList>
      )
    })

    it('should spread arbitrary props to the description list', () => {
      expect(wrapper.getByTestId('description-list')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary'
      )
    })

    it('should spread arbitrary props to the description list items', () => {
      expect(
        wrapper.getAllByTestId('description-list-item')[0]
      ).toHaveAttribute('data-arbitrary', 'arbitrary-item')
    })

    it('should not set `aria-expanded` on the button', () => {
      expect(
        wrapper.getByTestId('description-list-header')
      ).not.toHaveAttribute('aria-expanded')
    })

    it('should not set `aria-label` on the button', () => {
      expect(
        wrapper.getByTestId('description-list-header')
      ).not.toHaveAttribute('aria-label')
    })

    it('should not set `aria-owns` on the button', () => {
      expect(
        wrapper.getByTestId('description-list-header')
      ).not.toHaveAttribute('aria-owns')
    })

    it('should render the description', () => {
      expect(wrapper.queryByText('description')).toBeInTheDocument()
    })

    it('should not render the badge', () => {
      expect(wrapper.queryAllByTestId('badge')).toHaveLength(0)
    })

    it('should render a list of items', () => {
      const linkElements = wrapper.queryAllByTestId('description-list-item')
      expect(linkElements).toHaveLength(3)
    })
  })

  describe('when collapsible', () => {
    beforeEach(() => {
      wrapper = render(
        <DescriptionList description="title" isCollapsible>
          <DescriptionListItem title="One">1</DescriptionListItem>
          <DescriptionListItem title="Two">2</DescriptionListItem>
          <DescriptionListItem title="Three">3</DescriptionListItem>
        </DescriptionList>
      )
    })

    it('should set `aria-expanded` on the button to `false`', () => {
      expect(wrapper.getByTestId('description-list-header')).toHaveAttribute(
        'aria-expanded',
        'false'
      )
    })

    it('should set `aria-label` on the button to `Show data`', () => {
      expect(wrapper.getByTestId('description-list-header')).toHaveAttribute(
        'aria-label',
        'Show data'
      )
    })

    it('should set `aria-owns` on the button to the ID of the sheet', () => {
      const sheetId = wrapper
        .getByTestId('description-list-sheet')
        .getAttribute('id')

      expect(wrapper.getByTestId('description-list-header')).toHaveAttribute(
        'aria-owns',
        sheetId
      )
    })

    it('should hide the items', () => {
      expect(wrapper.getAllByTestId('description-list-item')[0]).toBeVisible()
    })

    it('should render the badge', () => {
      expect(wrapper.queryByTestId('badge')).toHaveTextContent('3')
    })

    it('should set the `aria-hidden` attribute on the icon to `true`', () => {
      expect(wrapper.queryByTestId('arrow-down-icon')).toHaveAttribute(
        'aria-hidden',
        'true'
      )
    })

    describe('when the header is clicked', () => {
      let initialSheetId: string

      beforeEach(() => {
        initialSheetId = wrapper.getByTestId('description-list-sheet').id
        wrapper.getByTestId('description-list-header').click()
      })

      it('does not generate a new sheet `id`', () => {
        expect(wrapper.getByTestId('description-list-sheet')).toHaveAttribute(
          'id',
          initialSheetId
        )
      })

      it('should set `aria-expanded` on the button to `true`', () => {
        expect(wrapper.getByTestId('description-list-header')).toHaveAttribute(
          'aria-expanded',
          'true'
        )
      })

      it('should set `aria-label` on the button to `Hide data`', () => {
        expect(wrapper.getByTestId('description-list-header')).toHaveAttribute(
          'aria-label',
          'Hide data'
        )
      })

      it('should show the items', () => {
        expect(wrapper.getAllByTestId('description-list-item')[0]).toBeVisible()
      })
    })
  })
})
