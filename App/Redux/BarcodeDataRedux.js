import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  barcodeDataRequest: ['data'],
  barcodeDataSuccess: ['payload'],
  barcodeDataFailure: null
})

export const BarcodeDataTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: [],
  error: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const success = (state, action) => {
  const { payload } = action;
  let temp = state.without("data", "fetching", "error")['payload'].concat(payload);
  return state.merge({ fetching: false, error: null, payload:temp })
};

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.BARCODE_DATA_REQUEST]: request,
  [Types.BARCODE_DATA_SUCCESS]: success,
  [Types.BARCODE_DATA_FAILURE]: failure
})
