/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const templateRegister = {
    default: path.resolve('src/templates/default.js'),
    home: path.resolve('src/templates/home.js'),
  }

  return graphql(`
    {
      allMdx(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              template
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMdx.edges.forEach(({ node }) => {
      const component = node.frontmatter.template
        ? templateRegister[node.frontmatter.template]
        : templateRegister.default

      createPage({
        path: node.fields.slug,
        component,
        context: {
          id: node.id,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode, basePath: 'library' })

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}
