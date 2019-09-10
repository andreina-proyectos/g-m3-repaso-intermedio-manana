import React from 'react';
import './App.scss';
import clubs from './clubs';
import ClubList from './components/ClubList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paquery: 'o',
      clubs: this.setId(clubs)
    };

    this.pacFunction = this.pacFunction.bind(this);
  }

  setId(arr) {
    return arr.map((item, index) => {
      return {...item, id: index}
    })
  }

  pacFunction(event) {
    const value = event.currentTarget.value;
    this.setState({
      paquery: value
    });
  } 

  render() {
    return (
      <div className="app">
        <h1 className="app__title">Lista de clubes</h1>
        <input type="text" onChange={this.pacFunction} />
        <ClubList clubs={this.state.clubs} paquery={this.state.paquery}/>
      </div>
    );
  }
}

export default App;
