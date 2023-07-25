"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
let myUuid = (0, uuid_1.v4)();
console.log(myUuid);
// class Item {
//     private _id:string;
//     name:string;
//     price:number;
//     description:string;
//     constructor(name:string, price:number, description: string) {
//         this._id = uuidv4()
//         this.name = name
//         this.price = price
//         this.description = description
//     }
// }
class Item {
    constructor(name, price, description, quantity) {
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    getDescription() {
        return this.description;
    }
}
class User {
    constructor(name, age) {
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.age = age;
        this.cart = [];
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getCart() {
        return this.cart;
    }
    addToCart(item) {
        this.cart.push(item);
    }
    removeFromCart(item) {
        this.cart = this.cart.filter((cartItem) => cartItem.getId() !== item.getId());
    }
    removeQuantityFromCart(item, quantity) {
        const itemIndex = this.cart.findIndex((cartItem) => cartItem.getId() === item.getId());
        if (itemIndex !== -1) {
            this.cart[itemIndex].quantity -= quantity;
            if (this.cart[itemIndex].quantity <= 0) {
                this.cart.splice(itemIndex, 1);
            }
        }
    }
    cartTotal() {
        return this.cart.reduce((total, item) => total + item.getPrice(), 0);
    }
    printCart() {
        console.log(`User: ${this.name}`);
        console.log('Cart Items:');
        this.cart.forEach((item) => {
            console.log(`- ${item.getName()}: $${item.getPrice()}`);
        });
    }
}
class Shop {
    constructor() {
        this.items = [];
        // Create three example items and add them to the shop
        const item1 = new Item('Item 1', 10, 'Description 1', 1);
        const item2 = new Item('Item 2', 20, 'Description 2', 3);
        const item3 = new Item('Item 3', 30, 'Description 3', 10);
        this.items.push(item1, item2, item3);
    }
    getItems() {
        return this.items;
    }
}
exports.default = Shop;
const shop = new Shop();
// Create a user
const user = new User('John', 25);
// Add items from the shop to the user's cart
const items = shop.getItems();
user.addToCart(items[0]);
user.addToCart(items[1]);
// Print the user's cart
user.printCart();
// Remove all instances of an item from the user's cart
// user.removeFromCart(items[0]);
// Remove a quantity from the user's cart
// user.removeQuantityFromCart(items[1], 1);
// Print the updated user's cart
// user.printCart();
// Calculate and print the cart total
console.log('Cart Total:', user.cartTotal());
// type User = {
//     id:string,
//     name:string,
//     age:number,
//     cart: string[]
// }
// function createUser(name:string, age:number):User {
//     return {
//         id:myUuid,
//         name, 
//         age, 
//         cart:[]
//     }
// }
// function createItem(name:string, price:number, description:string):Item {
//     return {
//         id: myUuid,
//         name,
//         price,
//         description
//     }
// }
// function addCart(item:Item, user:User):void {
//     user.cart.push(item.id)
// }
// function removeFromCart(item:Item, user:User):void {
//     while (user.cart.indexOf(item.name) != -1) {
//         delete user.cart[user.cart.indexOf(item.name)]
//     }
//     console.log(user.cart)
// }
// // Not using code below V
// // function removeQuantityFromCart (item:Item, user:User, quantity:number):void {
// //     let newArr: string[] = []
// //     for (let i = 0; i < user.cart.length; i++) {
// //         if (quantity > 0){
// //             if (item.name == user.cart[i]) {
// //                 continue;
// //             } else {
// //                 newArr.push()
// //             }
// //         }
// //     }
// //     user.cart = newArr
// //     console.log(user.cart)
// // }
// function cartTotal(user:User, item:Item):number {
//     let total = 0
//     for (let i = 0; i < user.cart.length; i++) {
//         total += item.price    
//     }
//     return total
// }
// function printCart(user:User):void {
//     for (let i = 0; i < user.cart.length; i++) {
//         console.log(user.cart[i])
//     }
// }
// let user = createUser('Aryan', 22)
// let banana = createItem('banana', 1.00, 'this is a banana')
// let apple = createItem('apple', 2.00, 'this is an apple')
// let grape = createItem('grape', 1.50, 'These are grapes')
// addCart(banana, user)
// printCart(user)
// console.log(cartTotal(user, banana))
// addCart(banana, user)
// addCart(apple, user)
// addCart(grape, user)
// printCart(user)
// let food: Item[]= [banana, apple, grape]
// let sum = 0
// for (let i = 0; i < user.cart.length; i++){
//     for (let j = 0; j < food.length; j++){
//         if (String(food[j]) == user.cart[i]) {
//             sum += food[j].price
//         }
//     } 
// }
// console.log(sum)
// removeFromCart(banana, user)
// printCart(user)
// removeFromCart(apple, user)
// printCart(user)
// removeFromCart(grape, user)
// printCart(user)
// let food2: Item[]= [banana, apple, grape]
// let sum2 = 0
// for (let i = 0; i < user.cart.length; i++){
//     for (let j = 0; j < food.length; j++){
//         if (String(food2[j]) == user.cart[i]) {
//             sum2 += food2[j].price
//         }
//     } 
// }
// console.log(sum2)
