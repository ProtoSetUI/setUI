import { FC } from 'react'
import Component, { Props } from '../../Component'

const SampleOutput: FC<Omit<Props, 'as'>> = (props) =>
  Component({
    // props default values
    type: 'monospace',

    // props passed
    ...props,

    // props override
    as: 'samp',
  })

export default SampleOutput
