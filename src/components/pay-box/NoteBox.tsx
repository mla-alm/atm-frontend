import { Box, Typography } from "@mui/material";
import { BoxProps } from "./CoinBox";
import noteIcon from "./500-bill.png";

const NoteBox: React.FC<BoxProps> = ({ amount, value }) => {
  return (
    <Box
      sx={{
        width: "340px",
        height: "70px",
        border: "1px solid white",
        borderRadius: "0px",
        backgroundColor: (theme) => theme.palette.primary.main,
        padding: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <img
        src={noteIcon}
        alt="Note"
        style={{ height: "40px", width: "auto" }}
      />

      <Typography
        color="white"
        variant="h4"
        sx={{
          marginRight: "20px",
        }}
      >
        {amount} x £ {value}
      </Typography>
    </Box>
  );
};

export default NoteBox;
