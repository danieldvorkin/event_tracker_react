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
    console.log('submitted');
  }

  render() {
    return (
      <div className="eventContainer">
        <h2>{`${this.state.event_date} - ${this.state.event_type}`}</h2>
        <Link to={`/events/${this.props.event.id}`}>go back</Link>
        <ul>
          <li><input type="text" id="event_type" value={this.state.event_type} onChange={this.updateField} /></li>
          <li><input type="text" id="event_date" value={this.state.event_date} onChange={this.updateField} /></li>
          <li><input type="text" id="title" value={this.state.title} onChange={this.updateField} /></li>
          <li><input type="text" id="speaker" value={this.state.speaker} onChange={this.updateField} /></li>
          <li><input type="text" id="host" value={this.state.host} onChange={this.updateField} /></li>
          <li><input type="text" id="published" value={this.state.published ? 'yes' : 'no'} onChange={this.updateField} /></li>
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
