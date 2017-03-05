// @flow

import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    temperature: require('./TemperatureRedux').reducer,
    login: require('./LoginRedux').reducer,
    search: require('./SearchRedux').reducer,
    barcode: require('./BarcodeDataRedux').reducer,
    barcodeapi: require('./BarCodeRedux').reducer,
    sendcode: require('./ParseSendRedux').reducer

  })

  return configureStore(rootReducer, rootSaga)
}
