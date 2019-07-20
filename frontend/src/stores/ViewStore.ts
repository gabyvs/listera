import { RootStore } from './RootStore';

export class ViewStore {

  private readonly rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
}
