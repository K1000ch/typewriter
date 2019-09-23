import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import "../assets/styles/pages/index.scss"

import WaterWave from 'react-water-wave';

import image from "../../static/img/products-grid1.jpg"


const TagsPage = () => (
  <Layout>
    <div className="indexPage">
      <WaterWave
        imageUrl={"https://source.unsplash.com/random"}
        className="ripple"
      >
      </WaterWave>
      <h1>
        こんにちは
      </h1>
    </div>
  </Layout>
)

export default TagsPage
