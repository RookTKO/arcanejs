import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import Header from './header'
import Footer from './footer'
import './layout.scss'

const LandingPageLayout = ({ children }) => (
    <>
    render={data => (
      <>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <Header/>
        <article class="blogPost">

            {children}
            <p>sdsdsdsd<a>TEST</a>sdsdsdsd</p>
          </article>
        <Footer/>
      </>
    )}
    </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LandingPageLayout
