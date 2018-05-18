import React from 'react'
import styled from 'styled-components'
import { StickyContainer, Sticky } from 'react-sticky' 
import Scrollama from '../../components/Scrollama'
import Graphic from './Graphic'
import EmailClient from './EmailClient'
import Block from './Block'
import StyledStep from './StyledStep'
import Note from './Note'

const StepsWrapper = styled.div`
  width: 35%;
  margin-right: 2.5%;

  @media (max-width: 600px) {
    width: 100%;
    margin: 0;
    padding: 450px 0 400px;
  }
`

const StickyWrapper = styled.div`
  flex: 1;
  @media (max-width: 600px) {
    position: absolute;
    width: 100%;
  }
`


export default () => (<Graphic>
  <h3>Building an interactive email</h3>
  <StickyContainer>
    <Scrollama settings={{ offset: 1/3 }}>
    {({ Step, index, lastActiveIndex, active }) => (
      <Block display="flex">
        <StepsWrapper>
          <Step>{({ active }) => (
            <StyledStep index="1" active={active}>
              We'll start by adding a label which will act as our button.
              
              <pre><code>{`<label for="button-hook" id="button">Click me!</label>`}</code></pre>
            </StyledStep>
          )}</Step>
          <Step>{({ active }) => (
            <StyledStep index="2" active={active}>
              Next we'll add a checkbox. This will hold the email's state. If it's checked we will show the content. If it's unchecked, we won't.
              
              <pre><code>{`<input type="checkbox" id="button-hook" />`}</code></pre>
            </StyledStep>
          )}</Step>
          <Step>{({ active }) => (
            <StyledStep index="3" active={active}>
              Last, let's add the content we want to show when we click the button.
              
              <pre><code>{`<div id="magic-content">You clicked the button!</div>`}</code></pre>
            </StyledStep>
          )}</Step>
          <Step>{({ active }) => (
            <StyledStep index="4" active={active}>
              Let's make our label look like a button.
              
              <pre><code>{`#button {
  background: coral;
  color: white;
  padding: 0.67em 1em;
  display: inline-block;
  cursor: pointer;
}`}</code></pre>
            </StyledStep>
          )}</Step>
          <Step>{({ active }) => (
            <StyledStep index="5" active={active}>
              Now we can add the functionality. We'll hide the <code>#magic-content</code> by default.
              <pre><code>{`#magic-content {
  display: none;
}`}</code></pre>
And show it when the checkbox is checked.
                <pre><code>{`#button-hook:checked ~ #magic-content {
  display: block;
}`}</code></pre>
            <Note>Give it a try! </Note>
            </StyledStep>
          )}</Step>
          <h3>Adding a fallback</h3>
          <Step>{({ active }) => (
            <StyledStep index="6" active={active}>
            This doesn't <a href="http://blog.gorebel.com/email-client-support">work everywhere</a>. We need to create a fallback for those poor souls that won't get our awesome email. 
            
            Let's wrap our interactive content in a <code>div</code> with the id of <code>#interactive</code>.
            <pre><code>{`<div id="interactive"> ... </div>`}</code></pre>
            And now add a checked checkbox right before <code>#interactive</code>.
            <pre><code>{`<input type="checkbox" id="interactive-hook" checked />`}</code></pre>
            </StyledStep>
          )}</Step>
          <Step>{({ active }) => (
            <StyledStep index="7" active={active}>
            We'll hide the interactive content by default.
            <pre><code>{`#interactive {
  display: none;
}`}</code></pre>
            </StyledStep>
          )}</Step>
          <Step>{({ active }) => (
            <StyledStep index="8" active={active}>
            Next, we'll force set the interactive content to be visible when it is next to a checked checkbox.
            <pre><code>{`#interactive-hook:checked ~ #interactive {
    display: block;
}`}</code></pre>
            Now if the email client supports the CSS we need, the interactive content will be shown and if it doesn't, our interactive content won't show.
            </StyledStep>
          )}</Step>
          <Step>{({ active }) => (
            <StyledStep index="9" active={active}>
            Lastly, we need some fallback content.
            <pre><code>{`<div id="fallback">Dude, get a better email client.</div>`}</code></pre>
            </StyledStep>
          )}</Step>
          <Step>{({ active }) => (
            <StyledStep index="10" active={active}>
            To make this work, let's apply the same idea as before but flip the styles. We'll show <code>#fallback</code> by default and hide it if its next to a checked checkbox.
            <pre><code>{`#interactive-hook:checked ~ #fallback {
  display: none;
}`}</code></pre>
            <Note>Try toggling the interactivity.</Note>
            </StyledStep>
          )}</Step>
          <h3>Clean up</h3>
          <Step>{({ active }) => (
            <StyledStep index="11" active={active}>
            Last step is to hide the checkboxes.
            <pre><code>{`#button-hook, #interactive-hook {
  display: none !important;
}`}</code></pre>
            </StyledStep>
          )}</Step>
          
        </StepsWrapper>
        <StickyWrapper>
        <Sticky topOffset={-80}>
          {({ style, isSticky, wasSticky }) => {
            const newStyle = Object.assign({ paddingTop: isSticky && 80 }, style)
            
            return (
              <div style={newStyle}>
                <EmailClient topBar={() => <label htmlFor="interactive-hook" style={{ fontSize: '.875rem',
padding: '.35rem 1.5rem',
borderRadius: '5px',
border: '1px solid #e4e4e4',
margin: 'auto',
boxShadow: '0 1px 1px rgba(0,0,0,.06)',
color: '#777',
transition: '.2s',
}}>Toggle Interactivity</label>}>
                  {lastActiveIndex >= 5 && <input type="checkbox" id="interactive-hook" defaultChecked={true} />}
                  <div id={lastActiveIndex >= 5 ? 'interactive' : ''}>
                    {lastActiveIndex >= 0 && (
                      <label htmlFor="button-hook" id="button">Click me!</label>
                    )}
                    {lastActiveIndex >= 1 && (
                      <input type="checkbox" id="button-hook" />
                    )}
                    {lastActiveIndex >= 2 && (
                      <div id="magic-content">You clicked the button!</div>
                    )}
                  </div>
                  {lastActiveIndex >= 8 && (
                    <div id="fallback">Dude, get a better email client.</div>
                  )}
                  <style>{`
                    ${lastActiveIndex >= 3 ? `
                      #button {
                        background: coral;
                        color: white;
                        padding: 0.67em 1em;
                        display: inline-block;
                        cursor: pointer;
                      }` : ''
                    }
                    ${lastActiveIndex >= 4 ? `
                      #magic-content {
                        display: none;
                      }
                      #button-hook:checked ~ #magic-content {
                        display: inline-block;
                      }` : '' 
                    }
                    ${lastActiveIndex >= 6 ? `
                      #interactive {
                        display: none;
                      }` : '' 
                    }
                    ${lastActiveIndex >= 7 ? `
                      #interactive-hook:checked ~ #interactive {
                        display: inline-block;
                      }` : '' 
                    }
                    ${lastActiveIndex >= 9 ? `
                      #interactive-hook:checked ~ #fallback {
                        display: none;
                      }` : ''
                    }
                    ${lastActiveIndex >= 10 ? `
                      #button-hook, #interactive-hook {
                        visibility: hidden;
                        height: 0;
                      }` : ''
                    }
                  `}</style>
                </EmailClient>
              </div>
            )
          }}
        </Sticky>
        </StickyWrapper>
      </Block>
    )}
    </Scrollama>
  </StickyContainer>
</Graphic>)