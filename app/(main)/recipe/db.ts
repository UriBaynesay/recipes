import { PrismaClient } from "prisma/prisma-client"

export const createRecipe = async (
  profile_id: string,
  title: string,
  description: string,
  prep_time: string,
  cook_time: string,
  servings: number,
  ingredients: string[],
  directions: string[]
) => {
  const prisma = new PrismaClient()
  try {
    return await prisma.recipe.create({
      data: {
        title,
        profile_id,
        description,
        prep_time,
        cook_time,
        servings,
        ingredients,
        directions,
      },
    })
  } catch (error) {
    console.log(error)
  }
}

export const editRecipe = async (
  recipeId: string,
  title: string,
  description: string,
  prep_time: string,
  cook_time: string,
  servings: number,
  ingredients: string[],
  directions: string[]
) => {
  const prisma = new PrismaClient()
  try {
    return await prisma.recipe.update({
      where: { id: recipeId },
      data: {
        title,
        description,
        prep_time,
        cook_time,
        servings,
        ingredients,
        directions,
      },
    })
  } catch (error) {
    console.log(error)
  }
}

export const deleteRecipe = async (recipeId: string) => {
  const prisma = new PrismaClient()
  try {
    return await prisma.recipe.delete({
      where: { id: recipeId },
    })
  } catch (error) {
    console.log(error)
  }
}

export const getRecipeById = async (recipeId: string) => {
  const prisma = new PrismaClient()
  try {
    return await prisma.recipe.findFirst({
      where: { id: recipeId },
      include: { author: true, Reviews: true },
    })
  } catch (error) {
    console.log(error)
  }
}
