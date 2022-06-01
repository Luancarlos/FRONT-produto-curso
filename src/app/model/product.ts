export class Product {
  name: string;
  description?: string;
  price?: number;

  constructor(name: string, desciption: string, price: number) {
    this.name = name;
    this.description = desciption;
    this.price = price;
  }
}
