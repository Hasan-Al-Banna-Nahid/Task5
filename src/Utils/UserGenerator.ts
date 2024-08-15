import { faker } from "@faker-js/faker";

class UserGenerator {
  private seed: number;
  private region: string;

  constructor(seed: number, region: string) {
    this.seed = seed;
    this.region = region;
    faker.seed(this.seed);
  }

  private generateName(): string {
    return `${faker.name.firstName()} ${faker.name.middleName()} ${faker.name.lastName()}`;
  }

  private generateAddress(): string {
    return `${faker.address.city()}, ${faker.address.streetAddress()}`;
  }

  private generatePhone(): string {
    return faker.phone.number();
  }

  public generateUserData(
    index: number,
    errorRate: number
  ): Record<string, string | number> {
    const name = this.generateName();
    const address = this.generateAddress();
    const phone = this.generatePhone();

    // Apply errors based on errorRate
    const userData = {
      index,
      id: faker.datatype.uuid(),
      name: this.applyErrors(name, errorRate),
      address: this.applyErrors(address, errorRate),
      phone: this.applyErrors(phone, errorRate),
    };

    return userData;
  }

  private applyErrors(data: string, errorRate: number): string {
    if (errorRate === 0) return data;

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
          const randomChar = faker.random.alpha();
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

export default UserGenerator;
