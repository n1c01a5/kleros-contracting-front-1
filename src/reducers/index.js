import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { reducer as form } from 'redux-form'

import balance from './balance'
import disputes from './disputes'
import contracts from './contracts'

export default combineReducers({
  router,
  form,
  balance,
  disputes,
  contracts
})
