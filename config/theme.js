// Colors
import colors from 'vuetify/lib/util/colors';

const palette = {
  violet: {
    primary: '#8c52ff', // primary main
    primarylight1: '#b07cff', // primary light variant 1
    primarylight: '#d1a4ff', // primary light variant 2
    primarydark1: '#6538cc', // primary dark variant 1
    primarydark: '#4d2e99', // primary dark variant 2
    secondary: '#52a1ff', // secondary main
    secondarylight1: '#ffa4ff', // secondary light variant 1
    secondarylight: '#99c7ff', // secondary light variant 2
    secondarydark: '#3970b3', // secondary dark variant 1
    secondarydark2: '#b12db1', // secondary dark variant 2
    anchor: '#8c52ff', // link color, same as primary main
  },
};

const theme = {
  ...palette.violet,
};

export default theme;
