export const roundButtonStyle = {
  height: "70px",
  width: "70px",
  minWidth: "70px",
  borderRadius: "50%",
  fontSize: "40px",
  fontWeight: "normal",
  color: "white", // White text
  border: "1px solid white", // White border
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "none",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "white", // White background on hover
    color: (theme: { palette: { primary: { main: string } } }) =>
      theme.palette.primary.main,
    boxShadow: "none",
    "& img": {
      filter: "invert(1)", // Invert icon color on hover
    },
  },
};

export const submitButtonStyle = {
  height: "70px",
  minWidth: "260px",
  borderRadius: "35px",
  fontSize: "40px",
  fontWeight: "normal",
  color: "white", // White text
  border: "1px solid white", // White border
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "none",
  textTransform: "none",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "white", // White background on hover
    color: (theme: { palette: { primary: { main: string } } }) =>
      theme.palette.primary.main,
    boxShadow: "none",
  },
  "&.Mui-disabled": {
    backgroundColor: (theme: { palette: { primary: { main: string } } }) =>
      theme.palette.primary.main, // Keep same background color
    color: "rgba(255, 255, 255, 0.6)", // Slightly greyed white text
    border: "1px solid white", // Slightly greyed border
    opacity: 1, // Prevent the default opacity reduction
  },
};
