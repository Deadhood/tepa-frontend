import React, { Component } from 'react'
import Form from 'react-jsonschema-form'
import { inject, observer } from 'mobx-react'

const schema = {
  title: 'টেপা',
  type: 'object',
  required: ['graam'],
  properties: {
    graam: {
      title: 'গ্রাম',
      type: 'string'
    },
    ward: {
      title: 'ওয়ার্ড',
      type: 'number',
      enum: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  }
}

class BalagForm extends Component {
  render () {
    return (
      <Form schema={schema} onSubmit={this._handleSubmit.bind(this)} />
    )
  }

  _handleSubmit (data) {
    this.props.dataStore.formData = data.formData
  }
}

export default inject('dataStore')(observer(BalagForm))
