import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import "../assets/styles/pages/index.scss"

import Loadable from 'react-loadable';

// import image from "../../static/img/products-grid1.jpg"

const Loading = () =>{
  return(
    <img
      href="https://source.unsplash.com/random"
    >
    </img>
  )
}
const LoadableComponent = Loadable({
  loader: () => import("../components/WaterWave"),
  loading: Loading,
});

const TagsPage = () => (
  <Layout>
    <div className="indexPage">
      <LoadableComponent />
    </div>
  </Layout>
)

export default TagsPage
