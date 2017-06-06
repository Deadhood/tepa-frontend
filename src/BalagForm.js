import React, { Component } from 'react'
import Form from 'react-jsonschema-form'
import { inject, observer } from 'mobx-react'

import formSchema from './Schema.Data'
import uiSchema from './Schema.UI'

class BalagForm extends Component {
  render () {
    return (
      <Form
        schema={formSchema}
        uiSchema={uiSchema}
        onSubmit={this._handleSubmit.bind(this)}
      />
    )
  }

  _handleSubmit (data) {
    this.props.dataStore.formData = data.formData
  }
}

export default inject('dataStore')(observer(BalagForm))
