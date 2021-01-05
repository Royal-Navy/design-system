import React, { useRef } from 'react'
import '@testing-library/jest-dom/extend-expect'
import { RenderResult, render, fireEvent, act } from '@testing-library/react'
import { IconSettings } from '@royalnavy/icon-library'
import 'jest-styled-components'

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

  describe('With links, no icons and closed', () => {
    beforeEach(() => {
      const ContextExample = () => {
        const ref = useRef()

        return (
          <>
            <div ref={ref}>Right click me!</div>
            <ContextMenu attachedToRef={ref}>
              <ContextMenuItem
                link={<Link href="/hello-foo">Hello, Foo!</Link>}
              />
              <ContextMenuItem
                link={<Link href="/hello-bar">Hello, Bar!</Link>}
              />
            </ContextMenu>
          </>
        )
      }

      wrapper = render(<ContextExample />)
    })

    it('is not rendered to the DOM', () => {
      expect(wrapper.queryByTestId('context-menu')).not.toBeInTheDocument()
    })
  })

  describe('With a clickType of left', () => {
    beforeEach(() => {
      const ContextExample = () => {
        const ref = useRef()

        return (
          <>
            <div ref={ref}>Left click me!</div>
            <ContextMenu attachedToRef={ref} clickType="left">
              <ContextMenuItem
                link={<Link href="/hello-foo">Hello, Foo!</Link>}
              />
              <ContextMenuItem
                link={<Link href="/hello-bar">Hello, Bar!</Link>}
              />
            </ContextMenu>
          </>
        )
      }

      wrapper = render(<ContextExample />)
    })

    it('is not rendered to the DOM', () => {
      expect(wrapper.queryByTestId('context-menu')).not.toBeInTheDocument()
    })

    describe('and the user left clicks on the target area', () => {
      beforeEach(() => {
        fireEvent.click(wrapper.getByText('Left click me!'))
      })

      it('is is rendered to the DOM', () => {
        expect(wrapper.queryByTestId('context-menu')).toBeInTheDocument()
      })
    })
  })

  describe('With links, no icons and and open', () => {
    beforeEach(() => {
      const ContextExample = () => {
        const ref = useRef()

        return (
          <>
            <div ref={ref}>Right click me!</div>
            <ContextMenu attachedToRef={ref}>
              <ContextMenuItem
                link={<Link href="/hello-foo">Hello, Foo!</Link>}
              />
              <ContextMenuItem
                link={<Link href="/hello-bar">Hello, Bar!</Link>}
              />
            </ContextMenu>
          </>
        )
      }

      wrapper = render(<ContextExample />)

      fireEvent.contextMenu(wrapper.getByText('Right click me!'))
    })

    it('should add margin to items', () => {
      wrapper.getAllByTestId('context-menu-item-text').forEach((item) => {
        expect(item).toHaveStyleRule('margin-left', '1.25rem')
      })
    })

    it('is rendered to the DOM', () => {
      expect(wrapper.queryByTestId('context-menu')).toBeInTheDocument()
    })

    it('renders the links', () => {
      expect(wrapper.queryByText('Hello, Foo!')).toBeInTheDocument()
      expect(wrapper.queryByText('Hello, Bar!')).toBeInTheDocument()
    })

    describe('and the user clicks somewhere in the DOM', () => {
      beforeEach(() => {
        fireEvent.click(wrapper.getByText('Right click me!'))
      })

      it('hides the context menu', () => {
        expect(wrapper.queryByTestId('context-menu')).not.toBeInTheDocument()
      })
    })
  })

  describe('With custom link and open', () => {
    beforeEach(() => {
      onClickSpy = jest.fn()

      const ContextExample = () => {
        const ref: React.Ref<HTMLDivElement> = useRef()

        return (
          <>
            <div ref={ref}>Right click me!</div>
            <ContextMenu attachedToRef={ref}>
              <ContextMenuItem
                link={<CustomLink onClick={onClickSpy}>Click me!</CustomLink>}
              />
            </ContextMenu>
          </>
        )
      }

      wrapper = render(<ContextExample />)

      act(() => {
        fireEvent.contextMenu(wrapper.getByText('Right click me!'))
      })

      act(() => {
        wrapper.getByTestId('context-menu-custom-link').click()
      })
    })

    it('invokes the supplied onClick callback when the custom link is clicked', () => {
      expect(onClickSpy).toHaveBeenCalledTimes(1)
    })
  })

  describe('With icons and open', () => {
    beforeEach(() => {
      const ContextExample = () => {
        const ref = useRef()

        return (
          <>
            <div ref={ref}>Right click me!</div>
            <ContextMenu attachedToRef={ref}>
              <ContextMenuItem
                icon={<IconSettings data-testid="context-menu-item-icon" />}
                link={<Link href="/hello-foo">Hello, Foo!</Link>}
              />
            </ContextMenu>
          </>
        )
      }

      wrapper = render(<ContextExample />)

      fireEvent.contextMenu(wrapper.getByText('Right click me!'))
    })

    it('should not add margin to items', () => {
      wrapper.getAllByTestId('context-menu-item-text').forEach((item) => {
        expect(item).not.toHaveStyleRule('margin-left', '1.25rem')
      })
    })

    it('renders the icons', () => {
      expect(
        wrapper.queryByTestId('context-menu-item-icon')
      ).toBeInTheDocument()
    })
  })

  describe('With dividers and open', () => {
    beforeEach(() => {
      const ContextExample = () => {
        const ref = useRef()

        return (
          <>
            <div ref={ref}>Right click me!</div>
            <ContextMenu attachedToRef={ref}>
              <ContextMenuDivider />
              <ContextMenuItem
                icon={<IconSettings />}
                link={<Link href="/hello-foo">Hello, Foo!</Link>}
              />
              <ContextMenuDivider />
            </ContextMenu>
          </>
        )
      }

      wrapper = render(<ContextExample />)

      fireEvent.contextMenu(wrapper.getByText('Right click me!'))
    })

    it('renders the dividers', () => {
      expect(wrapper.queryAllByTestId('context-menu-divider')).toHaveLength(2)
    })
  })

  describe('With onShow and onHide', () => {
    let onShowSpy: () => void
    let onHideSpy: () => void

    beforeEach(() => {
      onShowSpy = jest.fn()
      onHideSpy = jest.fn()

      const ContextExample = () => {
        const ref = useRef()

        return (
          <>
            <div>Click elsewhere</div>
            <div ref={ref}><p>Click me!</p></div>
            <ContextMenu
              attachedToRef={ref}
              clickType="left"
              onShow={onShowSpy}
              onHide={onHideSpy}
            >
              <ContextMenuItem
                link={<Link href="/hello-foo">Hello, Foo!</Link>}
              />
              <ContextMenuItem
                link={<Link href="/hello-bar">Hello, Bar!</Link>}
              />
            </ContextMenu>
          </>
        )
      }

      wrapper = render(<ContextExample />)

      act(() => {
        fireEvent.click(wrapper.getByText('Click me!'))
      })
    })

    it('it fires the onShow event', () => {
      expect(onShowSpy).toBeCalledTimes(1)
    })

    describe('when the user closes the context', () => {
      beforeEach(() => {
        act(() => {
          fireEvent.click(wrapper.getByText('Click elsewhere'))
        })
      })

      it('it fires the onHide event', () => {
        expect(onHideSpy).toBeCalledTimes(1)
      })
    })
  })
})
