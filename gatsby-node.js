const { resolve: resolvePath } = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage, createLayout } = boundActionCreators

  return new Promise((resolve, reject) => {
    graphql(`
    {
      allMdx {
        edges {
          node {
            relativeDirectory
            absolutePath
            frontmatter {
              title
              date
              description
              canonical
            }
          }
        }
      }
    }
    `).then(result => {
      if (result.errors) {
        return reject(result.errors)
      }

      // Create blog post pages.
      result.data.allMdx.edges.forEach(({ node }) => {
        const { absolutePath, relativeDirectory, frontmatter } = node
        const id = Math.random() + ''

        createLayout({
          component: resolvePath('./src/templates/post.js'),
          id,
          context: { relativeDirectory }
        })
        
        createPage({
          path: `blog/${relativeDirectory}`,
          layout: id,
          component: absolutePath
        })
      })
    })
    .then(resolve)
  })
}
