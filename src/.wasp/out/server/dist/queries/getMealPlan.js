import prisma from '../dbClient.js';
import { getMealPlan } from '../ext-src/queries.js';
export default async function (args, context) {
    return getMealPlan(args, Object.assign(Object.assign({}, context), { entities: {
            User: prisma.user,
            MealPlan: prisma.mealPlan,
        } }));
}
//# sourceMappingURL=getMealPlan.js.map