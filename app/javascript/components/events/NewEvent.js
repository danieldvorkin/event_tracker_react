// Main Imports
import React from 'react';
// shared components imports
import Datepicker from '../shared/Datepicker';
import Input from '../shared/Input';
import TextArea from '../shared/TextArea';
// helper imports
import { formatDate, isEmptyObject, validateEvent } from '../../helpers/helpers';

export default class NewEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: null
    }
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateEvent = this.updateEvent.bind(this);
  }
  
  updateEvent(key, value) {
    this.setState(prevState => ({
      event: {
        ...prevState.event,
        [key]: value,
      },
    }));
  }
  
  handleInputChange(event) {
    const { target } = event;
    console.log(target);
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    
    this.updateEvent(name, value);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const { event } = this.state;
    const { onSubmit } = this.props;

    onSubmit(event);
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <form className="eventForm" onSubmit={this.handleSubmit}>
          <Input id="event_type" label="Event Type" 
            onChange={this.handleInputChange} />
            
          <Datepicker id="event_date" label="Event Date" 
            updateEvent={this.updateEvent}
            onChange={this.handleInputChange} />
            
          <TextArea id="title" label="Title" 
            onChange={this.handleInputChange} />
            
          <Input id="speaker" label="Speakers" 
            onChange={this.handleInputChange} />
            
          <Input id="host" label="Hosts" 
            onChange={this.handleInputChange} />
            
          <Input id="published" label="Published" 
            onChange={this.handleInputChange} type="checkbox" />
          
          <div className="form-actions">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  }
}
