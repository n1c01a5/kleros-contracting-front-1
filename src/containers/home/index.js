import React, { Component } from 'react'
import { connect } from 'react-redux'
// import _ from 'lodash'
import Blockies from 'react-blockies'
// import * as contractsDux from '../duxs/contracts'
import { Link } from 'react-router-dom'

import './home.css'

class App extends Component {
  state = {
    addingContract: false,
    loadingContracts: false,
    creatingContract: false
  }

  componentDidMount() {
    // const { fetchContracts } = this.props
    // fetchContracts()
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="flex-container">
            <div className="flex-item wide contract grow">
              <div className="type">Profile</div>
              <Blockies seed="Jeremy" size={10} scale={14} bgColor="#fff" />
              <div className="content">
                <div className="address">{'0x4d010...87f'}</div>
                <div className="balance">0 PNK</div>
                <div className="activate_pnk">Activate</div>
              </div>
            </div>

            <div className="flex-item wide grow newContract">
              <Link to="/new-contract">New Contract</Link>
            </div>
          </div>
          <div className="footer" />
        </div>
      </div>
    )
  }
}

export default connect(state => ({}), {
  // fetchContracts: contractsDux.fetchContracts,
})(App)
