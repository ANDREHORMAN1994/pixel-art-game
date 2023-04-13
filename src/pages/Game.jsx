import React, { Component } from 'react'
import Line from '../components/Line'
import PaletteColor from '../components/PaletteColor';

class Game extends Component {
  state = {
    boardSize: [ 'white', 'white', 'white' ],
    brushColor: 'black',
  }

  updateBrushColor = (newColor) => {
    this.setState({
      brushColor: newColor,
    })
  }

  render() {
    const { boardSize, brushColor } = this.state;

    return (
      <div>
        <PaletteColor updateBrushColor={ this.updateBrushColor } />

        {
          boardSize.map((_, index) => (
            <Line
              key={index}
              boardSize={boardSize}
              brushColor={brushColor}
            />
          ))
        }
      </div>
    )
  }
}

export default Game