import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import stripHtml from 'string-strip-html'

import Wrapper from '../components/Wrapper'
import Posts from '../components/Posts'
import Button from '../components/Button'

const Subtitle = styled.h3`
  font-weight: 400;
  color: #9698a9;
  text-align: center;
  padding: 0 0 2rem 0;
  margin: auto;

  a {
    text-decoration: none;
    font-weight: 600;
    color: inherit;
  }
`

const SectionTitle = styled.h2`
  font-size: .875rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 4rem 0 1rem 0;
  margin: 0;
  color: #2296f3;
  letter-spacing: .2px;
`

const SeeMoreWrapper = styled.div`
  text-align: center;
  margin-top: 2rem;
`

const IndexPage = ({ data: { site: { siteMetadata }, allMdx } }) => (
  <Wrapper>
    <Helmet meta={[
      { name: 'description', content: stripHtml(siteMetadata.description) }
    ]} />
    <h1>Hey there 👋  I'm Avi. </h1> 
    <Subtitle dangerouslySetInnerHTML={{ __html: siteMetadata.description }} />
    <SectionTitle>About Me</SectionTitle>
    <p><b>Now:</b> I'm working on revamping the <a href="https://github.com/SparkPost/developers.sparkpost.com/tree/next">SparkPost Developer Hub.</a></p>
    <p>A long time ago I hailed from Florida. More recently, I lived in Baltimore and College Park. Now I rent a place in San Francisco.</p>
    <p>I started my career as a freelance WordPress developer. Afterward, I interned for UMBC and UMD. The next summer, during my internship at SparkPost, I fell in love with the messy world of email and I've been there ever since.</p>
    <p>I really like events (although I always need a nap after). I've helped start a <a href="http://jhacksumd.com/">hackathon</a> and a local <a href="https://www.meetup.com/emailgeeksSF/">#emailgeeks meetup</a>.</p>
    <p>Want to talk? Shoot me an <a href="mailto:me@avigoldman.com">email</a>.</p>
    <SectionTitle>Posts</SectionTitle>
    <Posts allMdx={allMdx} />
    <SeeMoreWrapper>
      <Button to="/blog">See more</Button>
    </SeeMoreWrapper>
  </Wrapper>
)

export default IndexPage

export const pageQuery = graphql`
  query HomePage {
    site {
      siteMetadata {
        description
      }
    }
    allMdx(limit:3, sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          ...mdx
        }
      }
    }
  }
`