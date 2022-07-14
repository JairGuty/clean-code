(() => {
  // No aplicando el principio de responsabilidad única

  type Gender = "M" | "F";

  interface IPersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({ name, gender, birthdate }: IPersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface IUserProps {
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class User extends Person {
    public lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ email, role, name, gender, birthdate }: IUserProps) {
      super({ name, gender, birthdate });
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface IUserSettings {
    workingDirectory: string,
    lastOpenFolder: string,
    email: string,
    role: string,
    name: string,
    gender: Gender,
    birthdate: Date
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthdate
    }: IUserSettings) {
      super({email, role, name, gender, birthdate});
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;

    }
  }

  const userSettings = new UserSettings({
    workingDirectory: "/usr/home",
    lastOpenFolder: "/home",
    email: "jair@google.com",
    role: "Admin",
    name: "Jair",
    gender: "M",
    birthdate: new Date("1978-01-06"),
  });

  console.log({ userSettings });

})();
