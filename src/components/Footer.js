import React from 'react'
import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { graphql, StaticQuery } from 'gatsby'
import { kebabCase } from 'lodash'


import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

import "../assets/styles/components/footer.scss"

/*
const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <section className="menu">
            <h2>
              Menu
            </h2>
            <ul className="menu-list">
              <li>
                <AniLink fade duration={0.6} className="navbar-item" to="/">
                  Home
                </AniLink>
              </li>
              <li>
                <AniLink fade duration={0.6} className="navbar-item" to="/about">
                  About
                </AniLink>
              </li>
              <li>
                <AniLink fade duration={0.6} className="navbar-item" to="/blog">
                  Blog
                </AniLink>
              </li>
              <li>
                <AniLink fade duration={0.6} className="navbar-item" to="/contact">
                  Contact
                </AniLink>
              </li>
            </ul>
          </section>
          <section>
            <h2>Tags</h2>
            <ul className="menu-list">
              <li>
                <AniLink fade duration={0.6} className="navbar-item" to="/contact">
                  Contact
                </AniLink>
              </li>
            </ul>
          </section>
          <section className="social">
            <h2>Share</h2>
            <a title="facebook" href="https://facebook.com">
              <img
                src={facebook}
                alt="Facebook"
                style={{ width: '1em', height: '1em' }}
              />
            </a>
            <a title="twitter" href="https://twitter.com">
              <img
                className="fas fa-lg"
                src={twitter}
                alt="Twitter"
                style={{ width: '1em', height: '1em' }}
              />
            </a>
            <a title="instagram" href="https://instagram.com">
              <img
                src={instagram}
                alt="Instagram"
                style={{ width: '1em', height: '1em' }}
              />
            </a>
          </section>
        </div>
      </footer>
    )
  }
}

export default Footer

export const tagPageQuery = graphql`
query footerTagsQuery {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(limit: 1000) {
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
  }
}
`

*/


export default () => (
  <StaticQuery
    query={graphql`
      query footerTagsQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(limit: 1000) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={data => (
      <footer className="footer">
        <div className="container">

        <section>
            <h2>All Tags</h2>
            <ul className="menu-list">
              <li>
                <AniLink fade duration={0.6} to={`/tags/`}>
                  > All
                </AniLink>
              </li>
              {data.allMarkdownRemark.group.map(tag => (
                <li key={tag.fieldValue}>
                  <AniLink fade duration={0.6} to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    > {tag.fieldValue}
                  </AniLink>
                </li>
              ))}
            </ul>
          </section>
          <section className="menu">
            <h2>
              Menu
            </h2>
            <ul className="menu-list">
              <li>
                <AniLink fade duration={0.6} className="navbar-item" to="/">
                  Home
                </AniLink>
              </li>
              <li>
                <AniLink fade duration={0.6} className="navbar-item" to="/about">
                  About
                </AniLink>
              </li>
              <li>
                <AniLink fade duration={0.6} className="navbar-item" to="/blog">
                  Blog
                </AniLink>
              </li>
              <li>
                <AniLink fade duration={0.6} className="navbar-item" to="/contact">
                  Contact
                </AniLink>
              </li>
            </ul>
          </section>
          <section className="menu">
            <h2>
              External Link
            </h2>
            <ul className="menu-list">
              <li>
                <a title="twitter" href="https://twitter.com/Airport1000">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                  />
                </a>
              </li>
            </ul>
          </section>
          <section className="social">
            <h2>Share This Site</h2>
            <a title="facebook" href="https://facebook.com">
              <img
                className="fas fa-lg"
                src={facebook}
                alt="Facebook"
              />
            </a>
            <a title="twitter" href="https://twitter.com">
              <img
                className="fas fa-lg"
                src={twitter}
                alt="Twitter"
              />
            </a>
            <a title="instagram" href="https://instagram.com">
              <img
                className="fas fa-lg"
                src={instagram}
                alt="Instagram"
              />
            </a>
          </section>
        </div>
      </footer>
    )}
  />
)