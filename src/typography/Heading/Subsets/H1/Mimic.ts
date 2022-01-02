import { VFC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { useColor, useFontSize } from 'layers'
import { displayName as pureName } from './Pure'
import { NonSemantic } from '../../types'
import ProtoSet, { mimicryAs, AsType } from '../../ProtoSet'
import { defaultProps } from './defaultProps'
import { ClassName } from './styles.css'

export const displayName = `${pureName}.Mimic`

type AsLevelType = Omit<AsType, 'h1'>
const mimicry = mimicryAs<AsLevelType>(1)

interface MimicProps {
  as: AsLevelType
}

interface Props extends MimicProps, NonSemantic {}

const Component: VFC<Props> = ({
  as,
  className,
  children,
  fontSize: fontSizeFromProps,
  color: colorFromProps,
  ...rest
}) => {
  const color = useColor()
  const fontSize = useFontSize()

  return ProtoSet({
    ...mimicry(as),

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
    children,
    className: cn(ClassName, className),
  })
}

Component.displayName = displayName

export default Component
