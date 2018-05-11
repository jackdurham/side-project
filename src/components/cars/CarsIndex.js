import React, { Component } from 'react';
import Axios from 'axios';

class CarsIndex extends Component {
  state = {
    cars: []
  }

  componentDidMount() {
    Axios
      .get('/api/cars')
      .then(res => this.setState({ cars: res.data }))
      .catch(err => console.log(err));
      console.log(res);
  }

  render() {
    return(
      <div>
        <h2>Car Lisitings</h2>
        {this.state.cars.map(car =>
          <div key={car.id}>
            <img src={car.image} />
          </div>
        )}
      </div>
    );
  }
}

export default CarsIndex;
