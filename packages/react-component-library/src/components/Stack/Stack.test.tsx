import React from 'react'
import { render } from '@testing-library/react'
import { spacing } from '@royalnavy/design-tokens'

import { Stack } from './Stack'

describe('Stack', () => {
  it('render with default styles', () => {
    const { container } = render(<Stack>Content</Stack>)
    expect(container.firstChild).toHaveStyleRule('display', 'flex')
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'column')
    expect(container.firstChild).toHaveStyleRule('gap', spacing('0'))
    expect(container.firstChild).toHaveStyleRule('align-items', 'stretch')
    expect(container.firstChild).toHaveStyleRule(
      'justify-content',
      'flex-start'
    )
  })

  it('apply custom gap', () => {
    const customGap = '2'
    const { container } = render(<Stack gap={customGap}>Content</Stack>)
    expect(container.firstChild).toHaveStyleRule('gap', spacing(customGap))
  })

  it('apply custom align-items', () => {
    const { container } = render(<Stack align="center">Content</Stack>)
    expect(container.firstChild).toHaveStyleRule('align-items', 'center')
  })

  it('apply custom justify-content', () => {
    const { container } = render(<Stack justify="space-between">Content</Stack>)
    expect(container.firstChild).toHaveStyleRule(
      'justify-content',
      'space-between'
    )
  })

  it('render with the specified HTML element', () => {
    const { container } = render(<Stack el="section">Content</Stack>)
    expect(container?.firstChild?.nodeName).toBe('SECTION')
  })

  it('apply className prop', () => {
    const className = 'custom-class'
    const { container } = render(<Stack className={className}>Content</Stack>)
    expect(container.firstChild).toHaveClass(className)
  })

  it('render children correctly', () => {
    const { getByText } = render(
      <Stack>
        <div>Child 1</div>
        <div>Child 2</div>
      </Stack>
    )
    expect(getByText('Child 1')).toBeInTheDocument()
    expect(getByText('Child 2')).toBeInTheDocument()
  })

  it('not render when there are no children', () => {
    const { container } = render(<Stack />)
    expect(container.firstChild).toBeNull()
  })
})
