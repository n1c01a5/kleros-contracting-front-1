// Actions
export const CREATE_CONTRACT = 'CREATE_CONTRACT'
export const RECEIVE_CONTRACT = 'RECEIVE_CONTRACT'

export const FETCH_CONTRACTS = 'FETCH_CONTRACTS'
export const RECEIVE_CONTRACTS = 'RECEIVE_CONTRACTS'

// Action Creators
export const fetchContracts = () => ({ type: FETCH_CONTRACTS })

export const receiveContracts = contracts => ({
  type: RECEIVE_CONTRACTS,
  payload: { contracts }
})

export const receiveContract = contract => ({
  type: RECEIVE_CONTRACT,
  payload: { contract }
})

export const createContract = values => ({
  type: CREATE_CONTRACT,
  payload: values
})
