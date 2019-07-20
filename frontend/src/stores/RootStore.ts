import { ViewStore } from './ViewStore';
import { TaskStore } from './TaskStore';

export class RootStore {

  readonly viewStore: ViewStore;
  readonly taskStore: TaskStore;

  constructor() {
    this.viewStore = new ViewStore(this);
    this.taskStore = new TaskStore(this);
  }
}