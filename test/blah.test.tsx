import React from 'react'
import * as ReactDOM from 'react-dom'
import { Default as StackedChart } from '../stories/StackedChart.stories'

describe('StackedChart', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<StackedChart />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
