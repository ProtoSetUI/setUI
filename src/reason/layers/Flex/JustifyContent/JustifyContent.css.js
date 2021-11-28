// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Css from '@vanilla-extract/css'

var style = Css.styleVariants(
  {
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
  },
  function (value) {
    return {
      justifyContent: value,
    }
  }
)

function resolve(t) {
  if (t === 'left') {
    return style.left
  } else if (t === 'spaceAround') {
    return style.spaceAround
  } else if (t === 'right') {
    return style.right
  } else if (t === 'stretch') {
    return style.stretch
  } else if (t === 'end') {
    return style.end
  } else if (t === 'start') {
    return style.start
  } else if (t === 'center') {
    return style.center
  } else if (t === 'spaceBetween') {
    return style.spaceBetween
  } else if (t === 'flexStart') {
    return style.flexStart
  } else if (t === 'unsafeCenter') {
    return style.unsafeCenter
  } else if (t === 'normal') {
    return style.normal
  } else if (t === 'flexEnd') {
    return style.flexEnd
  } else if (t === 'safeCenter') {
    return style.safeCenter
  } else {
    return style.spaceEvenly
  }
}

var JustifyContent = {
  initial: 'flexStart',
  style: style,
  resolve: resolve,
}

export { JustifyContent }
/* style Not a pure module */
