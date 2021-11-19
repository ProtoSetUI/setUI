import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = ['solid', 'ghost', 'soft', 'text', 'INHERIT']
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

type Value = {
  color: string
  backgroundColor: string
  borderColor: string
  hover: Record<string, string>
  active: Record<string, string>
  focus: Record<string, string | Record<string, string>>
  disabled: Record<string, string>
}

export const map: Record<Type, Value> = {
  solid: {
    color: 'var(--text-color)',
    backgroundColor: 'var(--color)',
    borderColor: 'var(--color)',
    hover: {
      backgroundColor: 'hsl(var(--h) var(--s) calc(var(--l) - 10%) / var(--a))',
      borderColor: 'hsl(var(--h) var(--s) calc(var(--l) - 10%) / var(--a))',
    },
    active: {
      backgroundColor: 'hsl(var(--h) var(--s) calc(var(--l) - 20%) / var(--a))',
      borderColor: 'hsl(var(--h) var(--s) calc(var(--l) - 20%) / var(--a))',
    },
    focus: {
      outlineColor: 'hsl(0 0% 100% / .8)',
      outlineStyle: 'solid',
      backgroundColor: 'hsl(var(--h) var(--s) calc(var(--l) - 20%) / var(--a))',
      borderColor: 'hsl(var(--h) var(--s) calc(var(--l) - 20%) / var(--a))',
    },
    disabled: {
      color: '#A19F9D',
      backgroundColor: '#F3F2F1',
      borderColor: '#F3F2F1',
    },
  },
  ghost: {
    color: 'var(--color)',
    backgroundColor: 'transparent',
    borderColor: 'var(--color)',
    hover: {
      color: 'hsl(var(--h) var(--s) calc(var(--l) - 10%) / var(--a))',
      borderColor: 'hsl(var(--h) var(--s) calc(var(--l) - 10%) / var(--a))',
    },
    active: {
      color: 'hsl(var(--h) var(--s) calc(var(--l) - 20%) / var(--a))',
      borderColor: 'hsl(var(--h) var(--s) calc(var(--l) - 20%) / var(--a))',
    },
    focus: {
      outlineColor: 'hsl(var(--h) var(--s) calc(var(--l) - 20%) / .5)',
      outlineStyle: 'solid',
      color: 'hsl(var(--h) var(--s) calc(var(--l) - 20%) / var(--a))',
      borderColor: 'hsl(var(--h) var(--s) calc(var(--l) - 20%) / var(--a))',
    },
    disabled: {
      color: '#A19F9D',
      borderColor: '#F3F2F1',
    },
  },
  soft: {
    color: 'var(--color)',
    backgroundColor: 'hsl(var(--h) var(--s) 90% / var(--a))',
    borderColor: 'hsl(var(--h) var(--s) 90% / var(--a))',
    hover: {
      backgroundColor: 'hsl(var(--h) var(--s) 80% / var(--a))',
      borderColor: 'hsl(var(--h) var(--s) 80% / var(--a))',
    },
    active: {
      backgroundColor: 'hsl(var(--h) var(--s) 70% / var(--a))',
      borderColor: 'hsl(var(--h) var(--s) 70% / var(--a))',
    },
    focus: {
      outlineColor: 'hsl(0 0% 100% / .5)',
      outlineStyle: 'solid',
      backgroundColor: 'hsl(var(--h) var(--s) 70% / var(--a))',
      borderColor: 'hsl(var(--h) var(--s) 70% / var(--a))',
    },
    disabled: {
      color: '#A19F9D',
      backgroundColor: '#F3F2F1',
      borderColor: '#F3F2F1',
    },
  },
  text: {
    color: 'var(--color)',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    hover: {
      color: 'hsl(var(--h) var(--s) calc(var(--l) - 10%) / var(--a))',
    },
    active: {
      color: 'hsl(var(--h) var(--s) calc(var(--l) - 20%) / var(--a))',
    },
    focus: {
      outlineColor: 'hsl(var(--h) var(--s) calc(var(--l) - 20%) / .5)',
      outlineStyle: 'solid',
      color: 'hsl(var(--h) var(--s) calc(var(--l) - 20%) / var(--a))',
    },
    disabled: {
      color: '#A19F9D',
    },
  },
  INHERIT: {
    color: 'inherit',
    backgroundColor: 'inherit',
    borderColor: 'inherit',
    hover: {
      backgroundColor: 'inherit)',
      borderColor: 'inherit',
    },
    active: {
      backgroundColor: 'inherit',
      borderColor: 'inherit',
    },
    focus: {
      outlineColor: 'inherit',
      outlineStyle: 'inherit',
      backgroundColor: 'inherit',
      borderColor: 'inherit',
    },
    disabled: {
      color: 'inherit',
      backgroundColor: 'inherit',
      borderColor: 'inherit',
    },
  },
}

const Styles = styleVariants(map, (value) => ({
  color: String(value.color),
  borderColor: String(value.borderColor),
  backgroundColor: String(value.backgroundColor),
  borderStyle: 'solid',
  outlineStyle: 'none',
  transition: '.2s color ease-in, .2s border ease-in, .2s background ease-in',
  ':hover': value.hover,
  ':active': value.active,
  ':focus': value.focus,
  ':disabled': value.disabled,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['solid' as Type],
}

const BasicStyles = styleVariants(map, (value) => ({
  color: String(value.color),
  borderColor: String(value.borderColor),
  backgroundColor: String(value.backgroundColor),
  borderStyle: 'solid',
  outlineStyle: 'none',
}))

export const BasicStyle: typeof BasicStyles & {
  default: string
} = {
  ...BasicStyles,
  default: BasicStyles['solid' as Type],
}