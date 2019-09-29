import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import AniLink from "gatsby-plugin-transition-link/AniLink"



const TagsPage = () => (
  <Layout>
    <div className="aboutPage">
      <h1 className="pageTitle">
        About
      </h1>
      <p className="pageDescription">このサイトについて</p>
      <p>
        review,blog,and some
        <br/>
        モバイル対応準備中です
        <br/><br/>
        Author : Chihiro
        <br/>
        <a href="https://twitter.com/Airport1000">> Twitter</a>
        <br/>
      </p>

    </div>
  </Layout>
)

export default TagsPage
