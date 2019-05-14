// Takes a data set and a returns all slugs at the top level. If 'context' is
//  specified that it will behave as though context is the top level.
// Each slug has the page data for that item
export default (data, context) => {
  const slugSet = new Set(
    data.map(({ node }) => {
      const { slug, title, status } = {
        slug: node.fields.slug,
        title: node.frontmatter.title,
        status: node.frontmatter.status || 'published',
      }
      const output = { slug, title, status }
      if (context.length) {
        // Context has been set, filter only items within the context
        if (slug.match(context)) return output
        return undefined
      }
      // no context has been set, use all items from the root
      return output
    })
  )

  const slugs = []
  slugSet.forEach(v => {
    if (typeof v !== 'undefined') {
      return slugs.push({
        slug: v.slug,
        title: v.title,
        status: v.status,
      })
    }
    return null
  })
  return slugs
}
