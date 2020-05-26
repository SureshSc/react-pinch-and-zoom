import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import './style.scss'

import PinchToZoom from 'PinchToZoom/index.tsx'
import contentImage from 'demo/img/original.jpg'

class App extends Component {
  render() {
    return (
      <div style={{height:500}}>
          <h1>React Pinch and Zoom</h1>
        <PinchToZoom >
          <img src={contentImage} />
        </PinchToZoom>
      </div>
    )
  }
}

App.propTypes = {}

App.defaultProps = {}

export default hot(module)(App)
