interface NavItemAbstractType {
  active?: boolean
  Image?: React.ComponentType
  label: string
}

interface NavItemAnchorType extends NavItemAbstractType {
  href: string
}

interface NavItemLinkType extends NavItemAbstractType {
  to: string
}

type NavItemTypes = NavItemAnchorType | NavItemLinkType
