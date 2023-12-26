import { handleRejection } from '../../../utils.js';
import { createUser } from '../../utils.js';
import { validateAndGetAdditionalFields } from '../../utils.js';
export default handleRejection(async (req, res) => {
    const userFields = req.body || {};
    const additionalFields = await validateAndGetAdditionalFields(userFields);
    await createUser(Object.assign(Object.assign({}, additionalFields), { username: userFields.username, password: userFields.password }));
    return res.json({ success: true });
});
//# sourceMappingURL=signup.js.map