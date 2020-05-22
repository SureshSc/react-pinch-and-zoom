import React from 'react'
import { render } from 'react-dom'

import App from './App'

console.log('[src/demo/script.js] ', document.body.clientWidth) // eslint-disable-line no-console
render(<App />, document.getElementById('app'))

const preventPinchZoom = e => {
  e.preventDefault()
}
document.body.addEventListener('touchstart', preventPinchZoom, {
  passive: false,
})
document.body.addEventListener('touchmove', preventPinchZoom, {
  passive: false,
})
document.body.addEventListener('touchend', preventPinchZoom, { passive: false })
document.body.addEventListener('touchcancel', preventPinchZoom, {
  passive: false,
})
