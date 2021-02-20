import React from 'react'
import PropTypes from 'prop-types'
import './landingPageLayout.scss'
import Emoji from './widgets/emoji'
import { Link } from 'gatsby'

const LandingPageLayout = () => (
  <main>

<p class="landingPageQuote">"Demystifying the mystical art of JavaScript one
💩 at a time!"</p>
      <Emoji bigLogo={true}/>
    <Link to="/" class="mainSiteLogo" >
      arcane
    </Link>
    <Link to="/" class="entry">[ Enter at your own peril ]</Link>


      </main>
)

LandingPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LandingPageLayout
