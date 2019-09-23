import React from 'react'
import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";


import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <section className="menu">
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
              <li>
                <AniLink fade duration={0.6} className="navbar-item" to="/contact/examples/">
                  Form Examples
                </AniLink>
              </li>
            </ul>
          </section>
          <section>
            <ul className="menu-list">
              <li>
                <Link className="navbar-item" to="/blog">
                  Latest Stories
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </section>
          <div className="social">
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
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
