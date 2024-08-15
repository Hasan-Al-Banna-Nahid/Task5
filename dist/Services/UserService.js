"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const faker_1 = require("@faker-js/faker");
class UserService {
    static generateUserData(region, errors, seed, page) {
        const data = [];
        faker_1.faker.seed(seed + page);
        for (let i = 0; i < 20; i++) {
            const name = faker_1.faker.name.fullName();
            const address = faker_1.faker.address.streetAddress();
            const phone = faker_1.faker.phone.number();
            data.push({
                index: i + 1,
                identifier: faker_1.faker.datatype.uuid(),
                name,
                address,
                phone,
            });
        }
        return this.applyErrors(data, errors);
    }
    static applyErrors(data, errors) {
        // Implement error application logic
        // Return data with errors applied
        return data;
    }
}
exports.UserService = UserService;
