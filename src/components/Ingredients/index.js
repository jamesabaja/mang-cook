import React, { Fragment, useState } from "react"
import Select from "react-select"

import ingredients from "../../../static/ingredients.json"
import recipes from "../../../static/recipes.json"
import Recipe from "./Recipe"

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
  const [selectedIngredients, setSelectedIngredients] = useState([])
  const [recommendedRecipes, setRecommendedRecipes] = useState([])
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

    console.log(tempRecommendedRecipes)

    setRecommendedRecipes(tempRecommendedRecipes)
  }

  return (
    <Fragment>
      <p>Select Ingredients</p>
      <p className="help">Pick at least three</p>
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
        {recommendedRecipes?.map(recipe => (
          <Recipe
            recipe={recipe}
            selectedIngredients={selectedIngredientsFlat}
          />
        ))}
      </div>
    </Fragment>
  )
}

export default Ingredients
