import type { ReactComponentElement, FC } from 'react'
import type { SegmentProps } from '../Segment'
import { arrayOf } from './arrayOf'

type Segments =
  | ReactComponentElement<FC<SegmentProps>>
  | ReactComponentElement<FC<SegmentProps>>[]

export const getSumOfSegmentValues = (segments: Segments) =>
  arrayOf(segments).reduce((acc, { props: { value } }) => acc + value, 0)
