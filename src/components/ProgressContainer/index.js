import React from 'react'
import styled from 'styled-components'
import { StickyContainer, Sticky } from 'react-sticky'
import min from 'lodash.min'

const ProgressBar = styled.div`
  height: 2px;
  background: #2296f3;
  transform: translateZ(0px);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 9;
`

export default ({ children }) => (
  <StickyContainer>
    <Sticky>{(props) => {
      return (<ProgressBar style={{ width: `${calculatePercentageRead(props)}%` }} />)
    }}</Sticky>
    {children}
  </StickyContainer>
)

function calculatePercentageRead ({ isSticky, distanceFromTop, distanceFromBottom }) {
  /* drop out early if we haven't entered the scroll area */
  if (!isSticky) return 0

  /* the scroll area size */
  const scrollAreaHeight = (distanceFromBottom-distanceFromTop)

  /* the percent we have scrolled down */
  const percentScrolled = min([ 1 - (distanceFromBottom/scrollAreaHeight), 1 ])

  /** 
   * as we scroll further down we adjust the percent of the window the reader at
   * so that when the bottom of the scroll area is visible the percent is at 100%
   */
  const percentScrolledOfWindow = (window.innerHeight*percentScrolled)/scrollAreaHeight

  const percent = percentScrolled + percentScrolledOfWindow
  
  return min([ percent*100, 100 ])
}