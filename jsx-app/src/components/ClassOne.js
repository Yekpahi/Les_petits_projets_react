import { Component } from "react";

class ClassOne extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleon : false };
        this.handleClick = this.handleClick.bind(this)
      }

handleClick() {
  this.setState(prevState => ({
    isToggleon: !prevState.isToggleon
  }));
}

  render() {
    return (
      <div>
      <button onClick={this.handleClick}>
        {this.state.isToggleon ? "On" : "Off"}
      </button>
      </div>
    );
  }
}

export default ClassOne;
