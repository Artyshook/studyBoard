export const device = {
  phone: 650,
  tablet: 900,
  notebook: 1600,
  desktop: 1900,
} as const

export const theme = {
  fonts: {
    xxs: '1rem',
    xs: '1.3rem',
    small: '1.5rem',
    medium: '2rem',
  },
  colors: {
    white: '#f5f5f5',
    superWhite: 'white',
    blue2: '#7A4BDD',
    lightBlue: '#d8edff',
    green: '#00ff7f',
    gray: '#b9c5ca',
    yellow: '#fada5e',
    black: '#1c1c1c',
    dark: '#0e141b',
    darkGrey: '#192028',
    boxShadow: 'rgb(102 102 102 / 5%) 0px 30px 30px;',
  },
  background: {
    backgroundColor: 'rgb(248, 248, 248);',
    lightBlue: '#0080ff',
  },

  breakpoint: {
    phone: `@media (max-width: ${device.phone}px)`,
    tablet: `@media (max-width: ${device.tablet}px)`,
    notebook: `@media (max-width: ${device.notebook}px)`,
    desktop: `@media (max-width: ${device.desktop}px)`,
  },
} as const
