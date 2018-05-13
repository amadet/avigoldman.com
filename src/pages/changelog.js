import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Wrapper from '../components/Wrapper'

const data = [
  {
    category: 'work',
    date: 'January 2017',
    title: `Received the <span>President's Club</span> award`,
    description: ''
  },
  {
    category: 'other',
    date: 'December 2017',
    title: `Co-founded <a href="https://www.meetup.com/emailgeeksSF/">#emailgeeksSF</a>`,
    description: ''
  },
  {
    category: 'work',
    date: 'November 2017',
    title: `Promoted to <span>Lead Developer Advocate</span>`,
    description: ''
  },
  {
    category: 'other',
    date: 'October 2017',
    title: `Launched <a href="https://www.sparkpost.com/blog/heml-open-source/">HEML</a>`,
    description: ''
  },
  {
    category: 'personal',
    date: 'September 2017',
    title: `Moved to <a href="https://twitter.com/theavigoldman/status/895313651669712900">San Francisco</a>`,
    description: ''
  },
  {
    category: 'work',
    date: 'August 2017',
    title: `Joined the <a href="https://www.sparkpost.com/blog/west-coast-developer-advocate/">Developer Relations</a> team`,
    description: ''
  },
  {
    category: 'work',
    date: 'September 2016',
    title: `Joined <span>full-time</span> at SparkPost`,
    description: ''
  },
  {
    category: 'work',
    date: 'Summer 2016',
    title: `<a href="https://www.sparkpost.com/blog/engineering-interns-intro-2016/">Interned</a> at SparkPost`,
    description: ''
  },
  {
    category: 'personal',
    date: 'Spring 2016',
    title: `<span>Withdrew</span> from school`,
    description: ''
  },
  {
    category: 'other',
    date: 'Fall 2015',
    title: `Studied at <a href="https://umd.edu">University of Maryland</a>`,
    description: ''
  },
  {
    category: 'other',
    date: 'June 2015',
    title: `Graduated from <a href="https://www.bethtfiloh.com">Beth Tfiloh</a>`,
    description: ''
  },
  {
    category: 'work',
    date: 'Summer 2014',
    title: `Interned at <span href="https://my.umbc.edu/about/team">UMUC</span>`,
    description: ''
  },
]

const colorMap = {
  personal: '#f3c122',
  work: '#2296f3',
  other: '#42b57a'
}

const Table = styled.div`

`

const Row = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 1rem;
`

const Category = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 2rem;

  background: ${props => colorMap[props.category]};
`

const Date = styled.div`
  width: 200px;
  color: #9697a3;
  font-size: .9375rem;
`

const Description = styled.div`
  span, a {
    color: ${props => colorMap[props.category]};
  }

  a {
    text-decoration: underline;
  }
`

const Changelog = () => (
  <Wrapper>
    <Helmet title="Changelog" />
    <Table>
      {data.map((change) => (
        <Row>
          <Category category={change.category}/>
          <Date dangerouslySetInnerHTML={{__html: change.date}}/>
          <Description category={change.category} dangerouslySetInnerHTML={{__html: change.title}}/>
        </Row>
      ))}
    </Table>
  </Wrapper>
)

export default Changelog
