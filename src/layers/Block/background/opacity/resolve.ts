export function resolve<T>(props: T) {
  switch (true) {
    case 'backgroundOpacity' in props: {
      return props['backgroundOpacity']
    }
    default: {
      return undefined
    }
  }
}
