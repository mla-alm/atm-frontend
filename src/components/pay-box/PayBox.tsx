import { Box, Stack, Typography, Grid2, Button } from "@mui/material";
import { DenominationResponse } from "../../client/withdrawal-client";
import NoteBox from "./NoteBox";
import CoinBox from "./CoinBox";
import { roundButtonStyle } from "../styles/button-styles";
import backArrowIcon from "../keypad/back-arrow-icon.png";

export interface PayBoxProps {
  readyCash: DenominationResponse[];
  withdrawalAmount: number;
  reset: () => void;
}

const PayBox: React.FC<PayBoxProps> = ({
  readyCash,
  reset,
  withdrawalAmount,
}) => {
  console.log(readyCash);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100dvh",
        padding: 4,
        bgcolor: (theme) => theme.palette.primary.main,
      }}
    >
      <Stack spacing={4} alignItems="center">
        <Stack
          direction="row"
          spacing={0}
          alignItems="center"
          width="100%"
          justifyContent="space-between"
        >
          <Button variant="contained" onClick={reset} sx={roundButtonStyle}>
            <img
              src={backArrowIcon}
              alt="Back"
              style={{ height: "70px", width: "70px" }}
            />
          </Button>
          <Typography variant="h4" color="white">
            Depositing
          </Typography>
          <div style={{ width: "70px" }} />
        </Stack>
        <Typography variant="h3" color="white">
          £ {withdrawalAmount}
        </Typography>

        <Grid2 container spacing={3}>
          <Grid2 spacing={0} sx={{ md: 4, sm: 12 }}>
            {readyCash
              .filter((item) => item.payBox === "Notes")
              .map((item) => (
                <NoteBox
                  key={item.value}
                  amount={item.amount}
                  value={item.value}
                />
              ))}
          </Grid2>
          <Grid2 spacing={0} sx={{ md: 4, sm: 12 }}>
            {readyCash
              .filter((item) => item.payBox === "CoinsGreaterThan20mm")
              .map((item) => (
                <CoinBox
                  key={item.value}
                  amount={item.amount}
                  value={item.value}
                />
              ))}
          </Grid2>
          <Grid2 spacing={0} sx={{ md: 4, sm: 12 }}>
            {readyCash
              .filter((item) => item.payBox === "CoinsLessThanEqual20mm")
              .map((item) => (
                <CoinBox
                  key={item.value}
                  amount={item.amount}
                  value={item.value}
                />
              ))}
          </Grid2>
        </Grid2>

        <Typography variant="h4" color="white" textAlign="center">
          Thank you for using
          <br />
          Enalyzer ATM
        </Typography>
      </Stack>
    </Box>
  );
};

export default PayBox;
