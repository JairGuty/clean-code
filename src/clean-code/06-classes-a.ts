(() => {
  // No aplicando el principio de responsabilidad única

  type Gender = "M" | "F";

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ){}
  }

  class User extends Person {
    public lastAccess: Date;
    
    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCrendetials() {
      return true;
    }
  }
})();
