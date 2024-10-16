import { getRecipes } from "@/app/(main)/recipe/db"
import RecipePreview from "./recipe-preview"
import RecipeFilter from "./recipe-filter"

const RecipeList = async ({ filter }: { filter: string }) => {
  const recipes = await getRecipes(filter)
  return (
    <section>
      <RecipeFilter/>
      <ul className="md:grid md:grid-cols-4 md:gap-4">
        {recipes?.map((recipe) => (
          <RecipePreview key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    </section>
  )
}

export default RecipeList
