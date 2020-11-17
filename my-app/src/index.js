import React from 'react';
import ReactDOM from 'react-dom';
import Vehicles from './components/Vehicles';
import { Provider } from 'react-redux'
import configureStore from './store'
import 'primereact/resources/themes/nova/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const store = configureStore(
  {
    vehiclesReducer:{},

  })

ReactDOM.render(
  <Provider store={store}>
  	<Vehicles />
  </Provider>,
  document.getElementById('root')
);
