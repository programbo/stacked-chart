import { css, styled } from '@mui/material'
import React from 'react'

export interface HeadingProps {
  className?: string
  label: string
  value: number
  showBenchmark?: boolean
}

export const Heading: React.FC<HeadingProps> = ({
  className,
  label,
  value,
  showBenchmark,
}) => {
  return (
    <StyledHeading className={className} style={{ width: `${value}%` }}>
      {showBenchmark && <StyledBenchmark />}
      <StyledLabel>{label}</StyledLabel>
    </StyledHeading>
  )
}

export const StyledHeading = styled('div')`
  display: flex;
  height: 100%;
  z-index: 0;
`

export const StyledBenchmark = styled('div')(
  ({ theme: { palette } }) => css`
    position: absolute;
    top: 0;
    bottom: 0;
    border-left: 1px dashed ${palette.secondary.main};
  `
)
StyledBenchmark.defaultProps = {
  className: 'benchmark',
}

export const StyledLabel = styled('h3')(
  ({ theme: { spacing } }) => css`
    font-size: 0.875rem;
    line-height: 1.5rem;
    margin: 0;
    padding-right: ${spacing(1)};
    text-align: center;
    color: inherit;

    &:first-of-type {
      text-align: left;
    }

    .benchmark + & {
      padding-left: ${spacing(1)};
    }
  `
)
