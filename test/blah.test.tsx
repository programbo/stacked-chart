import React from 'react'
import * as ReactDOM from 'react-dom'
import Chart from '../src'
// import { Default as StackedChart } from '../stories/StackedChart.stories'

describe('StackedChart', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Chart showLabels showValues>
        <Chart.Bar label="Public Patient">
          <Chart.BarSegment
            label="19% of Public Patients went to market"
            value={19}
            color="seafoam"
          />
          <Chart.BarSegment
            label="81% of Public Patients went to market"
            value={81}
            color="teal"
          />
        </Chart.Bar>
        <Chart.Bar label="Private Patient">
          <Chart.BarSegment
            label="27% of Private Patients had roast beef"
            value={27}
            color="seafoam"
          />
          <Chart.BarSegment
            label="31% of Private Patients had roast beef"
            value={31}
            color="teal"
          />
        </Chart.Bar>
      </Chart>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
