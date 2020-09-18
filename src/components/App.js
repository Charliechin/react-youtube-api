import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <h1>App</h1>
        <SearchBar>Searchhhh</SearchBar>
      </div>
    );
  }
}

export default App;