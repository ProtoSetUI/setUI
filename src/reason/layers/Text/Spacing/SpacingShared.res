module SpacingShared = {
  @genType
  type value = int;

  @genType
  type options = {
    "none": value,
    "xxxsmall": value,
    "xxsmall": value,
    "xsmall": value,
    "small": value,
    "medium": value,
    "large": value,
    "xlarge": value,
    "xxlarge": value,
    "xxxlarge": value,
  };

  @genType
  type variant = {
    "none": string,
    "xxxsmall": string,
    "xxsmall": string,
    "xsmall": string,
    "small": string,
    "medium": string,
    "large": string,
    "xlarge": string,
    "xxlarge": string,
    "xxxlarge": string,
  };

  @genType
  type t = [
    | #none
    | #xxxsmall
    | #xxsmall
    | #xsmall
    | #small
    | #medium
    | #large
    | #xlarge
    | #xxlarge
    | #xxxlarge
  ]

  @genType
  let initial = #none;

  @genType
  let options = {
    "none": 0,
    "xxxsmall": 4,
    "xxsmall": 8,
    "xsmall": 12,
    "small": 16,
    "medium": 24,
    "large": 36,
    "xlarge": 48,
    "xxlarge": 96,
    "xxxlarge": 128,
  };
}