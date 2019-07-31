import { RootStore }  from './RootStore';
import { observable } from 'mobx';
import { Task }       from '../domain/Task';
import Client         from '../client/Client';

export class TaskStore {

  @observable tasks: Task[] = [];
  private readonly rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.loadTasks();
  }

  loadTasks() {
    const client = new Client();
    client.fetchAllTasks();
    const taskNames = [
      'Start app',
      'Study refactor books'
    ];

    this.tasks = taskNames.map((taskName, index) => {
      return new Task(this, index, taskName);
    });
  }
}
