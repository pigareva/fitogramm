import React from 'react';
import PropTypes from 'prop-types'
import * as moment from 'moment';
import 'moment/locale/de';
import { Button, Container, Row, Col } from 'reactstrap';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.createMarkup = this.createMarkup.bind(this);
  }

  createMarkup() {
    return { __html: this.props.classItem.descriptions.map(description => description.text) };
  }

  render() {
    const backgroundStyle = {
      backgroundImage: `url(${this.props.classItem.eventGroup.imageUrl})`,
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
                    {moment(this.props.classItem.startDateTime).format("dd DD MMM YYYY")}
                  </Col>
                  {
                    this.props.classItem.bookingWindowStartHours &&
                    <Col xs="12">{moment(this.props.classItem.bookingWindowStartHours).format("HH mm")}</Col>
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
            <div className="description-box" dangerouslySetInnerHTML={this.createMarkup()}>
            </div>
          </Container>
        </div>

        <div className="item-box booking-box">
          <Button color="warning">Zur Buchung</Button>
          <div className="description-box">
            <p>Buchung bis:</p>
            <p>{moment(this.props.classItem.endDateTime).format("dd DD MMM YYYY")}</p>
          </div>
        </div>

      </div>
    )
  }
}

Item.propTypes = {
  classItem: PropTypes.objectOf(PropTypes.any),
};