import { TaskStore }            from './TaskStore';
import Client                   from '../client/Client';
import { computed, observable } from 'mobx';

export class ViewStore {

  @observable loading: boolean = true;
  @observable hasError = false;
  private readonly taskStore: TaskStore;

  constructor(client: Client) {
    this.taskStore = new TaskStore(client);
    this.loadTasks();
  }

  @computed
  get tasks() {
    return this.taskStore.tasks;
  }

  private loadTasks() {
    this.taskStore.loadTasks()
      .then(() => {
        this.loading = false;
      })
      .catch((error: Error) => {
        this.loading = false;
        this.hasError = true;
        console.log(error);
      });
  }
}
