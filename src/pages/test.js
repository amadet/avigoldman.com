import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import stripHtml from 'string-strip-html'
import { StickyContainer, Sticky } from 'react-sticky' 
import Scrollama from '../components/Scrollama'

import Wrapper from '../components/Wrapper'
import Posts from '../components/Posts'
import Button from '../components/Button'

const Subtitle = styled.h3`
  font-weight: 400;
  color: #9698a9;
  text-align: center;
  padding: 0 0 2rem 0;
  margin: auto;

  a {
    text-decoration: none;
    font-weight: 600;
    color: inherit;
  }
`

const SectionTitle = styled.h2`
  font-size: .875rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 4rem 0 1rem 0;
  margin: 0;
  color: #2296f3;
  letter-spacing: .2px;
`

const SeeMoreWrapper = styled.div`
  text-align: center;
  margin-top: 2rem;
`

const IndexPage = () => (
  <Wrapper>
    <h1>Hey there 👋  I'm Avi. </h1> 
    <StickyContainer>
      <Scrollama settings={{
        offset: 1/3
      }} style={{ display: `flex`, alignItems: `stretch` }}>
        {({ Step, index }) => (
          <React.Fragment>
            <div style={{ width: `80%` }}>
              <Step>
                {(props) => <div>{JSON.stringify(props)}Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus quisquam, deleniti delectus cupiditate suscipit dolorum debitis, et nemo eaque reiciendis illo at cumque possimus quo distinctio tempore officiis, ab reprehenderit ipsam? Odit temporibus dicta non impedit qui recusandae sunt, modi inventore amet voluptate fugiat iusto autem molestiae eos perferendis labore in reiciendis debitis alias incidunt quisquam ipsum! Inventore ipsam, aperiam harum odit aliquid deserunt sapiente reiciendis delectus laborum nam commodi libero. Sed incidunt tenetur magnam architecto eum, error, exercitationem amet dolores et rerum quas laboriosam explicabo? Eveniet quis laborum rerum, accusantium, minus voluptas, provident illo quibusdam error voluptate sint sapiente!</div>}
              </Step>
              <Step>
                {(props) => <div>{JSON.stringify(props)}Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus quisquam, deleniti delectus cupiditate suscipit dolorum debitis, et nemo eaque reiciendis illo at cumque possimus quo distinctio tempore officiis, ab reprehenderit ipsam? Odit temporibus dicta non impedit qui recusandae sunt, modi inventore amet voluptate fugiat iusto autem molestiae eos perferendis labore in reiciendis debitis alias incidunt quisquam ipsum! Inventore ipsam, aperiam harum odit aliquid deserunt sapiente reiciendis delectus laborum nam commodi libero. Sed incidunt tenetur magnam architecto eum, error, exercitationem amet dolores et rerum quas laboriosam explicabo? Eveniet quis laborum rerum, accusantium, minus voluptas, provident illo quibusdam error voluptate sint sapiente!</div>}
              </Step>
              <Step>
                {(props) => <div>{JSON.stringify(props)}Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus quisquam, deleniti delectus cupiditate suscipit dolorum debitis, et nemo eaque reiciendis illo at cumque possimus quo distinctio tempore officiis, ab reprehenderit ipsam? Odit temporibus dicta non impedit qui recusandae sunt, modi inventore amet voluptate fugiat iusto autem molestiae eos perferendis labore in reiciendis debitis alias incidunt quisquam ipsum! Inventore ipsam, aperiam harum odit aliquid deserunt sapiente reiciendis delectus laborum nam commodi libero. Sed incidunt tenetur magnam architecto eum, error, exercitationem amet dolores et rerum quas laboriosam explicabo? Eveniet quis laborum rerum, accusantium, minus voluptas, provident illo quibusdam error voluptate sint sapiente!</div>}
              </Step>
              <Step>
                {(props) => <div>{JSON.stringify(props)}Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus quisquam, deleniti delectus cupiditate suscipit dolorum debitis, et nemo eaque reiciendis illo at cumque possimus quo distinctio tempore officiis, ab reprehenderit ipsam? Odit temporibus dicta non impedit qui recusandae sunt, modi inventore amet voluptate fugiat iusto autem molestiae eos perferendis labore in reiciendis debitis alias incidunt quisquam ipsum! Inventore ipsam, aperiam harum odit aliquid deserunt sapiente reiciendis delectus laborum nam commodi libero. Sed incidunt tenetur magnam architecto eum, error, exercitationem amet dolores et rerum quas laboriosam explicabo? Eveniet quis laborum rerum, accusantium, minus voluptas, provident illo quibusdam error voluptate sint sapiente!</div>}
              </Step>
              <Step>
                {(props) => <div>{JSON.stringify(props)}Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus quisquam, deleniti delectus cupiditate suscipit dolorum debitis, et nemo eaque reiciendis illo at cumque possimus quo distinctio tempore officiis, ab reprehenderit ipsam? Odit temporibus dicta non impedit qui recusandae sunt, modi inventore amet voluptate fugiat iusto autem molestiae eos perferendis labore in reiciendis debitis alias incidunt quisquam ipsum! Inventore ipsam, aperiam harum odit aliquid deserunt sapiente reiciendis delectus laborum nam commodi libero. Sed incidunt tenetur magnam architecto eum, error, exercitationem amet dolores et rerum quas laboriosam explicabo? Eveniet quis laborum rerum, accusantium, minus voluptas, provident illo quibusdam error voluptate sint sapiente!</div>}
              </Step>
              <Step>
                {(props) => <div>{JSON.stringify(props)}Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus quisquam, deleniti delectus cupiditate suscipit dolorum debitis, et nemo eaque reiciendis illo at cumque possimus quo distinctio tempore officiis, ab reprehenderit ipsam? Odit temporibus dicta non impedit qui recusandae sunt, modi inventore amet voluptate fugiat iusto autem molestiae eos perferendis labore in reiciendis debitis alias incidunt quisquam ipsum! Inventore ipsam, aperiam harum odit aliquid deserunt sapiente reiciendis delectus laborum nam commodi libero. Sed incidunt tenetur magnam architecto eum, error, exercitationem amet dolores et rerum quas laboriosam explicabo? Eveniet quis laborum rerum, accusantium, minus voluptas, provident illo quibusdam error voluptate sint sapiente!</div>}
              </Step>
              <Step>
                {(props) => <div>{JSON.stringify(props)}Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus quisquam, deleniti delectus cupiditate suscipit dolorum debitis, et nemo eaque reiciendis illo at cumque possimus quo distinctio tempore officiis, ab reprehenderit ipsam? Odit temporibus dicta non impedit qui recusandae sunt, modi inventore amet voluptate fugiat iusto autem molestiae eos perferendis labore in reiciendis debitis alias incidunt quisquam ipsum! Inventore ipsam, aperiam harum odit aliquid deserunt sapiente reiciendis delectus laborum nam commodi libero. Sed incidunt tenetur magnam architecto eum, error, exercitationem amet dolores et rerum quas laboriosam explicabo? Eveniet quis laborum rerum, accusantium, minus voluptas, provident illo quibusdam error voluptate sint sapiente!</div>}
              </Step>
              <Step>
                {(props) => <div>{JSON.stringify(props)}Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus quisquam, deleniti delectus cupiditate suscipit dolorum debitis, et nemo eaque reiciendis illo at cumque possimus quo distinctio tempore officiis, ab reprehenderit ipsam? Odit temporibus dicta non impedit qui recusandae sunt, modi inventore amet voluptate fugiat iusto autem molestiae eos perferendis labore in reiciendis debitis alias incidunt quisquam ipsum! Inventore ipsam, aperiam harum odit aliquid deserunt sapiente reiciendis delectus laborum nam commodi libero. Sed incidunt tenetur magnam architecto eum, error, exercitationem amet dolores et rerum quas laboriosam explicabo? Eveniet quis laborum rerum, accusantium, minus voluptas, provident illo quibusdam error voluptate sint sapiente!</div>}
              </Step>
            </div>
            <Sticky style={{ width: `20%` }} topOffset={-80}>
              {({ style, isSticky }) => (
                <div style={{ paddingTop: isSticky ? 80 : 0, ...style }}>index {index}</div>
              )}
            </Sticky>

            {/* <div style={{
              position: `sticky`,
            }}>
              index {index}
            </div> */}
          </React.Fragment>
        )}
      </Scrollama>
    </StickyContainer>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quia autem aspernatur ducimus quaerat! Laudantium autem sed at soluta impedit ipsam ullam natus, delectus incidunt eveniet quisquam excepturi aliquam iste unde facilis placeat est error pariatur, quia aliquid accusantium quasi vel? Blanditiis nobis dolorum repudiandae mollitia cupiditate, laboriosam voluptas. Dolorum molestiae reprehenderit maxime illum, repellat doloribus odio possimus? Ullam, sed. Commodi, nulla? Tempore ad laborum similique minus sit quos veritatis dicta consequuntur. Quod, ipsam saepe ad a unde dolorum commodi possimus ullam atque, voluptatibus, earum quos sit. Quibusdam perferendis maxime impedit facere quia obcaecati eligendi? Tempore, officia? Vitae delectus nulla adipisci atque maxime ducimus, impedit, animi magnam rerum facere quas itaque culpa. Ipsam iste atque eveniet obcaecati minus, ut recusandae quos maxime corporis quisquam, autem cum. Ullam nam vel nisi deleniti consectetur quidem facere culpa mollitia magni quaerat. Fugit vel sunt quae quos perspiciatis voluptatibus doloremque sit asperiores itaque! Ratione ipsum dolore ex iusto quis, nulla, sequi sapiente amet eveniet animi praesentium quaerat earum omnis! Provident consequuntur incidunt totam eveniet impedit quaerat odit, aspernatur libero exercitationem. Enim optio accusantium tempora id autem sit cumque expedita sed explicabo non labore consequatur ullam provident repellendus quaerat facere corrupti eius cupiditate recusandae, saepe vero quidem. Error impedit quia pariatur asperiores reprehenderit consequuntur voluptatum deserunt ea quasi in atque quis quo, dignissimos laboriosam laborum dolores dolorem distinctio dicta esse aliquam voluptates praesentium quaerat. Adipisci in dicta saepe, deleniti quasi distinctio totam, id ullam doloremque rerum natus placeat, impedit quis porro eos architecto earum tempora laborum magni reiciendis itaque molestiae repellendus libero? Quasi quae aliquid animi quas praesentium voluptatum suscipit tempore deserunt beatae accusantium ipsa illo quidem nesciunt rem veritatis recusandae modi atque amet repudiandae illum at corrupti, officia repellendus? Quibusdam debitis at numquam ipsa, quidem, magni eos, nam nulla cum perspiciatis pariatur possimus accusamus?
  </Wrapper>
)

export default IndexPage