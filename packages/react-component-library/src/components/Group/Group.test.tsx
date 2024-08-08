import React from 'react'
import { render } from '@testing-library/react'
import { spacing } from '@royalnavy/design-tokens'

import { Group } from './Group'

describe('Group', () => {
  it('render with default styles', () => {
    const { container } = render(<Group>Content</Group>)
    expect(container.firstChild).toHaveStyleRule('display', 'flex')
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'row')
    expect(container.firstChild).toHaveStyleRule('gap', spacing('0'))
    expect(container.firstChild).toHaveStyleRule('align-items', 'stretch')
    expect(container.firstChild).toHaveStyleRule(
      'justify-content',
      'flex-start'
    )
    expect(container.firstChild).toHaveStyleRule('flex-wrap', 'wrap')
  })

  it('apply custom gap', () => {
    const customGap = '2'
    const { container } = render(<Group gap={customGap}>Content</Group>)
    expect(container.firstChild).toHaveStyleRule('gap', spacing(customGap))
  })

  it('apply custom justify-content', () => {
    const { container } = render(<Group justify="center">Content</Group>)
    expect(container.firstChild).toHaveStyleRule('justify-content', 'center')
  })

  it('apply custom align-items', () => {
    const { container } = render(<Group align="flex-end">Content</Group>)
    expect(container.firstChild).toHaveStyleRule('align-items', 'flex-end')
  })

  it('apply custom flex-wrap', () => {
    const { container } = render(<Group wrap="nowrap">Content</Group>)
    expect(container.firstChild).toHaveStyleRule('flex-wrap', 'nowrap')
  })

  it('apply flex-grow to children when grow is true', () => {
    const { container } = render(<Group grow>Content</Group>)
    expect(container.firstChild).toHaveStyleRule('flex-grow', '1', {
      modifier: '> *',
    })
  })

  it('apply max-width to children when preventGrowOverflow is true', () => {
    const customGap = '2'
    const { container } = render(
      <Group grow preventGrowOverflow gap={customGap}>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Group>
    )
    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      `calc(33.333333333333336% - (${spacing(customGap)} / 3))`,
      { modifier: '> *' }
    )
  })

  it('render with the specified HTML element', () => {
    const { container } = render(<Group el="section">Content</Group>)
    expect(container?.firstChild?.nodeName).toBe('SECTION')
  })

  it('apply className prop', () => {
    const className = 'custom-class'
    const { container } = render(<Group className={className}>Content</Group>)
    expect(container.firstChild).toHaveClass(className)
  })

  it('render children correctly', () => {
    const { getByText } = render(
      <Group>
        <div>Child 1</div>
        <div>Child 2</div>
      </Group>
    )
    expect(getByText('Child 1')).toBeInTheDocument()
    expect(getByText('Child 2')).toBeInTheDocument()
  })

  it('not render when there are no children', () => {
    const { container } = render(<Group />)
    expect(container.firstChild).toBeNull()
  })
})
