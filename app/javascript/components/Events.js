import React, { Component } from 'react';
import  { Switch } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import PropsRoute from './PropsRoute';

import EventList from './events/EventList';
import Event from './events/Event';
import NewEvent from './events/NewEvent';
import EditEvent from './events/EditEvent';

export default class Events extends Component {
  constructor(props) {
    super(props);
    // instantiate state with no events
    this.state = {
      events: null
    };
    // event binding
    this.addEvent = this.addEvent.bind(this);
  }

  // once component is mounted
  componentDidMount() {
    // ping the server for the events.json
    // and set this.state.events to response.data
    axios
      .get('/api/events.json')
      .then(response => this.setState({ events: response.data }))
      .catch((error) => {
        console.log(error);
      });
  }
  
  addEvent(newEvent) {
    axios
      .post('/api/events.json', newEvent)
      .then((response) => {
        // store response data in const
        const savedEvent = response.data;
        // set the state of the events object
        // [prevState, to new Saved Event]
        this.setState(prevState => ({
          events: [...prevState.events, savedEvent],
        }));
        // set the browserhistory to the props
        const { history } = this.props;
        // store the event in the browser history
        history.push(`/events/${savedEvent.id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    // grab events from this.state and set const var
    const { events } = this.state;
    if (events === null) return null;
    const { match } = this.props;
    // get the event id that was requested through the router (Link)
    const eventId = match.params.id;
    //iterate over the events and select the obj with the same ID
    const event = events.find(e => e.id === Number(eventId));

    return (
      <>
        <div className="grid">
          <EventList events={events} activeId={Number(eventId)} />
          <Switch>
            <PropsRoute path="/events/:id/edit" component={EditEvent} title="Edit Event" event={event} />
            <PropsRoute path="/events/new" component={NewEvent} title="New Event" onSubmit={this.addEvent} />
            <PropsRoute path="/events/:id" component={Event} event={event} />
          </Switch>
        </div>
      </>
    );
  }
}

Events.propTypes = { match: PropTypes.shape() };
Events.defaultProps = { match: undefined };
