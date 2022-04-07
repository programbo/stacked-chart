import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { StackedChart } from '../.'

const App = () => {
  return (
    <div>
      <StackedChart />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
