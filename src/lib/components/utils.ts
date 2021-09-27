export interface CoverConfig {
  coverTime: number
  uncoverTime: number
  backgroundColor?: string
}

export const noop = () => undefined

const DEFAULT_COVER_TIME = 1100
const DEFAULT_COVER_END = 2000

export const defaultConfig: CoverConfig = {
  coverTime: DEFAULT_COVER_TIME,
  uncoverTime: DEFAULT_COVER_END
}

export const TOP_TRANSITION_COEFFICIENT = 1375
export const BOTTOM_TRANSITION_COEFFICIENT = 1800
