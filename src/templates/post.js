import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Layout from '../layouts'
import Wrapper from '../components/Wrapper'
import ProgressContainer from '../components/ProgressContainer'


const Content = styled.main`
  padding: 3rem 0 0 0;

  > div > *:first-child {
    margin-top: 0;
  }

  > div > * {
    max-width: 44rem;
    margin-left: auto;
    margin-right: auto;
  }

  & > *:first-child {
    margin-top: 0;
  }

  p {
    line-height: 1.75em;
  }

  blockquote {
    font-size: 1.15rem;
    margin: 3rem auto;
    max-width: 36rem;
    padding: 1rem;

    &:before {
      content: "“";
      font-size: 4rem;
      font-family: serif;
      position: absolute;
      top: -20px;
      left: -1rem;
      display: block;
    }

    p { margin: 0; }
  }

  strong {
    font-weight: 600;

    &:before, &:after {
      content: "*";
      margin: 0 .1rem;
    }
  }

  em {
    &:before, &:after {
      content: "_";
      font-size: .9em;
      margin: 0 .1rem;
    }
  }

  img {
    margin: 3rem auto;
    display: block;
    max-width: 100%;
    border: 1px solid #d9d9de;
  }

  pre {
    margin: 3rem auto;
    padding: 1.5rem;
    border: 1px solid #d9d9de;
    font-size: 13px;
    line-height: 1.75em;
    font-family: Menlo, monospace;
    border-radius: 3px;
    overflow: auto;

    code {
      font: inherit;

      &:before, &:after { display: none; }
    }
  }

  code {
    font-family: Menlo, monospace;
    font-size: .86em;
    color: #42b57a;

    &:before, &:after {
      content: "\`";
      margin: 0 .1rem;
    }
  }

  hr {
    margin: 3rem auto;
    width: 4rem;
    border: 0;
    border-bottom: .65rem solid #41b579;
    transform: skewY(30deg) rotateZ(-25deg);
  }
`

const Subtitle = styled.div`
  font-size: .9375rem;
  font-weight: 400;
  color: #9698a9;
  text-align: center;
  padding: 0 0 2rem 0;
  margin: auto;
`

const AuthorWrapper = styled(Wrapper)`
  display: flex;
  margin-top: 4rem;
  border-top: 1px solid #efefef;
  padding: 2rem 0 1rem;
  align-items: center;

  img {
    height: 3rem;
    border-radius: 50%;
    margin-right: 16px;
  }

  h4, p {
    margin: 0;
  }

  p {
    color: #777;
    /* line-height: 1.1rem; */
    font-size: .9375rem;
  }
`

const Author = ({ author, description }) => (
  <AuthorWrapper>
    <img src="https://pbs.twimg.com/profile_images/745735455161778177/c8dMkyEh_400x400.jpg" alt=""/>
    <div>
      <h4>{author}</h4>
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  </AuthorWrapper>
)


const Post = ({ children, ...props }) => (
  <Layout {...props}>{() => (
    <div>
      <Helmet>
        <title>{props.data.mdx.frontmatter.title}</title>
        <meta name="description" content={props.data.mdx.frontmatter.description} />
        <meta name="og:type" content="article" />
        <meta name="og:title" content={props.data.mdx.frontmatter.title} />
        <meta name="og:image" content={props.data.mdx.frontmatter.image || `${props.data.mdx.frontmatter.title}.png`} />
        <meta name="og:description" content={props.data.mdx.frontmatter.description} />
        <meta name="article:author" content="Avi Goldman" />
        <meta name="article:published_time" content={new Date(props.data.mdx.frontmatter.date).toISOString()} />
        {props.data.mdx.frontmatter.canonical && <link rel="canonical" href={props.data.mdx.frontmatter.canonical} />}
      </Helmet>
      <Wrapper>
      <h1>{props.data.mdx.frontmatter.title}</h1>
      </Wrapper>
      <Subtitle className="textCenter">
        {props.data.mdx.frontmatter.date} • {props.data.mdx.readTime.text}
      </Subtitle>
      <ProgressContainer>
        <Content>
        {children()}
        {props.data.mdx.frontmatter.canonical && (
          <Wrapper>
            <br />
            _<i>The post <a href={props.data.mdx.frontmatter.canonical}>{props.data.mdx.frontmatter.title}</a> appeared first on <a href="https://www.sparkpost.com">SparkPost</a>.</i>_
          </Wrapper>)}
        </Content>
      </ProgressContainer>
      <Author {...props.data.site.siteMetadata} />
    </div>
  )}</Layout>
)

export const pageQuery = graphql`
  query Post($name: String!) {
    site {
      siteMetadata {
        author
        description
      }
    }
    mdx(name:{eq:$name}) {
      readTime {
        text
      }
      ...mdx
    }
  }
`


export default Post
