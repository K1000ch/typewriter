import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { kebabCase } from 'lodash'


class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-6" key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header>
                  <p className="post-meta">
                    <span className="posted-date">{post.frontmatter.date}</span>
                    <AniLink
                      fade
                      duration={0.6}
                      to={post.fields.slug}
                      className="title has-text-primary"
                    >
                      <h2 className="post-title">
                        {post.frontmatter.title_jp}
                      </h2>
                    </AniLink>
                    {/*
                    {post.frontmatter.tags ? (
                    <ul className="taglist">
                      {post.frontmatter.tags.map(tag => (
                        <li key={tag + `tag`}>
                          <Link to={`/tags/${kebabCase(tag)}/`}>#{tag}</Link>
                        </li>
                      ))}
                    </ul>
                    ) : null}
                    */}
                  </p>
                  
                </header>
                <p>
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${
                            post.title
                          }`,
                        }}
                      />
                    </div>
                  ) : null}
                  {post.excerpt}
                  <br />
                  <AniLink
                      fade
                      duration={0.6}
                      className="button"
                      to={post.fields.slug}
                  >
                    Keep Reading →
                  </AniLink>
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 300)
              id
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
                    fluid(maxWidth: 500, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
