import React from 'react'
import styled from 'styled-components'
import Wrapper from '../Wrapper'
import Logo from './Logo'
import Nav from './Nav'
import NavItem from './NavItem'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6rem 0 5.5rem 0;
`

export default ({ path }) => (
    <Wrapper>
      <Header>
          <Logo />
          <Nav>
            <NavItem active={path.startsWith('/blog')} to="/blog">Blog</NavItem>
            <NavItem active={path.startsWith('/changelog')} to="/changelog">Changelog</NavItem>
          </Nav>
        </Header>
    </Wrapper>
)