import { VFC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { useColor, useFontSize } from 'layers'
import { defaultProps } from './defaultProps'
import { ClassName } from './styles.css'
import { NonRepresentation, MinimumRepresentation } from '../../types'
import ProtoSet from '../../ProtoSet'

export const displayName = 'H1'

export interface Props extends NonRepresentation, MinimumRepresentation {}

const Component: VFC<Props> = ({
  className,
  children,
  fontSize: fontSizeFromProps,
  color: colorFromProps,
  ...rest
}) => {
  const color = useColor()
  const fontSize = useFontSize()

  return ProtoSet({
    ...object.mergePropsWithWarning(
      defaultProps,
      {
        fontSize: fontSizeFromProps || fontSize,
        color: colorFromProps || color,
        ...rest,
      },
      displayName
    ),

    // override
    OVERRIDE_TAG_SEMANTICS: false,
    level: 1,
    children,
    className: cn(ClassName, className),
  })
}

Component.displayName = displayName

export default Component