export const COLORS = {
  white: '0deg 0% 100%',
  gray: {
    100: '185deg 5% 95%',
    300: '190deg 5% 80%',
    500: '196deg 4% 60%',
    700: '220deg 5% 40%',
    900: '220deg 3% 20%',
  },
  primary: '340deg 65% 47%',
  secondary: '240deg 60% 63%',
}

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
}

const BREAKPOINTS = {
  phoneMax: 37.5,
  tabletMax: 59.375,
  laptopMax: 81.25,
}

export const QUERIES = {
  phone: `(max-width: ${BREAKPOINTS.phoneMax}rem)`,
  tablet: `(max-width: ${BREAKPOINTS.tabletMax}rem)`,
  laptop: `(max-width: ${BREAKPOINTS.laptopMax}rem)`,
}
