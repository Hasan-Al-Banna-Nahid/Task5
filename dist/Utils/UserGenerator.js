"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
class UserGenerator {
    constructor(seed, region) {
        this.seed = seed;
        this.region = region;
        faker_1.faker.seed(this.seed);
    }
    generateName() {
        return `${faker_1.faker.name.firstName()} ${faker_1.faker.name.middleName()} ${faker_1.faker.name.lastName()}`;
    }
    generateAddress() {
        return `${faker_1.faker.address.city()}, ${faker_1.faker.address.streetAddress()}`;
    }
    generatePhone() {
        return faker_1.faker.phone.number();
    }
    generateUserData(index, errorRate) {
        const name = this.generateName();
        const address = this.generateAddress();
        const phone = this.generatePhone();
        // Apply errors based on errorRate
        const userData = {
            index,
            id: faker_1.faker.datatype.uuid(),
            name: this.applyErrors(name, errorRate),
            address: this.applyErrors(address, errorRate),
            phone: this.applyErrors(phone, errorRate),
        };
        return userData;
    }
    applyErrors(data, errorRate) {
        if (errorRate === 0)
            return data;
        let result = data;
        for (let i = 0; i < errorRate; i++) {
            const errorType = Math.floor(Math.random() * 3);
            switch (errorType) {
                case 0:
                    const deletePos = Math.floor(Math.random() * result.length);
                    result = result.slice(0, deletePos) + result.slice(deletePos + 1);
                    break;
                case 1:
                    const addPos = Math.floor(Math.random() * result.length);
                    const randomChar = faker_1.faker.random.alpha();
                    result = result.slice(0, addPos) + randomChar + result.slice(addPos);
                    break;
                case 2:
                    const swapPos = Math.floor(Math.random() * (result.length - 1));
                    result =
                        result.slice(0, swapPos) +
                            result[swapPos + 1] +
                            result[swapPos] +
                            result.slice(swapPos + 2);
                    break;
            }
        }
        return result;
    }
}
exports.default = UserGenerator;
