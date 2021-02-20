import React from 'react'
import PropTypes from 'prop-types'
import './landingPageLayout.scss'
import Emoji from './widgets/emoji'
import { Link } from 'gatsby'

const LandingPageLayout = () => (
  <main>

      <Emoji bigLogo={true}/>
    <Link to="/" class="mainSiteLogo" >
      arcane
    </Link>

            <p>"Demystifying the mystical art of JavaScript!"</p>

      </main>
)

LandingPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LandingPageLayout
