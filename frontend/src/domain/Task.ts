import { TaskStore }  from '../stores/TaskStore';
import { observable } from 'mobx';

export class Task {

  @observable name: string;
  @observable id: number;
  private readonly taskStore: TaskStore;

  constructor(taskStore: TaskStore, id: number, name: string = '') {
    this.taskStore = taskStore;
    this.id = id;
    this.name = name;
  }
}