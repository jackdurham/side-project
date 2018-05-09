// const React = require('react');
import React    from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    // return React.createElement('h1', {}, 'My first react app');

    return(
      <div>
        <h1>I love JSX</h1>
        <h2>I also love react... because of JSX</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
