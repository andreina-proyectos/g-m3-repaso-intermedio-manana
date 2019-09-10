import React from 'react';
import './App.scss';
import clubs from './clubs';
import ClubList from './components/ClubList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clubs: clubs
    }
  }
  render() {
    return (
      <div className="app">
        <h1 className="app__title">Lista de clubes</h1>
        <ClubList clubs={this.state.clubs} />
      </div>
    );
  }
}

export default App;
