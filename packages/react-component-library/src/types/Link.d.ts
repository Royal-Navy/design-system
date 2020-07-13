// LinkTypes is currently not exported, but to start exporting it would
// introduce a breaking change.
// PropsWithClassName is defined here to avoid needing to export LinkTypes.
interface PropsWithClassName {
  className?: string
}

interface AnchorType extends PropsWithClassName {
  href: string
}

interface LinkType extends PropsWithClassName {
  to: string
}

type LinkTypes = AnchorType | LinkType
