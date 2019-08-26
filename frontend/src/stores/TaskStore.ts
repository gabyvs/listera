import { action, observable } from 'mobx';
import { Task }               from '../domain/Task';
import Client                 from '../client/Client';
import { ITaskResponse }      from '../interfaces/ITask';

export class TaskStore {

  @observable tasks: Task[] = [];
  private readonly client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  loadTasks() {
    return this.client.tasks()
      .then(this.setTasks);
  }

  @action
  setTasks = (tasks: ITaskResponse[]) => {
    this.tasks = tasks.map((task: ITaskResponse) => {
      return new Task(this, task.id, task.name);
    })
  }
}
