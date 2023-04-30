/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  return (
    <div
      style={{
        maxWidth: "960px",
        margin: "0 auto",
        padding: "0 20px",
      }}
    >
      <Header />
      <div>
        <main>{children}</main>
        <footer
          style={{
            position: "relative",
            bottom: "100%",
            fontWeight: 100,
            fontSize: "12px",
          }}
        >
          ©{new Date().getFullYear()}
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
