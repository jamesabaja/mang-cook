import React from "react"
import classNames from "classnames"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const IngredientsList = ({ ingredients, header, color, icon }) => {
  if (ingredients?.length > 0)
    return (
      <p>
        <FontAwesomeIcon
          icon={icon}
          className={classNames(`mr-1 has-text-${color}`)}
        />
        {header} {ingredients?.join(", ")}
      </p>
    )
  return null
}

export default IngredientsList
