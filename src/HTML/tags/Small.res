open HTML

module Small = {
  let tag = HTML.Small

  let contentCategories = [
    HTML.Flow,
    HTML.Phrasing,
    // HTML.Palpable,
  ]

  let permittedContent = [
    HTML.Phrasing
  ]

  let implicitARIARole = [
    HTML.None
  ]

  let permittedARIARoles = [
    HTML.Any,
  ]
}