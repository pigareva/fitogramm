import React from 'react';
import Item from '../containers/Item';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      classes: [],
    };
  }

  componentDidMount() {
    fetch('https://api.fitogram.pro/providers/yogashop/events/public?from=2018%2F01%2F01')
      .then((res) => {
        console.log('res', res);
        return res.json();
      })
      .then(
        (result) => {
          console.log('result', result);
          this.setState({ classes: result });
          return result;
        },
        (error) => {
           // ToDo handle an error
        },
      );
  }

  render() {
    // ToDo error handling
    const body = this.state.classes.map(classItem => <Item classItem={classItem} key={classItem.id}/>);

    return (
      <div className="container">
        <h1>Yogashop</h1>
        <div></div>
        <div className="list-container">
          {body}
        </div>
      </div>
      );
  }
}