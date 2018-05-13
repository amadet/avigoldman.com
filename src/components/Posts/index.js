import React from 'react'
import Post from '../Post'

export default ({ allMdx }) => (
  <div>
    {allMdx.edges.map(({ node: { frontmatter, name } }) => (
      <Post key={name} path={`blog/${name}`} {...frontmatter} />
    ))}
  </div>
)

export const fragment = graphql`
  fragment mdx on Mdx {
    name
    frontmatter {
      title
      date(formatString: "MMMM D, YYYY")
      description
      canonical
    }
  }
`