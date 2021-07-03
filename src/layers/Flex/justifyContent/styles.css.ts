import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = [
  'center',
  'start',
  'end',
  'flexStart',
  'flexEnd',
  'left',
  'right',
  'normal',
  'spaceBetween',
  'spaceAround',
  'spaceEvenly',
  'stretch',
  'safeCenter',
  'unsafeCenter',
]
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, any> = {
  center: 'center',
  start: 'start',
  end: 'end',
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  left: 'left',
  right: 'right',
  normal: 'normal',
  spaceBetween: 'space-between',
  spaceAround: 'space-around',
  spaceEvenly: 'space-evenly',
  stretch: 'stretch',
  safeCenter: 'safe center',
  unsafeCenter: 'unsafe center',
  unset: 'unset',
}

const Styles = styleVariants(map, (value: any) => ({
  justifyContent: value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['flexStart' as Type],
}
