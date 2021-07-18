import React, {Component} from "react";
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    num : 0
  };

  //plus() { this.setState({num:1})} not working
  plus = () =>{
    this.setState(current => ({num : current.num +1}));
  };

  minus = () => {
    this.setState(current => ({num : current.num -1}));
  };

  render() {
    return (
    <div>
      <h1>Number is {this.state.num}</h1>
      <button onClick={this.plus}>Plus</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  };
}

export default App;
