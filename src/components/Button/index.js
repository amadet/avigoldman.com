import styled from 'styled-components'
import Link from 'gatsby-link'

export default styled(Link)`
font-size: .875rem;
padding: .35rem 1.5rem;
border-radius: 5px;
border: 1px solid #e4e4e4;
text-decoration: none;
margin: auto;
box-shadow: 0 1px 1px rgba(0,0,0,.06);
color: #777;
transition: .2s;

&:hover {
  color: inherit;
  border-color: #bcbcbc;
  text-decoration: none;
}
`
