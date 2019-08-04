import { TaskStore }  from '../stores/TaskStore';
import { observable } from 'mobx';

export class Task {

  @observable name: string;
  @observable id: string;
  private readonly taskStore: TaskStore;

  constructor(taskStore: TaskStore, id: string, name: string = '') {
    this.taskStore = taskStore;
    this.id = id;
    this.name = name;
  }
}