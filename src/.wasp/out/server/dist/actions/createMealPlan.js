import prisma from '../dbClient.js';
import { createMealPlan } from '../ext-src/actions.js';
export default async function (args, context) {
    return createMealPlan(args, Object.assign(Object.assign({}, context), { entities: {
            User: prisma.user,
            PersonalData: prisma.personalData,
            MealPlan: prisma.mealPlan,
        } }));
}
//# sourceMappingURL=createMealPlan.js.map