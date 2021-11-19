type value = string;

type options = {
  "thin": value,
  "extraLight": value,
  "light": value,
  "normal": value,
  "medium": value,
  "semiBold": value,
  "bold": value,
  "extraBold": value,
  "heavy": value,
  "lighter": value,
  "bolder": value,
  "inherit": value,
  "initial": value,
  "unset": value,
};

type output = {
  "fontWeight": value,
}

type cssResolve = (value) => output

type variant = {
  "thin": string,
  "extraLight": string,
  "light": string,
  "normal": string,
  "medium": string,
  "semiBold": string,
  "bold": string,
  "extraBold": string,
  "heavy": string,
  "lighter": string,
  "bolder": string,
  "inherit": string,
  "initial": string,
  "unset": string,
};

@module("@vanilla-extract/css") external styleVariants: (options, cssResolve) => variant = "styleVariants"

module FontWeight = {
  @genType
  type t = [
    | #thin
    | #extraLight
    | #light
    | #normal
    | #medium
    | #semiBold
    | #bold
    | #extraBold
    | #heavy
    | #lighter
    | #bolder
    | #inherit
    | #initial
    | #unset
  ]

  let initial = #normal;

  let style = styleVariants({
    "thin": "100",
    "extraLight": "200",
    "light": "300",
    "normal": "400",
    "medium": "500",
    "semiBold": "600",
    "bold": "700",
    "extraBold": "800",
    "heavy": "900",
    "lighter": "lighter",
    "bolder": "bolder",
    "inherit": "inherit",
    "initial": "initial",
    "unset": "unset",
  }, (value) => {
    let output = {
      "fontWeight": value,
    };
    output
  })

  @genType
  let resolve = (t) => {
    switch (t) {
    | #thin => style["thin"]
    | #extraLight => style["extraLight"]
    | #light => style["light"]
    | #normal => style["normal"]
    | #medium => style["medium"]
    | #semiBold => style["semiBold"]
    | #bold => style["bold"]
    | #extraBold => style["extraBold"]
    | #heavy => style["heavy"]
    | #lighter => style["lighter"]
    | #bolder => style["bolder"]
    | #inherit => style["inherit"]
    | #initial => style["initial"]
    | #unset => style["unset"]
    };
  }
}