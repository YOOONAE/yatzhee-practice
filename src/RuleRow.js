import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {

  render() {

    const {score, name, doScore} = this.props;
    const isDisabled = score === undefined;

    return (
      <tr
        className={`RuleRow RuleRow-${isDisabled ? 'activce' : 'disabled'}`}
        onClick={isDisabled ? doScore : null}>
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{score}</td>
      </tr>
    )
  }
}


export default RuleRow;