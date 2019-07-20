import React         from 'react';
import ReactDOM      from 'react-dom';
import App           from './App';
import { RootStore } from '../../stores/RootStore';

describe('App', () => {
  let store: RootStore;

  beforeEach(() => {
    store = new RootStore();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App rootStore={store} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
