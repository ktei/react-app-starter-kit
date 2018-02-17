import React from 'react';
import ReactDOM from 'react-dom';

import './styles/app.css';

const App = () => {
  return (
    <div>
      <div className="ui fixed inverted menu">
        <div className="ui container">
          <a href="#" className="header item">
            My React App
          </a>
          <a href="#" className="item">Home</a>
        </div>
      </div>
      <div className="ui container">
        <h1 className="ui header">Hello World</h1>
        <p>This is a basic fixed menu template using fixed size containers.</p>
        <p>A text container is used for the main container, which is useful for single column layouts</p>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
