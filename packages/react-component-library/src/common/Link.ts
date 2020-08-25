import { ComponentWithClass } from './ComponentWithClass'

export interface AnchorType extends ComponentWithClass {
  href: string
}

export interface LinkType extends ComponentWithClass {
  to: string
}

export type LinkTypes = AnchorType | LinkType
