import React from "react"
import classNames from "classnames"

const Container = ({
  children,
  mobile,
  tablet,
  desktop,
  fullhd,
  isCentered,
  className,
}) => {
  return (
    <div
      className={classNames("columns mx-1", {
        "is-centered": isCentered,
      })}
    >
      <div
        className={`column is-${mobile || 12}-mobile is-${
          tablet || 10
        }-tablet is-${desktop || 8}-desktop is-${fullhd || 6}-fullhd  ${
          className || ""
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default Container
