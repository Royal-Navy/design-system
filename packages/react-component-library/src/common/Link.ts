import { AnchorHTMLAttributes } from 'react'
import { ComponentWithClass } from './ComponentWithClass'

export interface NextLinkProps extends ComponentWithClass {
  href: string
  as?: string
}

export interface RouterLinkProps extends ComponentWithClass {
  to: string
}

export interface AnchorLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export type LinkProps = NextLinkProps | RouterLinkProps | AnchorLinkProps

export type LinkType = React.ReactElement<LinkProps>

/**
 * @deprecated Use LinkProps instead
 */
export type LinkTypes = LinkProps
