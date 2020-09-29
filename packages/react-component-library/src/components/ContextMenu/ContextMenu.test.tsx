import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { RenderResult, render } from '@testing-library/react'
import { IconSettings } from '@royalnavy/icon-library'

import { ContextMenu, ContextMenuItem, ContextMenuDivider } from '.'
import { Link } from '../Link'

const CustomLink = ({ children, onClick }: any) => {
  return (
    <button onClick={onClick} data-testid="context-menu-custom-link">
      {children}
    </button>
  )
}

describe('ContextMenu', () => {
  let wrapper: RenderResult
  let onClickSpy: (e: React.MouseEvent<HTMLElement>) => void

  describe('With link', () => {
    beforeEach(() => {
      wrapper = render(
        <ContextMenu>
          <ContextMenuItem link={<Link href="/hello-foo">Hello, Foo!</Link>} />
          <ContextMenuItem link={<Link href="/hello-bar">Hello, Bar!</Link>} />
        </ContextMenu>
      )
    })

    it('renders the links', () => {
      expect(wrapper.queryByText('Hello, Foo!')).toBeInTheDocument()
      expect(wrapper.queryByText('Hello, Bar!')).toBeInTheDocument()
    })
  })

  describe('With custom link', () => {
    beforeEach(() => {
      onClickSpy = jest.fn()

      wrapper = render(
        <ContextMenu>
          <ContextMenuItem
            link={<CustomLink onClick={onClickSpy}>Click me!</CustomLink>}
          />
        </ContextMenu>
      )

      wrapper.getByTestId('context-menu-custom-link').click()
    })

    it('invokes the onClick event when the custom link is clicked', () => {
      expect(onClickSpy).toHaveBeenCalledTimes(1)
    })
  })

  describe('With icons', () => {
    beforeEach(() => {
      wrapper = render(
        <ContextMenu>
          <ContextMenuItem
            icon={<IconSettings data-testid="context-menu-item-icon" />}
            link={<Link href="/hello-foo">Hello, Foo!</Link>}
          />
        </ContextMenu>
      )
    })

    it('renders the icons', () => {
      expect(
        wrapper.queryByTestId('context-menu-item-icon')
      ).toBeInTheDocument()
    })
  })

  describe('With dividers', () => {
    beforeEach(() => {
      wrapper = render(
        <ContextMenu>
          <ContextMenuDivider />
          <ContextMenuItem
            icon={IconSettings}
            link={<Link href="/hello-foo">Hello, Foo!</Link>}
          />
          <ContextMenuDivider />
        </ContextMenu>
      )
    })

    it('renders the dividers', () => {
      expect(wrapper.queryAllByTestId('context-menu-divider')).toHaveLength(2)
    })
  })
})
