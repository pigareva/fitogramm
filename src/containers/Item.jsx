import React from 'react';
import PropTypes from 'prop-types'
import * as moment from 'moment';
import 'moment/locale/de';
import { ClockIcon, LocationIcon, InfoIcon, PersonIcon } from 'react-octicons';
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
                    <div className="icon-box">
                      <ClockIcon/>
                    </div>
                    <div className="text-box">
                      {moment(this.props.classItem.startDateTime).format("dd DD MMM YYYY")}
                    </div>
                  </Col>
                  {
                    this.props.classItem.bookingWindowStartHours &&
                    <Col xs="12">{moment(this.props.classItem.bookingWindowStartHours).format("HH mm")}</Col>
                  }
                </Row>
              </Col>
              <Col xs="6">
                <div className="icon-box">
                  <InfoIcon/>
                </div>
                <div className="text-box">
                  {this.props.classItem.eventGroup.name}
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="6">
                <div className="icon-box">
                  <LocationIcon/>
                </div>
                <div className="text-box">
                  {this.props.classItem.location.city}
                </div>
              </Col>
              <Col xs="6">
                <div className="icon-box">
                  <PersonIcon/>
                </div>
                <div className="text-box">
                  {this.props.classItem.trainers.map(trainer => trainer.name)}
                </div>
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