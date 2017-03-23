import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
  }

  getLabel() {
    let arr = this.props.label.split('-');
    let newArr = arr.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    let label = newArr.join(' ');
    return label;
  }

  getName() {
    let arr = this.props.label.split('-');
    arr.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    arr[0] = arr[0].charAt(0).toLowerCase() + arr[0].slice(1);
    let name = arr.join('');
    return name
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.label}>{this.getLabel()}:</label>
        <input
          onChange={this.props.handleChange} 
          type="text"
          id={this.props.label}
          name={this.getName()}
          value={this.props.value}/>
      </div>
    )
  }
}

export default Form;
