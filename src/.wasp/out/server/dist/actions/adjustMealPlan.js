import prisma from '../dbClient.js';
import { adjustMealPlan } from '../ext-src/actions.js';
export default async function (args, context) {
    return adjustMealPlan(args, Object.assign(Object.assign({}, context), { entities: {
            User: prisma.user,
            PersonalData: prisma.personalData,
            MealPlan: prisma.mealPlan,
        } }));
}
//# sourceMappingURL=adjustMealPlan.js.map