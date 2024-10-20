"use client"

import { useActionState, useState } from "react"
import { createRecipeAction } from "../action"

const CreateRecipePage = () => {
  const [ingredientsArr, setIngredientsArr] = useState([null])
  const [directionsArr, setDirectionsArr] = useState([null])
  const [state, formAction] = useActionState(createRecipeAction, {
    message: null,
    errors: {},
  })

  const handleAddIngredient = () => {
    setIngredientsArr([...ingredientsArr, null])
  }

  const handleAddDirection = () => {
    setDirectionsArr([...directionsArr, null])
  }

  return (
    <main className="grow mx-4 mt-6">
      <h1 className="text-3xl font-semibold text-center mb-4">Create Recipe</h1>
      <div className="md:flex md:justify-center">
        <form
          className="flex flex-col md:p-12 md:border md:rounded-md md:shadow-md [&>input]:mb-4"
          action={formAction}
        >
          <label htmlFor="title">
            <h1 className="font-semibold">Title</h1>
          </label>
          <input
            className="border-b-2 border-orange-300"
            type="text"
            name="title"
            id="title"
            required
          />
          <label htmlFor="description">
            <h1 className="font-semibold">Description</h1>
          </label>
          <textarea
            className="border-b-2 border-orange-300 focus-within:outline-none"
            name="description"
            id="description"
            required
          />
          <label className="mb-4" htmlFor="prep_time">
            <h1 className="font-semibold">Prep Time</h1>
            <input
              className="border-b-2 border-orange-300"
              type="number"
              name="prep_time"
              id="prep_time"
              required
            />
            <select name="prep_time_type" id="prep_time_type">
              <option value="min">Min</option>
              <option value="hour">Hour</option>
            </select>
          </label>
          <label className="mb-4" htmlFor="cook_time">
            <h1 className="font-semibold">Cook Time</h1>
            <input
              className="border-b-2 border-orange-300"
              type="number"
              name="cook_time"
              id="cook_time"
              required
            />
            <select name="cook_time_type" id="">
              <option value="min">Min</option>
              <option value="hour">Hour</option>
            </select>
          </label>
          <label htmlFor="servings">
            <h1 className="font-semibold">Servings</h1>
          </label>
          <input
            className="border-b-2 border-orange-300"
            type="number"
            name="servings"
            id="servings"
            required
          />
          {ingredientsArr.map((ingredient, idx) => {
            return (
              <label className="mb-4" key={idx} htmlFor={`ingredient_${idx}`}>
                <h1 className="font-semibold">Ingredient</h1>
                <input
                  className="border-b-2 border-orange-300 w-full"
                  type="text"
                  name={`ingredient`}
                  id={`ingredient`}
                  placeholder="e.g. 2 cups flour, sifted"
                  required
                />
              </label>
            )
          })}
          <button
            className="bg-blue-300 px-6 py-2 text-foreground rounded-md w-fit mx-auto"
            type="button"
            onClick={handleAddIngredient}
          >
            Add Ingredient
          </button>

          {directionsArr.map((direction, idx) => {
            return (
              <label className="mb-4" key={idx} htmlFor={`direction_${idx}`}>
                <h1 className="font-semibold">Direction</h1>
                <input
                  className="border-b-2 border-orange-300 w-full"
                  type="text"
                  name={`direction`}
                  id={`direction`}
                  placeholder="e.g. Combine all dry ingredients in a large bowl"
                  required
                />
              </label>
            )
          })}
          <button
            className="bg-blue-300 px-6 py-2 text-foreground rounded-md w-fit mx-auto"
            type="button"
            onClick={handleAddDirection}
          >
            Add Direction
          </button>

          <label htmlFor="image">
            <h1 className="font-semibold">Recipe Image</h1>
          </label>
          <input
            className="file:bg-transparent file:p-3 file:border file:border-gray-200 file:rounded-md file:shadow-sm file:cursor-pointer file:hover:bg-gray-50"
            id="image"
            name="image"
            type="file"
            accept="image/png, image/gif, image/jpeg"
          />
          <button
            className="bg-background px-6 py-2 text-foreground rounded-md w-fit mx-auto"
            type="submit"
          >
            Create
          </button>
          {state.message && (
            <small className="text-red-300">{state.message}</small>
          )}
        </form>
      </div>
    </main>
  )
}

export default CreateRecipePage
