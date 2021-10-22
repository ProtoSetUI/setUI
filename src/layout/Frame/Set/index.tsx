import { FC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import type { Props } from './types'
import ProtoSet from '../ProtoSet'
import { ClassName } from './styles.css'

export const displayName = 'Frame'

const Set: FC<Props> = ({ className, ...props }) =>
  ProtoSet({
    as: 'div',
    ...object.mergePropsWithWarning<any>(defaultProps, props),

    // props override
    className: cn(ClassName, className),
  })

Set.displayName = displayName

export { defaultProps } from './defaultProps'
export type { Props } from './types'
export default Set