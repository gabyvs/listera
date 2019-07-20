import React         from 'react';
import styles        from './TaskList.module.css';
import { TaskStore } from '../../stores/TaskStore';
import { observer }  from 'mobx-react';

interface TaskListProps { taskStore: TaskStore; }

const TaskList = observer((props: TaskListProps) => {
  const { tasks } = props.taskStore;
  const taskList = tasks.map(task => (
    <div className={styles.task} key={task.id}>{task.name}</div>
  ));

  return (
    <div className={styles.list}>
      {taskList}
    </div>
  );
});

export default TaskList;