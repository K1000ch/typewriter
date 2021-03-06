import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import "../assets/styles/pages/blogPost.scss"
import twitter from '../img/social/twitter.svg'


export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  title_jp,
  date,
  slug,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section blogPost">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="blogPostHeader">
              <span>
                {date}
              </span>
              <h1 className="blogPostTitle">
                {title_jp}
              </h1>
              {tags && tags.length ? (
              <ul className="taglist">
                {tags.map(tag => (
                  <li key={tag + `tag`}>
                    <Link to={`/tags/${kebabCase(tag)}/`}>#{tag}</Link>
                  </li>
                ))}
              </ul>
              ) : null}
            </div>
            {/*
            <p>{description}</p>
            */}
            <PostContent className="postBody" content={content} />

            <h2 className="menuHeader">
              Share This Post
            </h2>
            <a 
              href={
                "https://twitter.com/share?url=https://pensive-swirles-038d0a.netlify.com"
                 + slug + "&text=" + title_jp
              }
              rel="noopener" 
              target="_blank"
            >
              <img
                className="fas fa-lg"
                src={twitter}
                alt="Twitter"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  title_jp: PropTypes.string,
  date: PropTypes.string,
  slug: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | 知らない国の知らない言葉">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        title_jp={post.frontmatter.title_jp}
        date={post.frontmatter.date}
        slug={post.fields.slug}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "YYYY/MM/DD")
        title
        description
        tags
        title_jp
      }
      fields {
        slug
      }
    }
  }
`