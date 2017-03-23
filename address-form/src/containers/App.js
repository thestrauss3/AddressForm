import React, { Component } from 'react';
import FormContainer from './FormContainer';
import AddressList from './AddressList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {addressList: []};

    this.addAddress = this.addAddress.bind(this);
  }

  addAddress(payload) {
    debugger;
    this.setState({ addressList: this.state.addressList.concat(payload)});
  }
  render() {
    return (
      <div className="row">
        <div className="medium-6 medium-offset-3 small-12 columns">
          <FormContainer
            addAddress={this.addAddress}
          />
        </div>
        <div className="medium-6 medium-offset-3 small-12 columns">
          <AddressList
            list={this.state.addressList}
          />
        </div>
      </div>
    );
  }
}

export default App
