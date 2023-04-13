import React, { Component } from 'react'
import './Pixel.css';

export class Pixel extends Component {
  state = {
    color: '',
  }

  componentDidMount() {
    const { color } = this.props;
    this.setState({
      color
    });
  }
  
  fillPixel = () => {
    const { brushColor } = this.props;
    this.setState({
      color: brushColor
    });
  }

  render() {
    const { color } = this.state;
    const { type, changeBrushColor } = this.props;
    return (
      <div
        className='pixel'
        style={{ backgroundColor: color }}
        onClick={ () => type === 'board' ? this.fillPixel() : changeBrushColor(color) }
      />
    )
  }
}

export default Pixel;
