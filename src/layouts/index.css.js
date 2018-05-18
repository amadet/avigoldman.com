import { injectGlobal } from 'styled-components'
import 'typeface-open-sans'

/**
 * base: #333;
 * medium: #777;
 * light: #9697a3;
 * blue: #2196f3;
 */

injectGlobal`
  * {
    position: relative;
    box-sizing: border-box;
  }

  html {
    font-family: 'Open Sans', sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-size: 16px;
  }

  body {
    margin: 0;
    line-height: 1.75;
    color: #333;
  }

  // Typography

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    margin: 2rem 0 1rem 0;
  }

  h1 {
    font-size: 1.5rem;
    text-align: center;
    margin: .5rem 0;
  }

  h2 {
    font-size: 1.25rem;
  }

  h3 {
    font-size: 1.15rem;
  }

  h4 {
    font-size: 1rem;
  }

  p {
    margin: 0 0 1rem 0;
  }

  a {
    color: #2296f3;
    transition: .2s;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .textLeft {
    text-align: left;
  }

  .textCenter {
    text-align: center;
  }

  .textRight {
    text-align: right;
  }

  
`