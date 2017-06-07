import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import './App.css'

import BalagForm from './BalagForm'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='container-fluid'>
          <div className='well'>{this.props.dataStore.message}</div>
          <BalagForm />
        </div>
      </div>
    )
  }
}

export default inject('dataStore')(observer(App))
