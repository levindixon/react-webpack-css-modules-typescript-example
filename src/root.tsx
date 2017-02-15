import * as React from 'react'

import './root.css'

import { App } from './app'


export class Root extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <div className="my-style">
          root text {/* no CSS attached */}
        </div>
        <App />
      </div>
    )
  }
}
