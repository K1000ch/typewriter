import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }
  /*
  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }
  */

  render() {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <ul className="">
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
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
