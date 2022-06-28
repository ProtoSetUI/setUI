open H2StyleProps

@module("./H2Style.css.js") external classNameRoot: string = "className"

let { displayName } = module(H2Meta)
let className = classNameRoot

external dangerousLevelCast: HeadingProto.h2 => HeadingProto.level = "%identity";

@react.component
let make = (
//  ~nodeRef: option<ReactDOM.domRef>=?,
  ~level: option<HeadingProto.h2>=?,
  ~tag: option<HeadingProto.tag>=?,
  ~className: option<string>=?,
  ~style: option<Retype.style>=?,

  ~color: option<Color.t>=?,

  ~fontFamily: option<FontFamily.t>=?,
  ~fontSize: option<FontSize.t>=?,
  ~fontStyle: option<FontStyle.t>=?,
  ~fontWeight: option<FontWeight.t>=?,

  ~children: React.element,
) => HeadingProto.make(
//  ~nodeRef = ?nodeRef,
  ~level = switch level {
  | Some(l) => l -> dangerousLevelCast
  | None => #2
  },
  ~tag = ?tag,

  ~className = Cn.make([classNameRoot, switch className {
  | Some(c) => c
  | None => ""
  }]),
  ~style = ?style,

  ~color = switch color {
  | Some(s) => s
  | None => styleProps.color
  },

  ~fontFamily = switch fontFamily {
  | Some(s) => s
  | None => styleProps.fontFamily
  },
  ~fontSize = switch fontSize {
  | Some(s) => s
  | None => styleProps.fontSize
  },
  ~fontStyle = switch fontStyle {
  | Some(s) => s
  | None => styleProps.fontStyle
  },
  ~fontWeight = switch fontWeight {
  | Some(s) => s
  | None => styleProps.fontWeight
  },

  ~children,
)
