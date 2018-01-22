import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
// import _ from 'lodash'
import Blockies from 'react-blockies'
// import * as contractsDux from '../duxs/contracts'

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
      <Provider store={this.props.store}>
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
                <div>New Contract</div>
              </div>

              <div className="flex-item wide apps grow">
                <Blockies seed="ewfwef" size={10} scale={14} bgColor="#fff" />
              </div>

              <div className="flex-item wide media grow">
                <Blockies
                  seed="Jere[pdemy"
                  size={10}
                  scale={14}
                  bgColor="#fff"
                />
              </div>

              <div className="flex-item wide media">
                <Blockies
                  seed="Jewderemy"
                  size={10}
                  scale={14}
                  bgColor="#fff"
                />
              </div>

              <div className="flex-item wide utility">
                <Blockies
                  seed="Jerwdwdemy"
                  size={10}
                  scale={14}
                  bgColor="#fff"
                />
              </div>

              <div className="flex-item wide media">
                <Blockies
                  seed="Jere[pdemy"
                  size={10}
                  scale={14}
                  bgColor="#fff"
                />
              </div>

              <div className="flex-item wide calendar">
                <Blockies
                  seed="Jere[pdemy"
                  size={10}
                  scale={14}
                  bgColor="#fff"
                />
              </div>

              <div className="flex-item wide games">
                <Blockies
                  seed="Jere[pdemy"
                  size={10}
                  scale={14}
                  bgColor="#fff"
                />
              </div>

              <div className="flex-item wide utility">
                <Blockies
                  seed="Jere[pdemy"
                  size={10}
                  scale={14}
                  bgColor="#fff"
                />
              </div>

              <div className="flex-item wide fun">
                <Blockies
                  seed="Jere[pdemy"
                  size={10}
                  scale={14}
                  bgColor="#fffa7a" // timeout contract
                />
              </div>

              <div className="flex-item wide apps">
                <Blockies
                  seed="Jere[pdemy"
                  size={10}
                  scale={14}
                  bgColor="#fff"
                />
              </div>
            </div>
            <div className="footer">Footer</div>
          </div>
        </div>
      </Provider>
    )
  }
}

export default connect(state => ({}), {
  // fetchContracts: contractsDux.fetchContracts,
})(App)
