import React from "react"
import IngredientsList from "./IngredientsList"
import {
  faCheckCircle,
  faQuestionCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons"

const Recipe = ({ recipe, selectedIngredients }) => {
  const alreadyHas = recipe?.ingredients?.filter(ingredient =>
    selectedIngredients?.includes(ingredient)
  )
  const needToHave = recipe?.ingredients?.filter(
    ingredient => !selectedIngredients?.includes(ingredient)
  )
  const notNeededAnymore = selectedIngredients?.filter(
    ingredient => !recipe?.ingredients?.includes(ingredient)
  )

  return (
    <div className="column is-6">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <p className="is-size-5">{recipe?.name}</p>
            <IngredientsList
              ingredients={alreadyHas}
              color="success"
              icon={faCheckCircle}
              header="Meron ka nang:"
            />
            <IngredientsList
              ingredients={needToHave}
              color="warning"
              icon={faQuestionCircle}
              header="Kulang na lang ng:"
            />
            <IngredientsList
              ingredients={notNeededAnymore}
              color="danger"
              icon={faTimesCircle}
              header="Di mo na kailangan ng:"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recipe
