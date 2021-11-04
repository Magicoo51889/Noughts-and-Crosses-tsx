import * as React from 'react';

import { Square } from "./Square"

export interface BoardProps { squares: number[], onClick: (i: number) => void }

export const EMPTY: number = 0;
export const FILLED_X: number = 1;
export const FILLED_O: number = 2;

export class Board extends React.Component<BoardProps, {}> {
  valueToString(value:number) {
    return value == FILLED_X ? 'X': (value == FILLED_O ? '0': '')
  }  

  renderSquare(i:number) {
    return <Square value={this.valueToString(this.props.squares[i])} onClick={() => this.props.onClick(i)} />;
  }

  render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
  }
}