import React         from 'react';
import Header        from '../Header/Header';
import Main          from '../Main/Main';
import { ViewStore } from '../../stores/ViewStore';

interface AppProps { viewStore: ViewStore; }

const App = (props: AppProps) => {
  return (
    <div>
      <Header />
      <Main viewStore={props.viewStore} />
    </div>
  );
}

export default App;
