import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props){
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event){
    const { onChange } = this.props;
    onChange(event);
  }
  
  render (){
    const  { onChange } = this.props;
    
    return (
      <div>
        <label htmlFor={this.props.id}>
          <strong>{this.props.label}:</strong>
          <input 
            id={this.props.id} 
            value={this.props.value}
            type={this.props.type || "text"} 
            name={this.props.id} onChange={this.handleChange} />
        </label>
      </div>
    )
  }
}