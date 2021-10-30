import { FC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from '../defaultProps'
import type { Props } from './types'
import ProtoSet from '../../ProtoSet'
import { ClassName } from '../styles.css'

export const displayName = 'Q.Paragraph'

const Set: FC<Props> = ({ className, ...props }) =>
  ProtoSet({
    ...object.mergePropsWithWarning<any>(defaultProps, props, displayName),

    // props override
    className: cn(ClassName, className),
  })

Set.displayName = displayName

export default Set
