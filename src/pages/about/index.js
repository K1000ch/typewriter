import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'



const TagsPage = () => (
  <Layout>
    <div className="aboutPage">
      <h1 className="pageTitle">
        About
      </h1>
      <h2>
        Author
      </h2>
      <p>
        chihiro
      </p>
    </div>
  </Layout>
)

export default TagsPage
