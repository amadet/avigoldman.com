import React from 'react'
import styled from 'styled-components'


export default styled.div`${props => {
  const { children, ...css } = props

  return css
}}`