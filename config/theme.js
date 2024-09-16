const palette = {
  blueGray: {
    primary: "#003366", // Dark blue as primary
    primarylight1: "#003d78", // Lighter blue for highlights or hover
    primarylight: "#6699cc", // Lightest blue for links
    primarydark1: "#002244", // Even darker blue, if needed
    secondary: "#ff6600", // Muted orange as secondary
    secondarylight1: "#ff8533", // Lighter orange for highlights
    secondarydark: "#cc5200", // Darker orange for buttons, etc.
    anchor: "#003d78", // Link color matching primary light
  },
};

const theme = {
  ...palette.blueGray,
};

export default theme;
