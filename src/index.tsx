import React, { FC, HTMLAttributes, ReactChild } from 'react'

export interface StackedChartProps extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom StackedChart component. Neat!
 */
export const StackedChart: FC<StackedChartProps> = ({ children }) => {
  return <div>{children || `the snozzberries taste like snozzberries`}</div>
}