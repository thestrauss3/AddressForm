import React, { Component } from 'react';
import Form from '../components/Form';

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "first-name": '',
      "last-name": '',
      "address": '',
      "city": '',
      "state": '',
      "zip-code": '',
      "phone-number": '',
      "email": ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleChange(event) {
    let object = this.state;
    let newObject = {};
    Object.keys(object).forEach(key => {
      if (key === event.target.id) {
        newObject[key] = event.target.value;
      } else {
        newObject[key] = object[key];
      }
    });
    this.setState(newObject);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.addAddress(this.state);
    this.handleClearForm(event);
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      "first-name": '',
      "last-name": '',
      "address": '',
      "city": '',
      "state": '',
      "zip-code": '',
      "phone-number": '',
      "email": ''
    });
  }

  render() {
    let keys = Object.keys(this.state);
    let values = Object.values(this.state);
    let allForms = keys.map((key, index) => {
      return (
        <Form
          key={index}
          handleChange={this.handleChange}
          value={values[index]}
          label={key}
        />
      )
    })
    return (
      <form className="callout" id="shipping-address-form" onSubmit={this.handleFormSubmit}>
        <h1>Shipping Address</h1>
        {allForms}

        <div className="button-group">
          <input type="submit" className="button" value="Submit "/>
          <button className="button" onClick={this.handleClearForm}>Clear</button>
        </div>
      </form>
    )
  }
}

export default FormContainer;
