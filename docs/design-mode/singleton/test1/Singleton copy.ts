export class WorkbenchStore {
  static SingletonUniqueInstance?: WorkbenchStore;
  private constructor() {}

  static get getInstance(): WorkbenchStore {
    if (!WorkbenchStore.SingletonUniqueInstance) {
      WorkbenchStore.SingletonUniqueInstance = new WorkbenchStore();
    }

    return WorkbenchStore.SingletonUniqueInstance;
  }
}


