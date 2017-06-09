import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import App from './App'
import DataStore from './DataStore'
import registerServiceWorker from './registerServiceWorker'

import 'bootswatch/cosmo/bootstrap.css'
import './index.css'

ReactDOM.render(
  <Provider dataStore={new DataStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
