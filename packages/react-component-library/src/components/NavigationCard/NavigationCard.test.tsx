import { color } from '@royalnavy/design-tokens'
import { IconHome } from '@royalnavy/icon-library'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { NAVIGATION_CARD_COLOR } from './constants'
import { NavigationCard } from './index'

describe('NavigationCard', () => {
  it('renders the title from the supplied link', () => {
    render(<NavigationCard link={<a href="/library">File library</a>} />)

    expect(screen.getByRole('link', { name: 'File library' })).toHaveAttribute(
      'href',
      '/library'
    )
  })

  it('renders the optional description', () => {
    render(
      <NavigationCard
        link={<a href="/library">File library</a>}
        description="Browse and download all received files."
      />
    )

    expect(
      screen.getByText('Browse and download all received files.')
    ).toBeInTheDocument()
  })

  it('renders the icon panel when an icon is provided', () => {
    render(
      <NavigationCard
        link={<a href="/library">File library</a>}
        icon={<IconHome />}
      />
    )

    expect(screen.getByTestId('navigation-card-icon')).toBeInTheDocument()
  })

  it('omits the icon panel when no icon is provided', () => {
    render(<NavigationCard link={<a href="/library">File library</a>} />)

    expect(screen.queryByTestId('navigation-card-icon')).not.toBeInTheDocument()
  })

  it('renders a chevron affordance', () => {
    render(<NavigationCard link={<a href="/library">File library</a>} />)

    expect(screen.getByTestId('navigation-card-chevron')).toBeInTheDocument()
  })

  it('applies the injected custom class to the wrapper', () => {
    render(
      <NavigationCard
        className="example-class"
        link={<a href="/library">File library</a>}
      />
    )

    expect(screen.getByTestId('navigation-card').classList).toContain(
      'example-class'
    )
  })

  it('spreads arbitrary props onto the wrapper', () => {
    render(
      <NavigationCard
        data-arbitrary="arbitrary"
        link={<a href="/library">File library</a>}
      />
    )

    expect(screen.getByTestId('navigation-card')).toHaveAttribute(
      'data-arbitrary',
      'arbitrary'
    )
  })

  describe('when the link is clicked', () => {
    let onClickSpy: jest.Mock

    beforeEach(async () => {
      onClickSpy = jest.fn((event: React.MouseEvent) => event.preventDefault())

      render(
        <NavigationCard
          link={
            <a href="/library" onClick={onClickSpy}>
              File library
            </a>
          }
        />
      )

      await userEvent.click(screen.getByRole('link', { name: 'File library' }))
    })

    it('invokes the link handler', () => {
      expect(onClickSpy).toHaveBeenCalledTimes(1)
    })
  })

  it.each([
    [NAVIGATION_CARD_COLOR.ACTION],
    [NAVIGATION_CARD_COLOR.SUCCESS],
    [NAVIGATION_CARD_COLOR.WARNING],
    [NAVIGATION_CARD_COLOR.DANGER],
    [NAVIGATION_CARD_COLOR.NEUTRAL],
  ])('tints the icon panel with the %s colour', (cardColor) => {
    render(
      <NavigationCard
        color={cardColor}
        icon={<IconHome />}
        link={<a href="/library">File library</a>}
      />
    )

    expect(screen.getByTestId('navigation-card-icon')).toHaveStyleRule(
      'background-color',
      color(cardColor, '100')
    )
  })
})
