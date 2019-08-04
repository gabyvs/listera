import React         from 'react';
import Button        from 'react-bootstrap/Button';
import styles        from './Main.module.css';
import TaskList      from '../TaskList/TaskList';
import { ViewStore } from '../../stores/ViewStore';

interface MainProps { viewStore: ViewStore; }

const Main = (props: MainProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.taskListContainer}>
        <div className={styles.taskListHeader}>
          <Button variant="primary" className={styles.addTaskBtn}>Add Task</Button>
        </div>
        <TaskList viewStore={props.viewStore}/>
      </div>
      <div className={styles.detailsContainer}>
        <img className={styles.img} src={`static/tealImg.jpg`} alt=""/>
      </div>
    </div>
  );
}

export default Main;
