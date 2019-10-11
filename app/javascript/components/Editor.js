import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import EventList from './EventList';
import PropTypes from 'prop-types';
import PropsRoute from './PropsRoute';
import Event from './Event';
import  { Switch } from 'react-router-dom';
import EventForm from './EventForm';

export default class Editor extends Component {
  constructor(props) {
    super(props);

    // instantiate state with no events
    this.state = {
      events: null,
    };
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
        <Header />
        <div className="grid">
          <EventList events={events} activeId={Number(eventId)} />
          <Switch>
            <PropsRoute path="/events/new" component={EventForm} />
            <PropsRoute path="/events/:id" component={Event} event={event} />
          </Switch>
        </div>
      </>
    );
  }
}

Editor.propTypes = { match: PropTypes.shape() };
Editor.defaultProps = { match: undefined };
