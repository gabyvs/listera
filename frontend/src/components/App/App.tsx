import React         from 'react';
import Header        from '../Header/Header';
import Main          from '../Main/Main';
import { RootStore } from '../../stores/RootStore';

interface AppProps { rootStore: RootStore; }

const App = (props: AppProps) => {
  return (
    <div>
      <Header />
      <Main rootStore={props.rootStore} />
    </div>
  );
}

export default App;
