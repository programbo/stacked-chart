import React from 'react'
import { Meta, Story } from '@storybook/react'
import { StackedChart as Chart, StackedChartProps } from '../src'
import {
  Container,
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
  useTheme,
} from '@mui/material'
// import { styled, createTheme, ThemeProvider } from '@mui/system'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color']
    }
  }

  interface Palette {
    neutral: Palette['primary']
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary']
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#009fae',
      light: '#e6f5f7',
    },
    secondary: {
      main: '#003959',
    },
    neutral: {
      main: '#ccc',
      light: '#dedede',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
})

const meta: Meta = {
  title: 'Welcome',
  component: Chart,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
  decorators: [
    (Story) => (
      <>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth="sm">
            <Story />
          </Container>
        </ThemeProvider>
      </>
    ),
  ],
}

export default meta

const SingleSegment: Story<StackedChartProps> = (args) => {
  const { palette } = useTheme()
  return (
    <Chart showLabels showValues>
      <Chart.Bar label="Albany Hospital">
        <Chart.BarSegment
          label="Albany Hospital misplaced 52 patients"
          value={52}
          color={palette.primary.main}
        />
      </Chart.Bar>
      <Chart.Bar label="Armidale-Kelmscott Memorial Hospital">
        <Chart.BarSegment
          label="Armidale-Kelmscott Memorial Hospital misplaced 62 patients"
          value={62}
          color={palette.primary.main}
        />
      </Chart.Bar>
      <Chart.Bar label="Fremantle Hospital">
        <Chart.BarSegment
          label="Fremantle Hospital misplaced 73 patients"
          value={73}
          color={palette.primary.main}
        />
      </Chart.Bar>
      <Chart.Bar label="Joondalup Health Campus">
        <Chart.BarSegment
          label="Joondalup Health Campus misplaced 32 patients"
          value={32}
          color={palette.primary.main}
        />
      </Chart.Bar>
      <Chart.Bar label="Princess Margaret Hospital">
        <Chart.BarSegment
          label="Princess Margaret Hospital misplaced 69 patients"
          value={69}
          color={palette.primary.main}
        />
      </Chart.Bar>
      <Chart.Bar label="Rockingham Hospital">
        <Chart.BarSegment
          label="Rockingham Hospital misplaced 88 patients"
          value={88}
          color={palette.primary.main}
        />
      </Chart.Bar>
      <Chart.Bar label="Royal Perth Hospital">
        <Chart.BarSegment
          label="Royal Perth Hospital misplaced 68 patients"
          value={68}
          color={palette.primary.main}
        />
      </Chart.Bar>
    </Chart>
  )
}

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = SingleSegment.bind({})

Default.args = {}

const MultiSegment: Story<StackedChartProps> = (args) => {
  const { palette } = useTheme()
  return (
    <Chart showLabels showValues>
      <Chart.Bar label="Public Patient">
        <Chart.BarSegment
          label="19% of Public Patients went to market"
          value={19}
          color={palette.primary.light}
        />
        <Chart.BarSegment
          label="81% of Public Patients went to market"
          value={81}
          color={palette.primary.main}
        />
      </Chart.Bar>
      <Chart.Bar label="Private Patient">
        <Chart.BarSegment
          label="27% of Private Patients had roast beef"
          value={27}
          color={palette.primary.light}
        />
        <Chart.BarSegment
          label="31% of Private Patients had roast beef"
          value={31}
          color={palette.primary.main}
        />
      </Chart.Bar>
    </Chart>
  )
}

export const MultipleSegments = MultiSegment.bind({})

MultipleSegments.args = {}

const MultiSegmentWithBenchmark: Story<StackedChartProps> = (args) => {
  const { palette } = useTheme()
  return (
    <Chart
      showLabels
      headings={[
        <Chart.Heading
          key="mbs"
          value={100}
          label="Medicare Benefits Schedule (MBS) fee"
        />,
        <Chart.Heading
          key="gap"
          value={25}
          label="Medical Gap"
          showBenchmark
        />,
      ]}
      caption={
        <table>
          <thead>
            <tr>
              <th colSpan={2}>Medical Benefits Schedule (MBS) fee</th>
              <th colSpan={2}>Medical Gap</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fully covered</td>
              <td>75% of MBS fee paid by Medicare</td>
              <td>25% of MBS fee paid by HBF</td>
              <td colSpan={2}>25% of Medical Gap paid by HBF</td>
            </tr>
            <tr>
              <td>Known gap</td>
              <td>75% of MBS fee paid by Medicare</td>
              <td>25% of MBS fee paid by HBF</td>
              <td>12.5% of Medical Gap paid by HBF</td>
              <td>You pay 12.5% of Medical Gap</td>
            </tr>
            <tr>
              <td>No agreement / Opt out</td>
              <td>75% of MBS fee paid by Medicare</td>
              <td>25% of MBS fee paid by HBF</td>
              <td colSpan={2}>You pay 25% of Medical Gap</td>
            </tr>
          </tbody>
        </table>
      }
    >
      <Chart.Bar label="Total medical cost">
        <Chart.BarSegment
          label="Total medical cost"
          value={125}
          color={palette.neutral.light}
        />
      </Chart.Bar>
      <Chart.Bar label="Fully covered">
        <Chart.BarSegment
          label="75% paid by Medicare"
          value={75}
          color={palette.primary.light}
        />
        <Chart.BarSegment
          label="25% paid by Medicare"
          value={25}
          color={palette.primary.main}
        />
        <Chart.BarSegment
          label="100% of medical gap paid by HBF"
          value={25}
          color={palette.secondary.main}
        />
      </Chart.Bar>
      <Chart.Bar label="Known gap">
        <Chart.BarSegment
          label="75% paid by Medicare"
          value={75}
          color={palette.primary.light}
        />
        <Chart.BarSegment
          label="25% paid by Medicare"
          value={25}
          color={palette.primary.main}
        />
        <Chart.BarSegment
          label="50% of medical gap paid by HBF"
          value={12.5}
          color={palette.secondary.main}
        />
        <Chart.BarSegment
          label="You pay 50% of medical gap"
          value={12.5}
          color={palette.neutral.light}
        />
      </Chart.Bar>
      <Chart.Bar label="No agreement / Opt out">
        <Chart.BarSegment
          label="75% paid by Medicare"
          value={75}
          color={palette.primary.light}
        />
        <Chart.BarSegment
          label="25% paid by Medicare"
          value={25}
          color={palette.primary.main}
        />
        <Chart.BarSegment
          label="You pay 100% of medical gap"
          value={25}
          color={palette.neutral.light}
        />
      </Chart.Bar>
    </Chart>
  )
}

export const MultipleSegmentsWithBenchmark = MultiSegmentWithBenchmark.bind({})

MultipleSegmentsWithBenchmark.args = {}
