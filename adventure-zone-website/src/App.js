import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
            <h1 className="App-title"><b>ADVENTURE ZONE</b></h1>
        </header>
        <div className="App-body">
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}

          <main>
              <div className="Game-list">
                  <p>games</p>
              </div>

              <div className="Friends-list">
                  <p>friends</p>
              </div>
          </main>

        </div>
      </div>
    );
  }
}

export default App;
