// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Cn from "rescript-classnames/src/Cn.js";
import * as FontSizeResolver from "./Size/FontSizeResolver.js";
import * as FontStyleResolver from "./Style/FontStyleResolver.js";
import * as FontFamilyResolver from "./Family/FontFamilyResolver.js";
import * as FontWeightResolver from "./Weight/FontWeightResolver.js";

function resolve(fontFamily, fontSize, fontStyle, fontWeight) {
  return Cn.make([
              FontFamilyResolver.make(fontFamily),
              FontSizeResolver.make(fontSize),
              FontStyleResolver.make(fontStyle),
              FontWeightResolver.make(fontWeight)
            ]);
}

export {
  resolve ,
  
}
/* FontSizeResolver Not a pure module */
