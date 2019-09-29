import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../assets/styles/basic/reset.css'
import '../assets/styles/basic/base.scss'
import '../assets/styles/basic/typography.scss'
import '../assets/styles/components/layout.scss'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'

import useSiteMetadata from './SiteMetadata'
import { withPrefix } from "gatsby"

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div className="layout">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix("/")}img/og-image.jpg`} />
      </Helmet>

      <div className="clearfix">
        <div className="left">
          <h1 className="siteTitle">
            知らない国の
            <br/>
            知らない言葉
          </h1>
          <p className="siteDescription">
            review, blog, and some
          </p>
          <h2 className="menuHeader">
            Menu
          </h2>
          <Navbar className="leftNav"/>
          <h2 className="menuHeader">
            External Link
          </h2>
          <div className="social">
            <a 
              title="twitter"
              href="https://twitter.com/Airport1000"
              target="_blank"
            >
              <img
                className="fas fa-lg"
                src={twitter}
                alt="Twitter"
              />
            </a>
          </div>
          <h2 className="menuHeader">
            Share
          </h2>
          <div className="social">
            <a href="https://twitter.com/share?
              url=http://itoh-archive.hatenablog.com/entry/about&
              text=TwitterShareTest"
              rel="nofollow" 
              target="_blank"
            >
              <img
                className="fas fa-lg"
                src={twitter}
                alt="Twitter"
              />
            </a>
            <a　title="facebook" href="https://www.facebook.com/sharer/sharer.php?u=">
              <img
                className="fas fa-lg"
                src={facebook}
                alt="Facebook"
              />
            </a>
            <a title="instagram" href="https://instagram.com">
              <img
                className="fas fa-lg"
                src={instagram}
                alt="Instagram"
              />
            </a>
          </div>

            <div className="pad"></div>
        </div>
        <div className="right">
          <div className="main">
            {children} 
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default TemplateWrapper
