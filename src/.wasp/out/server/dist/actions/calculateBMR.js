import prisma from '../dbClient.js';
import { calculateBMR } from '../ext-src/actions.js';
export default async function (args, context) {
    return calculateBMR(args, Object.assign(Object.assign({}, context), { entities: {
            PersonalData: prisma.personalData,
            User: prisma.user,
        } }));
}
//# sourceMappingURL=calculateBMR.js.map