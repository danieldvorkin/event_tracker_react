import React, { Component } from 'react';
import Pikaday from 'pikaday';
import 'pikaday/css/pikaday.css';
import { formatDate, isEmptyObject, validateEvent } from '../../helpers/helpers';

export default class Datepicker extends Component {
  constructor(props){
    super(props);
    
    this.dateInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount(){
    new Pikaday({
      field: this.dateInput.current,
      onSelect: (date) => {
        const formattedDate = formatDate(date);
        const { updateEvent } = this.props;
        this.dateInput.current.value = formattedDate;
        updateEvent(this.props.id, formattedDate);
      },
    });
  }
  
  handleChange(event){
    const { onChange } = this.props;
    onChange(event);
  }
  
  render(){
    return (
      <div>
        <label htmlFor={this.props.id}>
          <strong>{this.props.label}:</strong>
          <input
            type="text"
            id={this.props.id}
            name={this.props.id}
            ref={this.dateInput}
            autoComplete="off"
            value={this.props.value}
            onChange={this.handleChange}
          />
        </label>
      </div>
    )
  }
}