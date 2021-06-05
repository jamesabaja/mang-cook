import React from "react"
import classNames from "classnames"

import IngredientsList from "./IngredientsList"
import {
  faCheckCircle,
  faQuestionCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons"
import useRecipeImages from "./hooks/useRecipeImages"
import styles from "./utils/ingredients.module.scss"

const Recipe = ({ recipe, setSelectedRecipe }) => {
  const images = useRecipeImages()

  return (
    <div className="column is-6">
      <div className="card">
        <div className="card-image is-flex is-justify-content-center">
          <img
            src={images[recipe?.image].childImageSharp.fixed.src}
            className={classNames("image", styles["recipe__image"])}
          />
        </div>
        <div className="card-content">
          <div className="content">
            <p className="is-size-5">{recipe?.name}</p>
            <IngredientsList
              ingredients={recipe.alreadyHas}
              color="success"
              icon={faCheckCircle}
              header="Meron ka nang:"
            />
            <IngredientsList
              ingredients={recipe.needToHave}
              color="warning"
              icon={faQuestionCircle}
              header="Kulang na lang ng:"
            />
            <IngredientsList
              ingredients={recipe.notNeededAnymore}
              color="danger"
              icon={faTimesCircle}
              header="Di mo na kailangan ng:"
            />
          </div>
        </div>
        <footer className="card-footer">
          <button
            className={classNames(
              "card-footer-item button is-primary",
              styles["recipe__button"]
            )}
            onClick={() => {
              setSelectedRecipe({
                name: recipe?.name,
                shoppingList: recipe?.needToHave,
              })
            }}
          >
            {recipe?.needToHave?.length > 0
              ? "Kulang pa! Tara sa palengke 🛍️"
              : `G with ${recipe?.name}!  😋`}
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Recipe
