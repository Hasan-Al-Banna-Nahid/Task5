import { faker } from "@faker-js/faker";
import User from "../Models/UserModel";

interface UserData {
  index: number;
  identifier: string;
  name: string;
  address: string;
  phone: string;
}

export class UserService {
  static generateUserData(
    region: string,
    errors: number,
    seed: number,
    page: number
  ): UserData[] {
    const data: UserData[] = [];
    faker.seed(seed + page);

    for (let i = 0; i < 20; i++) {
      const name = faker.name.fullName();
      const address = faker.address.streetAddress();
      const phone = faker.phone.number();
      data.push({
        index: i + 1,
        identifier: faker.datatype.uuid(),
        name,
        address,
        phone,
      });
    }

    return this.applyErrors(data, errors);
  }

  static applyErrors(data: UserData[], errors: number): UserData[] {
    // Implement error application logic
    // Return data with errors applied
    return data;
  }
}
