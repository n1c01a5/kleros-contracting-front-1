import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import SHA3 from 'crypto-js/sha3'
import { withRouter } from 'react-router-dom'
import TextInput from '../../components/text-input'
import { contractActions } from '../../actions'

let sha3 = value =>
  SHA3(value, {
    outputLength: 256
  }).toString()

class NewContract extends Component {
  state = {}

  componentDidMount() {
    // const { fetchContracts } = this.props
    // fetchContracts()
  }

  render() {
    const { handleSubmit, submitting, error } = this.props
    return (
      <div className="container">
        {console.log(handleSubmit)}
        <form onSubmit={handleSubmit} className="Form-container">
          <Field
            name="payment"
            component={TextInput}
            id="payment"
            className="input-text-contract"
            placeholder="payment"
          />
          <Field
            name="timeout"
            component={TextInput}
            id="timeout"
            className="input-text-contract"
            placeholder="timeout"
          />
          <Field
            name="partyB"
            component={TextInput}
            id="partyB"
            className="input-text-contract"
            placeholder="partyB"
          />
          {error && (
            <div>
              <strong>{error}</strong>
            </div>
          )}
          <button
            type="submit"
            disabled={submitting || error}
            className="submit"
          >
            {submitting && <div>loading...</div>}
            Submit contract
          </button>
        </form>
      </div>
    )
  }
}

const isAddress = address => {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    // check if it has the basic requirements of an address
    return false
  } else if (
    /^(0x)?[0-9a-f]{40}$/.test(address) ||
    /^(0x)?[0-9A-F]{40}$/.test(address)
  ) {
    // If it's all small caps or all all caps, return true
    return true
  } else {
    // Otherwise check each case
    return isChecksumAddress(address)
  }
}

// NOTE copied from web3 v1.0 isAddress. Remove when we upgrade to web3 v1.0
const isChecksumAddress = address => {
  // Check each case
  address = address.replace('0x', '')
  const addressHash = sha3(address.toLowerCase())
  for (let i = 0; i < 40; i++) {
    // the nth letter should be uppercase if the nth digit of casemap is 1
    if (
      (parseInt(addressHash[i], 16) > 7 &&
        address[i].toUpperCase() !== address[i]) ||
      (parseInt(addressHash[i], 16) <= 7 &&
        address[i].toLowerCase() !== address[i])
    ) {
      return false
    }
  }
  return true
}

const validate = values => {
  const errors = {}

  if (!isAddress(values.partyB)) {
    errors.partyB = 'PartyB address invalid'
  }

  return errors
}

const mapStateToProps = state => ({ formContract: state.form.contract })

export default withRouter(
  connect(mapStateToProps, null)(
    // FIXME see https://github.com/epiqueras/kleros-contractor-front/blob/master/src/containers/contracts/index.js
    reduxForm({
      form: 'NEW_CONTRACT',
      validate,
      onSubmit (values, dispatch) {
        dispatch(contractActions.createContract(values))
      }
    })(NewContract)
  )
)
