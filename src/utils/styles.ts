const ROUNDED_FULL = '9999px'

export const roundedLeft = `
  border-top-left-radius: ${ROUNDED_FULL};
  border-bottom-left-radius: ${ROUNDED_FULL};
`

export const roundedRight = `
  border-top-right-radius: ${ROUNDED_FULL};
  border-bottom-right-radius: ${ROUNDED_FULL};
`

export const roundedFull = roundedLeft + roundedRight

export const srOnly = `
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`
