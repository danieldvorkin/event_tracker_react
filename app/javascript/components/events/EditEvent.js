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
