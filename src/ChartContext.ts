import { createContext } from './utils/createContext'

interface ChartContextProps {
  showLabels: boolean
  showValues: boolean
  limit: number
}

export const [useChart, ChartContext] = createContext<ChartContextProps>()
