import prisma from '../dbClient.js';
import { getPersonalData } from '../ext-src/queries.js';
export default async function (args, context) {
    return getPersonalData(args, Object.assign(Object.assign({}, context), { entities: {
            User: prisma.user,
            PersonalData: prisma.personalData,
        } }));
}
//# sourceMappingURL=getPersonalData.js.map