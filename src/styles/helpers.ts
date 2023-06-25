import type { PropertyValue } from '@stitches/react'

type Units =
  | 'ex'
  | 'px'
  | 'rem'
  | 'vw'
  | 'vh'
  | 'vmin'
  | 'vmax'
  | 'dvh'
  | 'cqw'
  | 'cqi'
  | 'cqh'
  | 'cqb'
  | 'cqmin'
  | 'cqmax'

const breakpoints = {
  xs: '23.4375em',
  sm: '36em',
  md: '48em',
  lg: '62em',
  xl: '75em',
  xxl: '87.5em',
} as const

/* 
  * Fluid params (it's an array because regular objects cause TypeScript issues)
  0: min font size
  1: max font size
  2: min viewport width
  3: max viewport width
  4: font unit
  5: viewport unit
*/
export type FluidFontSize = [
  PropertyValue<'fontSize'>,
  PropertyValue<'fontSize'>,
  keyof typeof breakpoints,
  keyof typeof breakpoints,
  Units,
  Units,
]

export type FluidSpaceSize = [
  PropertyValue<'margin'> & '-1',
  PropertyValue<'margin'> & '-1',
  keyof typeof breakpoints,
  keyof typeof breakpoints,
  Units,
  Units,
]

/* 
  Return a CSS `clamp()` calculated with the arguments in `values`
  It accepts both Stitches tokens and unit-less values
*/
export function clamp(values: FluidFontSize | FluidSpaceSize) {
  // '-1' means negative margins
  const factor = values[0] === '-1'

  if (factor) values.splice(0, 1)

  const a = values[0]
  const b = values[1]
  const x = values[2]
    ? parseFloat(breakpoints[values[2]])
    : parseFloat(breakpoints.xs)
  const y = values[3]
    ? parseFloat(breakpoints[values[3]])
    : parseFloat(breakpoints.lg)
  const u = values[4] ? `1${values[4]}` : '1rem'
  const v = values[5] ?? 'vw'

  // Example:
  // `clamp(1rem, 1rem + (10 - 1) * (100vw - 20rem) / (62 - 20), 10rem)`

  const result = `clamp(
    ${a} * ${u},
    ${a} * ${u} + (${b} - ${a}) * (100${v} - ${x} * ${u}) / (${y} - ${x}),
    ${b} * ${u}
  )`

  if (factor) {
    return `calc(-1 * ${result})`
  }

  return result
}
