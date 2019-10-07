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
        当サイトは個人的なブログ、文章置き場です。
        <br />
        本、音楽のレビューなど載せて行く予定。
        <br/><br/>
        <h4>
          Author : Chihiro
        </h4>
        <br/>
        <a href="https://twitter.com/Airport1000">著者のTwitterアカウントはこちら</a>
        <br/>
      </p>

    </div>
  </Layout>
)

export default TagsPage
