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
      <h2>このサイトについて</h2>
      <p>
        review,blog,and some
        <br/>
        Author : Chihiro
        <br/>
        現在モバイル対応準備中
      </p>

    </div>
  </Layout>
)

export default TagsPage
