@module("@vanilla-extract/css") external style: (Js.Dict.t<string>) => string = "style"

let className = style(Js.Dict.fromList(list{
  ("margin", "0"),
  ("display", "inline"),
}))
