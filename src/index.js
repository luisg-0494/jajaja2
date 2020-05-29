import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.PintaloconelSpray = this.PintaloconelSpray.bind(this);
  }

  PintaloconelSpray() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button class= {this.state.isToggleOn ? "btn btn-primary" : "btn btn-success"} 
      onClick={this.PintaloconelSpray}>
      Boton
      </button>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Toggle />, rootElement);