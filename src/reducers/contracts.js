import PropTypes from 'prop-types'

import { createReducer } from '../utils'
import { contractActions } from '../actions'

// Reducer
export default createReducer(
  { contracts: [] },
  {
    [contractActions.RECEIVE_CONTRACTS]: (state, action) => ({
      ...state,
      contracts: action.payload.contracts
    })
  }
)

// Selectors

// Shapes
export const contractShape = PropTypes.shape({
  address: PropTypes.string
})
