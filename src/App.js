import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import './App.css'

import BalagForm from './BalagForm'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <BalagForm />
        <pre>{JSON.stringify(this.props.dataStore.formData, null, 2)}</pre>
      </div>
    )
  }
}

export default inject('dataStore')(observer(App))
