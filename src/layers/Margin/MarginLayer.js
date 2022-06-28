// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Cn from "rescript-classnames/src/Cn.js";
import * as MarginBlockEndResolver from "./BlockEnd/MarginBlockEndResolver.js";
import * as MarginInlineEndResolver from "./InlineEnd/MarginInlineEndResolver.js";
import * as MarginBlockStartResolver from "./BlockStart/MarginBlockStartResolver.js";
import * as MarginInlineStartResolver from "./InlineStart/MarginInlineStartResolver.js";

function resolve(marginBlockEnd, marginBlockStart, marginInlineEnd, marginInlineStart) {
  return Cn.make([
              MarginBlockEndResolver.make(marginBlockEnd),
              MarginBlockStartResolver.make(marginBlockStart),
              MarginInlineEndResolver.make(marginInlineEnd),
              MarginInlineStartResolver.make(marginInlineStart)
            ]);
}

export {
  resolve ,
  
}
/* MarginBlockEndResolver Not a pure module */
