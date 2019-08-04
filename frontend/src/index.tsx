import React              from 'react';
import ReactDOM           from 'react-dom';
import App                from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { ViewStore }      from './stores/ViewStore';
import Client             from './client/Client';

const client = new Client();
const viewStore = new ViewStore(client);

ReactDOM.render(<App viewStore={viewStore} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
