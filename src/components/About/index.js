import { Link } from "gatsby"
import React, { Fragment } from "react"

const About = () => {
  return (
    <Fragment>
      <p className="mb-2 is-size-5">
        Mang Cook is your guide to the Filipino culinary experience. Just tell
        him what ingredients you have at home, and Mang Cook will recommend
        <span className="is-italic"> Pinoy</span> dishes you can make based on
        your list.{" "}
      </p>
      <p className="my-2 is-size-5">
        His name is also a play on the word{" "}
        <span className="is-italic">Mangkok</span> (bowl), one of the most
        common tableware that can be found in a Filipino household. Its
        versatility allows holding different kinds of food; rice, stew, soup,
        noodles — you name it, the <span className="is-italic">Mangkok</span>{" "}
        can hold it.
      </p>
      <p className="mt-3 mb-1 has-text-weight-bold">
        Got your ingredient list ready?
      </p>
      <Link to="/ingredients" className="button is-primary is-fullwidth">
        Take me to Mang Cook
      </Link>
    </Fragment>
  )
}

export default About
