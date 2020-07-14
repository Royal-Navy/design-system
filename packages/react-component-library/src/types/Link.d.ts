// LinkTypes is currently not exported, but to start exporting it would
// introduce a breaking change.
// AnchorType and LinkType should be using PropsWithClassName, but importing it
// means LinkTypes needs to be exported.

interface AnchorType {
  className?: string
  href: string
}

interface LinkType {
  className?: string
  to: string
}

type LinkTypes = AnchorType | LinkType
