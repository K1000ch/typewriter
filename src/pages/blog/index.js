import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

import "../../assets/styles/pages/blogPage.scss"

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="blogPage">
          <h1 className="pageTitle">Posts</h1>
          <section className="section">
            <div className="container">
              <div className="content">
                <BlogRoll />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}
