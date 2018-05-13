import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const ItemLi = styled.li`
  display: inline-block;
  margin: 0 0 0 1rem;
  font-size: .875rem;
  font-weight: 600;
  letter-spacing: .2px;

  a {
    color: #777;

    &:hover {
      text-decoration: none;
    }
  }

  ${props => props.active && `
    a {
      color: inherit;
    }
  `}
`

export default ({ active, ...props }) => (<ItemLi active={active}><Link {...props} /></ItemLi>)