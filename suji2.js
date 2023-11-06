class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  const cart = [
    new Product("Product1", 10),
    new Product("Product2", 20),
    new Product("Product3", 30),
    new Product("Product4", 40),
    new Product("Product5", 50),
  ];
  
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);
  
  console.log("Total Price of Cart Items: $" + totalPrice);
  