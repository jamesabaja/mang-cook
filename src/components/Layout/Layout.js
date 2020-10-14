import React, { Fragment } from "react"

import SEO from "./SEO"
import Navbar from "./Navbar"

import "../../styles/global.scss"

const Layout = ({ children, title, subtitle, seoTitle }) => {
  return (
    <Fragment>
      <SEO title={seoTitle} />
      <Navbar />
      {title && (
        <h2 className="has-text-centered mb-0 has-text-primary mx-2-mobile pb-3">
          {title}
          <h4 className="subtitle has-text-grey has-text-centered my-1 is-size-6 mx-2-mobile">
            {subtitle}
          </h4>
        </h2>
      )}
      <main className="mb-3">{children}</main>
    </Fragment>
  )
}

export default Layout
