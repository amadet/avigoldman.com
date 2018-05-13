import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'

import './index.css'

const MinHeight = styled.div`
  min-height: 100vh;
  margin-bottom: -55px; // footer height
  padding-bottom: 91px; // 36px padding
`

const Layout = ({ children, location, data }) => (
  <div>
  <Helmet
    defaultTitle={data.site.siteMetadata.author}
    titleTemplate={`%s | ${data.site.siteMetadata.author}`} />
    <MinHeight>
      <Header path={location.pathname} />
      {children()}
    </MinHeight>
    <Footer />
  </div>
)

export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        author
        description
      }
    }
  }
`


export default Layout
