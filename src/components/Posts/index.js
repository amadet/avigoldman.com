import React from 'react'
import Post from '../Post'

export default ({ allMdx }) => (
  <div>
    {allMdx.edges
      .map(({ node: { frontmatter, relativeDirectory } }) => (
      <Post key={relativeDirectory} path={`blog/${relativeDirectory}`} {...frontmatter} />
    ))}
  </div>
)

export const fragment = graphql`
  fragment mdx on Mdx {
    relativeDirectory
    frontmatter {
      title
      date(formatString: "MMMM D, YYYY")
      description
      canonical
    }
  }
`