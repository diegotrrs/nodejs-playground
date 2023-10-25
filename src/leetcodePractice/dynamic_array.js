const user1 = {
    name: 'Robert Joe',
    age: 30,
    getMe() {
      return `${this.name} is ${this.age} years old.`;
    }
  };
  
  const user2 = {
    name: 'Laura Dash',
    age: 25
  };
  
  console.log(user1.getMe.call(user2));
  console.log(user1.getMe.apply(user2));