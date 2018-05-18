import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.ul`
  list-style: none;
  padding: 0;
  border: 1px solid #efefef;
  border-radius: 5px;
  background: #fdfdfdbf;

  a {
      display: block;
      padding: .5rem;
      border-bottom: 1px solid #efefef;
  }

  li:last-child a {
    border-bottom: 0;
  }
`

export default ({ links }) => (
  <Wrapper>
    {links.map(({ text, link }) => (
      <li><a href={link} target={link.includes('avigoldman.com') ? '' : '_blank'}>{text}</a></li>
    ))}
  </Wrapper>
)