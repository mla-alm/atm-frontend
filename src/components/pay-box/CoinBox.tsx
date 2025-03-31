import { Box, Typography } from "@mui/material";

export interface BoxProps {
  amount: number;
  value: number;
}

const CoinBox: React.FC<BoxProps> = ({ amount, value }) => {
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
      <Box
        sx={{
          width: "80px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: (theme) => theme.palette.primary.main,
            fontWeight: "bold",
            fontSize: "18px",
          }}
        />
      </Box>

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

export default CoinBox;
