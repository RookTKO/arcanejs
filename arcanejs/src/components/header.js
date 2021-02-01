import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Emoji from './widgets/emoji'

const Header = ({ siteTitle }) => (
  <>
  <Emoji />
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
  <Emoji />
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
