import { calculateBasalMetabolicRate, calculateCaloricValue } from './utils.js';
import { calculateBMR, adjustBMR, calculatePM1, calculatePM2, compareAndAdjustPM, createMealPlan } from "@server/mealPlanUtils.js";
import HttpError from '../core/HttpError.js'

export const calculateBMR = async (args, context) => {
  const { weight, height, age, gender, physicalActivityLevel, dietaryGoals } = args;

  const BMR = calculateBasalMetabolicRate(weight, height, age, gender);

  let adjustedBMR = BMR;

  if (dietaryGoals === 'weightLoss') {
    adjustedBMR -= calculateCaloricValue(BMR, physicalActivityLevel);
  } else if (dietaryGoals === 'weightGain') {
    adjustedBMR += calculateCaloricValue(BMR, physicalActivityLevel);
  }

  return adjustedBMR;
}

export const createMealPlan = async (args, context) => {
  // Step 1: Fetch user's personal data
  const personalData = await context.entities.PersonalData.findUnique({
    where: { userId: context.user.id }
  });

  // Step 2: Calculate BMR
  const bmr = calculateBMR(personalData);

  // Step 3: Adjust BMR based on user's goal and activity level
  const adjustedBMR = adjustBMR(bmr, personalData);

  // Step 4: Determine PM1 and PM2
  const pm1 = calculatePM1(adjustedBMR);
  const pm2 = calculatePM2(adjustedBMR);

  // Step 5: Compare PM1 and PM2, adjust if necessary
  const finalPM = compareAndAdjustPM(pm1, pm2);

  // Step 6: Create Individualized Daily Nutrition Plan
  const mealPlan = createMealPlan(finalPM);

  // Step 7: Save meal plan
  await context.entities.MealPlan.create({
    data: {
      foodItem: mealPlan.foodItem,
      servings: mealPlan.servings,
      mealTime: mealPlan.mealTime,
      user: { connect: { id: context.user.id } }
    }
  });

  return mealPlan;
}

export const adjustMealPlan = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  // Implement the logic to adjust the meal plan dynamically

  // Implement the logic to suggest adjustments for better adherence to the calculated meal plan

  // Implement the logic to return the updated meal plan
}