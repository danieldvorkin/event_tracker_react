import React, { Component } from 'react';

export default class TextArea extends Component {
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
          <textarea 
            cols={this.props.cols || "30"} 
            rows={this.props.rows || "10"} 
            id={this.props.id} 
            name={this.props.id} 
            onChange={this.handleChange} /> 
        </label>
      </div>
    )
  }
}