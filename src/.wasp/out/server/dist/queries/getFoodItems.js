import prisma from '../dbClient.js';
import { getFoodItems } from '../ext-src/queries.js';
export default async function (args, context) {
    return getFoodItems(args, Object.assign(Object.assign({}, context), { entities: {
            MealPlan: prisma.mealPlan,
        } }));
}
//# sourceMappingURL=getFoodItems.js.map