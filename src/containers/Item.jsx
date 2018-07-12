import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Row, Col } from 'reactstrap';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const backgroundStyle = {
      backgroundImage: `url(${this.props.classItem.eventGroup.imageUrl})`
    };
    return (
      <div className="item-container">

        <div style={backgroundStyle} className="item-box image-box">
          <div>{this.props.classItem.name}</div>
        </div>

        <div className="item-box info-box">
          <Container>
            <Row>
              <Col xs="6">
                <Row>
                  <Col xs="12">
                    {this.props.classItem.startDateTime}
                  </Col>
                  {
                    this.props.classItem.bookingWindowStartHours &&
                    <Col xs="12">{this.props.classItem.bookingWindowStartHours}</Col>
                  }
                </Row>
              </Col>
              <Col xs="6">
                {this.props.classItem.eventGroup.name}
              </Col>
            </Row>
            <Row>
              <Col xs="6">
                {this.props.classItem.location.city}
              </Col>
              <Col xs="6">
                {this.props.classItem.trainers.map(trainer => <p
                  key={trainer.id}>{trainer.name}</p>)}
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <div className="description-box">{this.props.classItem.descriptions.map(description => description.text)}</div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="item-box booking-box">
          <Button color="warning">Zur Buchung</Button>
          <div className="description-box">{this.props.classItem.endDateTime}</div>
        </div>

      </div>
    )
  }
}

Item.propTypes = {
  classItem: PropTypes.objectOf(PropTypes.any),
};