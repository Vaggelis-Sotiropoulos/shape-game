import React from 'react'
import ReactDOM from 'react-dom'
import { ShapeGameMain } from './Components/ShapeGameMain'

/** Potential polyfills
import 'core-js/features/array/flat-map'
import 'core-js/features/map'
import 'core-js/features/promise'
import 'core-js/features/set'
import 'raf/polyfill'
import 'whatwg-fetch'
*/

ReactDOM.render(
    <ShapeGameMain/>,
    document.getElementById('app-root'),
)
