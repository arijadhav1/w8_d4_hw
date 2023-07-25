import { v4 as uuidv4 } from "uuid"
let myUuid = uuidv4()
console.log(myUuid)


class Item {
    id: string;
    name: string;
    price: number;
    description: string;
    quantity: number;
  
    constructor(name: string, price: number, description: string, quantity:number) {
      this.id = uuidv4();
      this.name = name;
      this.price = price;
      this.description = description;
      this.quantity = quantity
    }
  
    public getId(): string {
      return this.id;
    }
  
    public getName(): string {
      return this.name;
    }
  
    public getPrice(): number {
      return this.price;
    }
  
    public getDescription(): string {
      return this.description;
    }
  }

  class User {
    id: string;
    name: string;
    age: number;
    cart: Item[];
  
    constructor(name: string, age: number) {
      this.id = uuidv4();
      this.name = name;
      this.age = age;
      this.cart = [];
    }
  
    public getId(): string {
      return this.id;
    }
  
    public getName(): string {
      return this.name;
    }
  
    public getAge(): number {
      return this.age;
    }
  
    public getCart(): Item[] {
      return this.cart;
    }

    public addCart(item: Item): void {
      this.cart.push(item);
    }
    public removeCart(item: Item): void {
      this.cart = this.cart.filter((cartItem) => cartItem.getId() !== item.getId());
    }
  
    public removeNumItemCart(item: Item, quantity: number): void {
      const num = this.cart.findIndex((cartItem) => cartItem.getId() === item.getId());
      if (num !== -1) {
        this.cart[num].quantity -= quantity;
        if (this.cart[num].quantity <= 0) {
          this.cart.splice(num, 1);
        }
      }
    }
  
    public cartTotal(): number {
      return this.cart.reduce((total, item) => total + item.getPrice(), 0);
    }
  
    public printCart(): void {
      console.log(`${this.name}`);
      console.log('Cart Items:');
      this.cart.forEach((item) => {
        console.log(`${item.getName()}: ${item.getPrice()}`);
      });
    }
  }


  class Shop {
    private items: Item[];
  
    constructor() {
      this.items = [];

      const item1 = new Item('Bananas', 1.50, 'Delicious Ripe Yellow Bananas',5);
      const item2 = new Item('Apple', 2, 'Juicy Sweet Red Apples',10);
      const item3 = new Item('Grapes', 4.50, 'Purple Grapes (Bundled)',7);
      this.items.push(item1, item2, item3);
    }
  
    public getItems(): Item[] {
      return this.items;
    }
  }
  
const shop = new Shop();
const user = new User('Aryan', 22);


const items = shop.getItems();
user.addCart(items[0]);
user.addCart(items[1]);


user.printCart();


console.log('Cart Total:', user.cartTotal());

