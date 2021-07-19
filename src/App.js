import React, {Component} from "react";
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    isLoading : true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading : false});
    }, 5000);
  }
 
  render() {
    return (
    <div>
      <h1>{this.state.isLoading ? "Loading..." : "I'm ready"}</h1>
    </div>
    );
  };
}

export default App;
