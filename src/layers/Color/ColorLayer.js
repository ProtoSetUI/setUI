// Generated by ReScript, PLEASE EDIT WITH CARE

import * as ColorStyleCssJs from "./Color/ColorStyle.css.js";

var color = ColorStyleCssJs.ColorStyle;

function resolve(i) {
  var match = i.color;
  return [match === "secondary" ? color.style.secondary : (
                match === "primary" ? color.style.primary : (
                    match === "black" ? color.style.black : color.style.white
                  )
              )].join(" ");
}

var ColorLayer = {
  resolve: resolve
};

export {
  color ,
  ColorLayer ,
  
}
/* color Not a pure module */