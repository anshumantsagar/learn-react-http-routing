import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';

import './App.css';
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <div className='Background'>
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
