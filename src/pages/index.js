import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Hi. I'm Robert. Hoping to learn a lot and meet cool peeps. </p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
