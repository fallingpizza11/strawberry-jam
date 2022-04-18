import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {

  return (
    <>
    <Header links={['home', 'artwork', <img src="http://media.graphcms.com/6WluMkcCTG2x9NjDAYZK" />, 'about', 'contact']}></Header>
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © Isaac Giuricich {new Date().getFullYear()}
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

