import React from 'react'
import styled from 'styled-components'

import Wrapper from '../Wrapper'

const Footer = styled.footer`
  border-top: 1px solid #efefef;
  background: #fdfdfd;
  padding: 1rem;
  text-align: center;
  font-size: .8125rem;
  color: #9697A3;
`

const Container = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
`

const Nav = styled.nav`
  a {
    margin: 0 0 0 1rem;
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }
`

export default () => (
  <Footer>
    <Container>
      <div>© {new Date().getFullYear()} Avi Goldman</div>
      <Nav>
        <a target="_blank" href="https://twitter.com/theavigoldman">Twitter</a>
        <a target="_blank" href="https://github.com/avigoldman">GitHub</a>
        <a target="_blank" href="https://www.linkedin.com/in/avigoldman/">Linkedin</a>
      </Nav>
    </Container>
  </Footer>
)