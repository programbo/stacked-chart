import { css, styled } from '@mui/material'
import React, { FC, ReactComponentElement } from 'react'
import { useChart } from './ChartContext'
import type { SegmentProps } from './Segment'

export interface BarProps {
  label?: string
  children:
    | ReactComponentElement<FC<SegmentProps>>
    | ReactComponentElement<FC<SegmentProps>>[]
}

export const Bar: React.FC<BarProps> = ({ children, label }) => {
  const showLabel = Boolean(label)
  const { showLabels } = useChart()
  const shouldShowLabel = showLabel && showLabels

  return (
    <StyledBarWrapper className="flex flex-col items-start space-y-1">
      {shouldShowLabel && <StyledLabel>{label}</StyledLabel>}
      <StyledBar>{children}</StyledBar>
    </StyledBarWrapper>
  )
}

const StyledBarWrapper = styled('div')(
  ({ theme: { spacing } }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & + & {
      margin-top: ${spacing(2.5)};
    }
  `
)

const StyledLabel = styled('h4')(
  ({ theme: { palette, spacing } }) => css`
    font-size: 0.875rem;
    font-weight: normal;
    line-height: 1.5rem;
    margin: ${spacing(0, 0, 0.5)};
    color: ${palette.secondary.main};
  `
)

const StyledBar = styled('div')`
  display: flex;
  width: 100%;
`
