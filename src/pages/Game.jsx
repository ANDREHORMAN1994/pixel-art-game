import React, { Component } from 'react'
import PixelLine from '../components/PixelLine';
import ColorPalette from '../components/ColorPalette';

class Game extends Component {
  state = {
    boardSize: ['white', 'white', 'white', 'white', 'white'],
    brushColor: 'black',
  }

  changeBrushColor = (newColor) => {
    this.setState({
      brushColor: newColor,
    })
  }

  render() {
    const { boardSize, brushColor } = this.state;
    return (
      <div>
        <ColorPalette changeBrushColor={this.changeBrushColor} />

        {
          boardSize.map((_, index) => (
            <PixelLine
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

export default Game;
