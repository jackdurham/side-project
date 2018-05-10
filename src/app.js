import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import CarsIndex from './components/cars/CarsIndex';

class App extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <header>
            <h1>Famous Movie Cars</h1>
          </header>
          <main>
            <Route exact path="/" component={CarsIndex} />
          </main>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
