import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    diceTxt: ['one', 'two', 'three', 'four', 'five', 'six']
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.idx)
  }

  render() {
    return (

      <i
        className={
          `Die fa-solid fa-5x fa-dice-${this.props.diceTxt[this.props.val - 1]}
          ${this.props.locked && "Die-locked"}
          ${this.props.isRolling && "Die-rolling"}
        `}
        onClick={this.handleClick}></i>
    );
  }
}

export default Die;

