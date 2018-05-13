import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Post = styled(Link)`
  padding: 1.75rem 0 1.75rem 0;  
  text-decoration: none;
  display: block;
  color: inherit;
  border-bottom: 1px solid #ebebeb;

  &:hover {
    text-decoration: none;
  }

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border: 0;
  }

  h3 {
    margin: 0;
    transition: .2s;
  }

  p {
    margin: 0;
  }

  &:hover h3 {
    color: #2296f3;
  }
`

const Date = styled.div`
  display: inline-block;
  font-size: .875rem;
  color: #9697a3;
`


export default ({ path = '/', title, date = '', description = '' }) => (
  <Post to={path}>
    <Date>{date}</Date>
    <h3>{title}</h3>
  </Post>
)