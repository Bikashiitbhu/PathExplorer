import React, {Component} from 'react';
import Node from './Node/Node';
import {AStar} from '../algorithms/aStar';

export default class Pathfinder extends Component {
    constructor() {
        super();
        this.state = {
            grid: [],
            START_NODE_ROW: 5,
            FINISH_NODE_ROW: 5,
            START_NODE_COL: 5,
            FINISH_NODE_COL: 15,
            mouseIsPressed: false,
            ROW_COUNT: 25,
            COLUMN_COUNT: 35,
            MOBILE_ROW_COUNT: 10,
            MOBILE_COLUMN_COUNT: 20,
            isRunning: false,
            isStartNode: false,
            isFinishNode: false,
            isWallNode: false, // xxxxxxx
            currRow: 0,
            currCol: 0,
            isDesktopView: true,
        };

    }

    componentDidMount() {
        const Grid=this.getGrid();
        this.setState({grid : Grid});//setState accepts object
    }

    getGrid = (
        rows=this.state.ROW_COUNT, columns=this.state.COLUMN_COUNT,
    ) => {
        const initialGrid=[];
        for(let row=0;row<rows;row++){
            const currRow = [];
            for(let col = 0; col<columns;col++) {
                currRow.push(this.createNode(row,col));
            }
            initialGrid.push(currRow);
        }
        return initialGrid;
    }

    createNode = (row,col) => {
        return {
            row, 
            col,
            isStart:
            row === this.state.START_NODE_ROW && col === this.state.START_NODE_COL,
            isFinish:
            row === this.state.FINISH_NODE_ROW &&
            col === this.state.FINISH_NODE_COL,
            distance: Infinity,
            distanceToFinishNode:
            Math.abs(this.state.FINISH_NODE_ROW - row) +
            Math.abs(this.state.FINISH_NODE_COL - col),
            isVisited: false,
            isWall: false,
            previousNode: null,
            isNode: true,
        };
    };

    render() {
        const {grid, mouseIsPressed} = this.state;
        return (
            <div
            className="grid-container">
                {grid.map((row,rowIdx) => {
                        return (
                            <div>
                            {row.map((node,nodeIdx) => {
                                const {row, isFinish, isStart, isWall, col}=node;
                                return (
                                    <button>fuck</button>
                                );
                            })}
                            </div>
                        );
                    })
                }

            </div>

        );
        
    }


}