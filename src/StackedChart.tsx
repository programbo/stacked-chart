import { css, styled } from '@mui/material'
import React, { FC, ReactComponentElement, ReactNode } from 'react'
import { Bar, BarProps } from './Bar'
import { ChartContext } from './ChartContext'
import { Heading, HeadingProps } from './Heading'
import { Segment } from './Segment'
import { getLongestBar } from './utils/getLongestBar'
import { srOnly } from './utils/styles'

export interface StackedChartProps {
  className?: string
  showLabels?: boolean
  showValues?: boolean
  caption?: ReactNode
  headings?:
    | ReactComponentElement<FC<HeadingProps>>
    | ReactComponentElement<FC<HeadingProps>>[]
  children:
    | ReactComponentElement<FC<BarProps>>
    | ReactComponentElement<FC<BarProps>>[]
}

export const StackedChart = ({
  className,
  headings,
  caption,
  children,
  showValues = false,
  showLabels = false,
}: StackedChartProps) => {
  return (
    <ChartContext
      value={{
        showLabels: Boolean(showLabels),
        showValues: Boolean(showValues),
        limit: getLongestBar(children) ?? 100,
      }}
    >
      <StyledChart className={className}>
        <StyledSection aria-hidden={Boolean(caption)}>
          <StyledContainer>
            {headings && <StyledHeader>{headings}</StyledHeader>}
            <StyledBarContainer>{children}</StyledBarContainer>
          </StyledContainer>
        </StyledSection>
        {caption && <StyledCaption>{caption}</StyledCaption>}
      </StyledChart>
    </ChartContext>
  )
}

StackedChart.Heading = Heading
StackedChart.Bar = Bar
StackedChart.BarSegment = Segment

export default StackedChart

const StyledChart = styled('figure')`
  width: 100%;
`

const StyledSection = styled('section')`
  width: 100%;
`

const StyledContainer = styled('div')`
  position: relative;
`

const StyledCaption = styled('figcaption')`
  ${srOnly}
`

const StyledHeader = styled('header')`
  display: flex;
  align-items: end;
`

const StyledBarContainer = styled('header')(
  ({ theme: { breakpoints, spacing } }) => css`
    position: relative;
    z-index: 10;
    margin-top: ${spacing(4)};

    ${breakpoints.up('sm')} {
      margin-top: ${spacing(2.5)};
    }
  `
)
