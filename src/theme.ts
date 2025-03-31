import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2bbed3", // The specified blue color
    },
  },
  typography: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    h4: {
      fontSize: "40px",
      fontWeight: "normal",
    },
    h3: {
      fontSize: "80px",
      fontWeight: "bold",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          transition: "all 0.3s ease",
        },
      },
    },
  },
});

export default theme;
