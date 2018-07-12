import React from 'react';
import PropTypes from 'prop-types';
import { Media, Button } from 'reactstrap';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Media className="item-box">
        <Media left href="#">
          <div>{this.props.classItem.name}</div>
          <Media object data-src="holder.js/64x64" alt="Generic placeholder image"/>
        </Media>
        <Media body>
          <div className="info-box">
            <div className="time-box">
              <p>{this.props.classItem.startDateTime}</p>
              {
                this.props.classItem.bookingWindowStartHours &&
                <p>{this.props.classItem.bookingWindowStartHours}</p>
              }
            </div>
            <div className="name-box">{this.props.classItem.name}</div>
            <div className="location-box">{this.props.classItem.location.city}</div>
            <div className="trainer-box">{this.props.classItem.trainers.map(trainer => <p key={trainer.id}>{trainer.name}</p>)}</div>
            <div className="description-box">{this.props.classItem.descriptions.map(description => <p key={description.id}>{description.text}</p>)}</div>
          </div>
          <div className="info-box">
            <Button color="warning">Zur Buchung</Button>
            <div className="description-box">{this.props.classItem.endDateTime}</div>
          </div>


        </Media>
      </Media>
    )
  }
}

Item.propTypes = {
  classItem: PropTypes.objectOf(PropTypes.any),
};