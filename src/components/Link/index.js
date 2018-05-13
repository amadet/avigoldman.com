import React from 'react'
import Link from 'gatsby-link'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import isAbsoluteUrl from 'is-absolute-url'

export default ({ to, ...props }) => (
  isAbsoluteUrl(to) ? <OutboundLink href={to} {...props} /> : <Link to={to} {...props} />
)