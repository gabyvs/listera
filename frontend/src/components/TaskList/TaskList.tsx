import { observer }  from 'mobx-react';
import React         from 'react';
import styles        from './TaskList.module.css';
import { ViewStore } from '../../stores/ViewStore';

interface TaskListProps { viewStore: ViewStore; }

const TaskList = observer((props: TaskListProps) => {
  const { tasks } = props.viewStore;
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