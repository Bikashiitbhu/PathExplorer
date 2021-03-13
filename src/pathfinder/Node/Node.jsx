import React, {Component} from 'react';

import './Node.css';

export default class Node extends Component {
  render() {
    const {
      col,
      isFinish,
      isStart,
      isWall,
      row,
    } = this.props;//this receives that destructured values from map as props
    
    
    const extraClassName = isFinish
      ? 'node-finish'
      : isStart
      ? 'node-start'
      : isWall
      ? 'node-wall'
      : '';

    return (
      <td
        id={`node-${row}-${col}`}
        className={`node ${extraClassName}`}>
        </td>
    );
  }
}