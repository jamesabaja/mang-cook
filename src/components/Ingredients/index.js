import React, { Fragment, useState } from "react"
import Select from "react-select"
import classNames from "classnames"

import ingredients from "../../../static/ingredients.json"
import recipes from "../../../static/recipes.json"
import Recipe from "./Recipe"

import styles from "./utils/ingredients.module.scss"

const customStyles = theme => ({
  ...theme,
  boxShadow: "inset 0 0.0625em 0.125em rgba(0, 0, 0, 0.05)",
  colors: {
    ...theme.colors,
    primary: "#b9cfc1",
    primary25: "#c7d8cd",
    primary50: "#e3ece6",
  },
})

const Ingredients = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [selectedIngredients, setSelectedIngredients] = useState([])
  const [recommendedRecipes, setRecommendedRecipes] = useState([])
  const [shoppingList, setShoppingList] = useState([])
  let selectedIngredientsFlat = selectedIngredients?.map(
    ingredient => ingredient?.label
  )

  const handleChange = values => {
    setSelectedIngredients(values)
    let tempSelectedIngredientsFlat = values?.map(
      ingredient => ingredient?.label
    )

    let tempRecommendedRecipes = []

    for (let j = 0; j < recipes.length; j++) {
      let recipe = recipes[j]
      let recipeIngredients = recipe.ingredients
      let containsIngredients =
        tempSelectedIngredientsFlat?.filter(ingredient =>
          recipeIngredients.includes(ingredient)
        )?.length > 0

      if (containsIngredients) tempRecommendedRecipes.push(recipe)
    }

    setRecommendedRecipes(tempRecommendedRecipes)
  }

  return (
    <Fragment>
      {selectedRecipe && (
        <div
          className={classNames("modal", {
            "is-active": !!setSelectedRecipe,
          })}
        >
          <div className="modal-background"></div>
          <div className="modal-content">
            <div className="box">
              <h3 className="has-text-centered mt-0 has-text-primary">
                Shopping List 🛒
              </h3>
              <p className="has-text-centered is-size-5 is-italic has-text-grey">
                {selectedRecipe?.name}
              </p>
              <hr className="has-text-grey mb-1" />
              {selectedRecipe?.shoppingList?.map(ingredient => (
                <div className={classNames("is-size-5 my-1")}>
                  <div class="pretty p-default p-smooth">
                    <input
                      type="checkbox"
                      onChange={event => {
                        const filteredShoppingList = [...shoppingList].filter(
                          listItem => listItem !== ingredient
                        )

                        if (event.target.checked) {
                          filteredShoppingList.push(ingredient)
                        }
                        setShoppingList(filteredShoppingList)
                      }}
                    />
                    <div class="state p-success">
                      <label
                        className={classNames({
                          [styles[
                            "shopping_list__itemChecked"
                          ]]: shoppingList.includes(ingredient),
                        })}
                      >
                        {ingredient}
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={() => {
              setShoppingList([])
              setSelectedRecipe(null)
            }}
          ></button>
        </div>
      )}
      <p>Select Ingredients</p>
      <Select
        theme={customStyles}
        options={ingredients.map(ingredient => ({
          label: ingredient,
          value: ingredient,
        }))}
        isMulti
        onChange={handleChange}
      />

      {selectedIngredients?.length > 0 && (
        <h5 className="mt-3">
          According to Mang Cook, here's what you can make:
        </h5>
      )}

      <div className="columns is-multiline">
        {recommendedRecipes
          ?.map(recipe => {
            const alreadyHas = recipe?.ingredients?.filter(ingredient =>
              selectedIngredientsFlat?.includes(ingredient)
            )
            const needToHave = recipe?.ingredients?.filter(
              ingredient => !selectedIngredientsFlat?.includes(ingredient)
            )
            const notNeededAnymore = selectedIngredientsFlat?.filter(
              ingredient => !recipe?.ingredients?.includes(ingredient)
            )

            return {
              ...recipe,
              alreadyHas,
              needToHave,
              notNeededAnymore,
            }
          })
          .sort(
            (firstRecipe, secondRecipe) =>
              secondRecipe.alreadyHas.length - firstRecipe.alreadyHas.length
          )
          .map(recipe => (
            <Recipe recipe={recipe} setSelectedRecipe={setSelectedRecipe} />
          ))}
      </div>
    </Fragment>
  )
}

export default Ingredients
