import HttpError from '../core/HttpError.js'

export const getPersonalData = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }

  const userId = context.user.id;

  return context.entities.User.findUnique({
    where: { id: userId },
    include: { personalData: true }
  });
}

export const getMealPlan = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const { userId } = args;

  const mealPlan = await context.entities.MealPlan.findMany({
    where: { userId },
  });

  return mealPlan;
}

export const getFoodItems = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }

  const foodItems = await context.entities.MealPlan.findMany({
    select: {
      foodItem: true
    }
  });

  return foodItems.map(item => item.foodItem);
}