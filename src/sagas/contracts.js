import unit from 'ethjs-unit'

import { takeLatest, call, put } from 'redux-saga/effects'
import { web3 as eth, kleros } from '../bootstrap/kleros'
import { sha3256 } from 'js-sha3'
import { receiveContract } from '../actions/contracts'

/**
 * Creates a new contract.
 */
function* createContract({ payload: { contract } }) {
  const accounts = yield call(eth.getAccounts)

  let newContract = null
  if (accounts[0])
    try {
      newContract = yield call(
        kleros.arbitrableContract.deployContract,
        accounts[0].toLowerCase(),
        unit.toWei(contract.payment, 'ether'),
        sha3256(contract.description),
        process.env.ARBITRATOR_ADDRESS,
        contract.timeout,
        contract.partyB.toLowerCase(),
        contract.arbitratorExtraData,
        contract.email,
        contract.description
      )
    } catch (err) {
      console.log(err)
    }

  yield put(receiveContract(newContract))
}

/**
 * The root of the contracts saga.
 */
export default function* contractsSaga() {
  yield takeLatest('CREATE_CONTRACT', createContract)
}
