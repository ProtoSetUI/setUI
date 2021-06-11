import { FC } from 'react'
import Source from 'typography/Code/subsets/Input'
import type { Props } from 'typography/Code/subsets/Input'
import Keyboard from './Keyboard'

interface I<T = unknown> extends FC<T> {
  Keyboard: typeof Keyboard
}

const Input: I<Props> = (props) => Source(props)

// Variants
Input.Keyboard = Keyboard

export type { Props } from 'typography/Code/subsets/Input'
export default Input
