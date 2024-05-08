export class Singleton {
  static SingletonUniqueInstance?: Singleton;
  private constructor() {}

  static getInstance(): Singleton {
    if (!Singleton.SingletonUniqueInstance) {
      Singleton.SingletonUniqueInstance = new Singleton();
    }

    return Singleton.SingletonUniqueInstance;
  }
}

const t = Singleton.getInstance();
const b = Singleton.getInstance();

