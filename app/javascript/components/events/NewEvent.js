import React from 'react';
import Pikaday from 'pikaday';
import 'pikaday/css/pikaday.css';
import { formatDate, isEmptyObject, validateEvent } from '../../helpers/helpers';

export default class NewEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: null
    }
    this.dateInput = React.createRef();
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  componentDidMount(){
    new Pikaday({
      field: this.dateInput.current,
      onSelect: (date) => {
        const formattedDate = formatDate(date);
        this.dateInput.current.value = formattedDate;
        this.updateEvent('event_date', formattedDate);
      },
    });
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
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.updateEvent(name, value);
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <form className="eventForm" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="event_type">
              <strong>Type:</strong>
              <input type="text" id="event_type" name="event_type" />
            </label>
          </div>
          <div>
            <label htmlFor="event_date">
              <strong>Date:</strong>
              <input
                type="text"
                id="event_date"
                name="event_date"
                ref={this.dateInput}
                autoComplete="off"
              />
            </label>
          </div>
          <div>
            <label htmlFor="title">
              <strong>Title:</strong>
              <textarea cols="30" rows="10" id="title" name="title" />
            </label>
          </div>
          <div>
            <label htmlFor="speaker">
              <strong>Speakers:</strong>
              <input type="text" id="speaker" name="speaker" />
            </label>
          </div>
          <div>
            <label htmlFor="host">
              <strong>Hosts:</strong>
              <input type="text" id="host" name="host" />
            </label>
          </div>
          <div>
            <label htmlFor="published">
              <strong>Publish:</strong>
              <input type="checkbox" id="published" name="published" />
            </label>
          </div>
          <div className="form-actions">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  }
}
