class Item {
    constructor(public name: string, public price: number, public quantity: number) {}
  }
  
  class ShoppingCart {
    constructor(public user: User, public items: Item[] = []) {}
  
    addItem(item: Item): void {
      this.items.push(item);
    }
  
    removeItem(item: Item): void {
      const index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    }
  
    calculateTotalCost(): number {
      return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  }
  
  class User {
    constructor(public name: string, public email: string, public password: string) {}
  
    static users: User[] = [];
  
    static register(name: string, email: string, password: string): User {
      const user = new User(name, email, password);
      User.users.push(user);
      return user;
    }
  
    static login(username: string, password: string): User {
      const user = User.users.find((user) => user.name === username && user.password === password);
      if (user) {
        return user;
      } else {
        throw new Error('Invalid username or password');
      }
    }
  }
  