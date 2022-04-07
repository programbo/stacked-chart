import { css, styled } from '@mui/material'
import React from 'react'
import { useChart } from './ChartContext'
import { roundedFull, roundedLeft, roundedRight } from './utils/styles'

export interface SegmentProps {
  label?: string
  value: number
  color: string
}

export const Segment: React.FC<SegmentProps> = ({ label, value, color }) => {
  const { showValues, limit } = useChart()
  const shouldShowValue = typeof 'number' && showValues

  return (
    <StyledSegment
      title={label}
      style={{ width: `${(value / limit) * 100}%`, backgroundColor: color }}
    >
      {shouldShowValue && <StyledValue>{value}</StyledValue>}
    </StyledSegment>
  )
}

const StyledSegment = styled('div')(
  ({ theme: { spacing } }) => css`
    display: flex;
    justify-content: center;
    height: ${spacing(4)};

    &:first-of-type {
      ${roundedLeft}
      justify-content: start;
    }

    &:last-of-type {
      ${roundedRight}
      justify-content: end;
    }
  `
)

const StyledValue = styled('span')(
  ({ theme: { palette, shadows, spacing } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: ${spacing(0.5)};
    padding: ${spacing(0, 0.25)};
    min-width: ${spacing(3)};
    height: ${spacing(3)};
    box-shadow: ${shadows[1]};
    background-color: ${palette.common.white};
    color: ${palette.primary.main};
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 700;
    ${roundedFull}
  `
)
StyledValue.defaultProps = {
  'aria-hidden': true,
}
