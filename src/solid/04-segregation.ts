interface IBird {
  eat(): void;
}

interface IFlyingBird {
  fly(): number;
}

interface IRunningBird {
    run(): void;
}

interface ISwingingBird {
    swim(): void;
}

class Tucan implements IBird, IFlyingBird {
  public fly() {return 300; } 
  public eat() {}
}

class Humminbird implements IBird, IFlyingBird {
  public fly() {return 200; }
  public eat() {}
}

class Ostrich implements IBird, IRunningBird {
  public eat() {}
  public run() {}
}

class Penguin implements IBird, ISwingingBird {
  public eat() {}
  public swim() {}
}
