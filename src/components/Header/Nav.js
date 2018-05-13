import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const NavUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export default (props) => (<nav><NavUl {...props} /></nav>)