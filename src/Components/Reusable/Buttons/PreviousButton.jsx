import React, {Component} from 'react'
import './float-buttons.css'


import {Button} from 'reactstrap'

class PreviousButton extends Component {
  constructor(props){
    super(props);

    this.state = {};
  };

  render() {
    return (
      <div>
        <Button color="white" className="rounded-circle float-buttons">
          <i className="fas fa-chevron-left"></i>
        </Button>
      </div>
    )
  }
}

export default PreviousButton
