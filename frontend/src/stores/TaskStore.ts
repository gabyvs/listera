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

  @action
  loadTasks() {
    return this.client.tasks()
      .then((tasks: ITaskResponse[]) => {
        this.tasks = tasks.map((task: ITaskResponse) => {
          return new Task(this, task.id, task.name);
        })
      });
  }
}
