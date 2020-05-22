import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import './style.scss'

import PinchToZoom from 'PinchToZoom/index.tsx'
import contentImage from 'demo/img/original.jpg'

class App extends Component {
  render() {
    return (
      <div>
          <h1>React Pinch and Zoom</h1>
        <PinchToZoom className="w3-half">
          <img src={contentImage} />
        </PinchToZoom>
      </div>
    )
  }
}

App.propTypes = {}

App.defaultProps = {}

export default hot(module)(App)
