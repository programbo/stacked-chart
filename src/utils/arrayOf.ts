export const arrayOf = <T extends JSX.Element>(children: T | T[]) =>
  Array.isArray(children) ? children : [children]
