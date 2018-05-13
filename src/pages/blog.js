import React from 'react'
import Helmet from 'react-helmet'

import Wrapper from '../components/Wrapper'
import Posts from '../components/Posts'

const BlogPage = ({ data: { allMdx } }) => (
  <Wrapper>
    <Helmet title="Blog" />
    <Posts allMdx={allMdx} />
  </Wrapper>
)

export default BlogPage

export const pageQuery = graphql`
  query BlogPage {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          ...mdx
        }
      }
    }
  }
`