import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import Moment from 'moment-timezone';
// shared components imports
import Datepicker from '../shared/Datepicker';
import Input from '../shared/Input';
import TextArea from '../shared/TextArea';
import { formatDate, isEmptyObject, validateEvent } from '../../helpers/helpers';


export default class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event_type: this.props.event.event_type,
      event_date: this.props.event.event_date,
      title: this.props.event.title,
      speaker: this.props.event.speaker,
      host: this.props.event.host,
      published: this.props.event.published
    }

    this.updateField = this.updateField.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  updateField(){
    this.setState({[event.target.id]: event.target.value});
  }
  
  updateDateField(name, value){
    this.setState({[name]: value})
  }

  handleUpdate(e) {
    e.preventDefault();
    
    const { event } = this.state;
    const errors = this.validateEvent(event);
    
    if (!this.isEmptyObject(errors)) {
      this.setState({ errors });
    } else {
      console.log(event);
    }
  }
  
  

  render() {
    let fields = ["event_type", "event_date", "title", "speaker", "host", "published"];
    const list = fields.map((field, index) => {
      return <li><input type="text" id={field} value={this.state[field]} onChange={this.updateField}/></li>
    });
    
    return (
      <div className="eventContainer">
        <h2>{`${this.state.event_date} - ${this.state.event_type}`}</h2>
        <ul>
          <li>
            <Input id="event_type" label="Event Type" value={this.state.event_type} onChange={this.updateField} />
            <Datepicker id="event_date" label="Event Date" value={this.state.event_date} onChange={this.updateField} updateEvent={this.updateDateField}/>
            <Input id="title" label="Title" value={this.state.title} onChange={this.updateField} />
          </li>
        </ul>
        <button type="submit" onClick={this.handleUpdate}>Update</button>
      </div>
    );
  }
}

Event.propTypes = {
  event: PropTypes.shape(),
};

Event.defaultProps = {
  event: undefined,
};
