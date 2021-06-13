import { FC } from 'react'
import Set, { Props } from './Set'
import { H1, H2, H3, H4, H5, H6 } from './Subsets'
import { Placeholder } from './Supersets'

interface I<T = unknown> extends FC<T> {
  // subsets
  H1: typeof H1
  H2: typeof H2
  H3: typeof H3
  H4: typeof H4
  H5: typeof H5
  H6: typeof H6

  // supersets
  Placeholder: typeof Placeholder
}

const Heading: I<Props> = (props) => Set(props)

// subsets
Heading.H1 = H1
Heading.H2 = H2
Heading.H3 = H3
Heading.H4 = H4
Heading.H5 = H5
Heading.H6 = H6

// supersets
Heading.Placeholder = Placeholder

export type { Props } from './Set'
export default Heading
