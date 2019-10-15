import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

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
  
  validateEvent(event) {
    const errors = {};

    if (event.event_type === '') {
      errors.event_type = 'You must enter an event type';
    }

    if (event.event_date === '') {
      errors.event_date = 'You must enter a valid date';
    }

    if (event.title === '') {
      errors.title = 'You must enter a title';
    }

    if (event.speaker === '') {
      errors.speaker = 'You must enter at least one speaker';
    }

    if (event.host === '') {
      errors.host = 'You must enter at least one host';
    }

    console.log(event);
    return errors;
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
          {list}
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
