import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

import AniLink from "gatsby-plugin-transition-link/AniLink"
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import "../assets/styles/pages/blogPage.scss"
import "../assets/styles/pages/tags.scss"

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
              <article
                key={post.node.fields.slug}
                className={`blog-list-item tile is-child box notification ${
                  post.node.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header>
                  {post.node.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.node.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${
                            post.node.title
                          }`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="post-meta">
                    <span className="posted-date">{post.node.frontmatter.date}</span>
                    <AniLink
                      fade
                      duration={0.6}
                      to={post.node.fields.slug}
                      className="title has-text-primary"
                    >
                      <h2 className="post-title">
                        {post.node.frontmatter.title_jp}
                      </h2>
                    </AniLink>
                  </p>
                </header>
                <p>
                  {post.node.excerpt}
                  <br />
                  <AniLink
                      fade
                      duration={0.6}
                      className="button"
                      to={post.node.fields.slug}
                  >
                    Keep Reading →
                  </AniLink>
                </p>
              </article>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `
        ${totalCount} post${
        totalCount === 1 ? '' : 's'
      } tagged with “${tag}”
    `

    return (
      <Layout>
        <section className="section blogPage tagsPage">
          <Helmet title={`${tag} | ${title}`} />
          <div className="container content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: '6rem' }}
              >
                <h2 className="pageTitle">{tag}</h2>
                <p className="pageDescription">{tagHeader}</p>
                <ul className="taglist">
                  {postLinks}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 300)
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "YYYY/MM/DD")
            featuredpost
            title_jp
            tags
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`