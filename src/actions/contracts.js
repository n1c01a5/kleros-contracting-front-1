// Actions
const CREATE_CONTRACT = 'CREATE_CONTRACT'
const RECEIVE_CONTRACT = 'RECEIVE_CONTRACT'

export const FETCH_CONTRACTS = 'FETCH_CONTRACTS'
const RECEIVE_CONTRACTS = 'RECEIVE_CONTRACTS'

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

export const createContract = contract => ({
  type: CREATE_CONTRACT,
  payload: { contract }
})
