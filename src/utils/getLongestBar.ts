import { arrayOf } from './arrayOf'
import { getSumOfSegmentValues } from './getSumOfSegmentValues'
import type { StackedChartProps } from '../StackedChart'

type Bars = StackedChartProps['children']

export const getLongestBar = (bars: Bars) =>
  arrayOf(bars).reduce(
    (acc, { props: { children } }) =>
      Math.max(acc, getSumOfSegmentValues(children)),
    0
  )
