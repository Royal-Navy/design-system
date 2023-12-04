import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { IconLayers, IconAnchor, IconShare } from '@royalnavy/icon-library'
import { render, RenderResult, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Dropdown } from './Dropdown'

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
]

describe('Dropdown', () => {
  let wrapper: RenderResult
  let onSelectSpy: (value: string) => void

  describe('all props', () => {
    beforeEach(() => {
      onSelectSpy = jest.fn()

      wrapper = render(
        <Dropdown
          onSelect={onSelectSpy}
          options={options}
          label="Dropdown label"
          labelIcon={<IconLayers />}
        />
      )
    })

    it('should render the label icon', () => {
      expect(wrapper.getByTestId('placeholder-icon')).toBeInTheDocument()
    })

    it('should render the label', () => {
      expect(wrapper.getByTestId('placeholder-label')).toHaveTextContent(
        'Dropdown label'
      )
    })

    it('should set the ARIA attributes on the input', () => {
      expect(wrapper.container.querySelector('input')).toHaveAttribute(
        'aria-label',
        'Dropdown label'
      )
    })

    describe('when the dropdown is clicked', () => {
      beforeEach(() => {
        fireEvent.focus(wrapper.getByRole('textbox'))
        fireEvent.keyDown(wrapper.getByRole('textbox'), {
          key: 'ArrowDown',
          code: 40,
        })
      })

      it('should render three options', () => {
        expect(wrapper.getByText('Option 1')).toBeInTheDocument()
        expect(wrapper.getByText('Option 2')).toBeInTheDocument()
        expect(wrapper.getByText('Option 3')).toBeInTheDocument()
      })

      it('should not render label end adornments', () => {
        expect(
          wrapper.queryAllByTestId('dropdown-label-icon-visibility')
        ).toHaveLength(0)
        expect(
          wrapper.queryAllByTestId('dropdown-label-icon-hidden')
        ).toHaveLength(0)
      })

      describe('when the second option is clicked', () => {
        beforeEach(() => {
          wrapper.getByText('Option 2').click()
        })

        it('should call the `onSelect` callback once', () => {
          expect(onSelectSpy).toHaveBeenCalledTimes(1)
          expect(onSelectSpy).toHaveBeenCalledWith('2')
        })
      })
    })
  })

  describe('minimal props', () => {
    beforeEach(() => {
      onSelectSpy = jest.fn()

      wrapper = render(
        <Dropdown
          onSelect={onSelectSpy}
          options={options}
          label="Dropdown label"
        />
      )
    })

    it('should render the label', () => {
      expect(wrapper.getByTestId('placeholder-label')).toBeInTheDocument()
    })

    it('should not render the label icon', () => {
      expect(wrapper.queryAllByTestId('placeholder-icon')).toHaveLength(0)
    })
  })

  describe('with option icons', () => {
    beforeEach(() => {
      onSelectSpy = jest.fn()

      const optionsWithIcons = [
        {
          ...options[0],
          icon: <IconAnchor />,
          isHidden: true,
        },
        {
          ...options[1],
          icon: <IconAnchor />,
          isVisible: true,
        },
        {
          ...options[3],
          icon: <IconAnchor />,
          rightContent: <IconShare data-testid="dropdown-label-icon-share" />,
        },
      ]

      wrapper = render(
        <Dropdown
          onSelect={onSelectSpy}
          options={optionsWithIcons}
          label="Dropdown label"
        />
      )

      fireEvent.focus(wrapper.getByRole('textbox'))
      fireEvent.keyDown(wrapper.getByRole('textbox'), {
        key: 'ArrowDown',
        code: 40,
      })
    })

    it('should render the label icons', () => {
      expect(wrapper.getAllByTestId('dropdown-label-icon')).toHaveLength(3)
    })

    it('should render the label end adornments', () => {
      expect(
        wrapper.getByTestId('dropdown-label-icon-visibility')
      ).toBeInTheDocument()
      expect(
        wrapper.getByTestId('dropdown-label-icon-hidden')
      ).toBeInTheDocument()
      expect(
        wrapper.getByTestId('dropdown-label-icon-share')
      ).toBeInTheDocument()
    })
  })

  describe('when onChange is omitted and the dropdown is clicked', () => {
    beforeEach(() => {
      wrapper = render(<Dropdown options={options} label="Dropdown label" />)
      return userEvent.click(wrapper.getByRole('textbox'))
    })

    it('does not throw an error when an option is clicked', () => {
      expect(() => wrapper.getByText('Option 1').click()).not.toThrow()
    })
  })
})
