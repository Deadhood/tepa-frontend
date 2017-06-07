import { extendObservable } from 'mobx'

export default class DataStore {
  constructor () {
    extendObservable(this, {
      formData: null,
      message: null
    })
  }
}
