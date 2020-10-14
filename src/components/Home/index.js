import React from "react"
import classNames from "classnames"

import styles from "./utils/home.module.scss"
import { Link } from "gatsby"

const Home = () => {
  return (
    <section class="hero is-medium">
      <div class="hero-body pt-5-mobile">
        <div>
          <h1
            className={classNames(
              "has-text-centered has-text-primary",
              styles["home__title"]
            )}
          >
            Don't know what to prepare?
          </h1>
          <h3
            className={classNames(
              "has-text-centered",
              styles["home__subtitle"]
            )}
          >
            Let Mang Cook know and he'll take it from there.
          </h3>
          <div className="buttons is-centered mt-1">
            <Link
              className="button is-primary is-medium mx-1"
              to="/ingredients"
            >
              Enter Ingredients
            </Link>
            <Link
              to="/about"
              className="button is-primary is-medium is-outlined"
            >
              Who is Mang Cook?
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
