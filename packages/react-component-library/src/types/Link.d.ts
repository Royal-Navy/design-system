interface AnchorType extends ComponentWithClass {
  href: string
}

interface LinkType extends ComponentWithClass {
  to: string
}

type LinkTypes = AnchorType | LinkType
