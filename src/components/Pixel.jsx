import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Pixel.css';

class Pixel extends Component {
  state = {
    pixelColor: '',
  };

  componentDidMount() {
    const { color } = this.props;
    this.setState({
      pixelColor: color,
    });
  }

  updatePixelColor = () => {
    const { brushColor } = this.props;
    this.setState({
      pixelColor: brushColor,
    });
  };

  render() {
    const { pixelColor } = this.state;
    const { updateBrushColor, type } = this.props;

    return (
      <div
        className="pixel"
        style={ { backgroundColor: pixelColor } }
        onClick={ () => (type === 'pixelBoard'
          ? this.updatePixelColor()
          : updateBrushColor(pixelColor)) }
      />
    );
  }
}

Pixel.propTypes = {
  color: propTypes.string.isRequired,
  brushColor: propTypes.string.isRequired,
  updateBrushColor: propTypes.func.isRequired,
  type: propTypes.string.isRequired,
};

export default Pixel;
