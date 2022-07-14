(() => {
  // Aplicando el principio de responsabilidad única
  // Priorizar la composicion frente a la herencia

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
  }

  class User {
    public lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ email, role }: IUserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface ISettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ workingDirectory, lastOpenFolder }: ISettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  interface IUserSettings {
    workingDirectory: string;
    lastOpenFolder: string;
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class UserSettings {
    public user: User;
    public person: Person;
    public settings: Settings;

    constructor({
      name,
      email,
      gender,
      role,
      birthdate,
      lastOpenFolder,
      workingDirectory,
    }: IUserSettings) {
      this.person = new Person({ name, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({ lastOpenFolder, workingDirectory });
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
