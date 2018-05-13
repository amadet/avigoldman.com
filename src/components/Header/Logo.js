import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Logo = styled(Link)`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
  }

  &:before {
    content: "";
    height: 2px;
    width: 50px;
    background: #2196f3;
    position: absolute;
    bottom: 0px;
    left: 13px;
    left: 0;
    z-index: -1;
  }
`

export default () => (
    <Logo to="/">Avi Goldman</Logo>
)