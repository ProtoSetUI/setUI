import { style } from '@vanilla-extract/css'

export const ClassName = style({
  cursor: 'pointer',
  ':focus': {
    outline: 'none',
  },
})