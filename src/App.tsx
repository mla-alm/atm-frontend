import { useState } from "react";
import Keypad from "./components/keypad/Keypad";
import { Box, Button, Stack, Typography } from "@mui/material";
import { submitButtonStyle } from "./components/styles/button-styles";
import { useDispatch, useSelector } from "react-redux";
import { withdrawalAction } from "./components/withdrawal/withdrawal-action";
import { StoreRootState } from "./app-store/root-reducer";
import PayBox from "./components/pay-box/PayBox";
import { takeCash } from "./components/withdrawal/withdrawal-slice";

const maxWithdrawalAmount = 65000;

function App() {
  const dispatch = useDispatch();
  const [withdrawalAmount, setWithdrawalAmount] = useState(0);

  const readyCash = useSelector(
    (state: StoreRootState) => state.withdrawal.readyCash
  );

  const onBackspaceClick = () => {
    setWithdrawalAmount((amount) => Math.floor(amount / 10));
  };

  const onNumberClick = (number: number) => {
    setWithdrawalAmount((amount) => amount * 10 + number);
  };

  const onSubmit = () => {
    dispatch(withdrawalAction(withdrawalAmount));
  };

  const reset = () => {
    setWithdrawalAmount(0);
    dispatch(takeCash());
  };

  const amountTooHigh = withdrawalAmount > maxWithdrawalAmount;

  if (readyCash.length > 0) {
    return (
      <PayBox
        readyCash={readyCash}
        withdrawalAmount={withdrawalAmount}
        reset={reset}
      />
    );
  }

  return (
    <Stack
      direction={"column"}
      spacing={{ xs: 3, sm: 4, md: 8 }}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        background: (theme) => theme.palette.primary.main,
      }}
      height="100dvh"
    >
      <Typography color="white" variant={"h4"}>
        Select amount
      </Typography>
      <Typography color="white" variant={"h3"}>
        £ {withdrawalAmount > 0 ? withdrawalAmount : ""}
        <Box
          component="span"
          sx={{
            display: "inline-block",
            width: "1px",
            height: "60px",
            backgroundColor: "white",
            marginLeft: "8px",
            animation: "blink 1s step-end infinite",
            "@keyframes blink": {
              "0%, 100%": { opacity: 1 },
              "50%": { opacity: 0 },
            },
          }}
        />
      </Typography>
      <Keypad
        onNumberClick={onNumberClick}
        onBackspaceClick={onBackspaceClick}
      />
      <Button
        variant="contained"
        disabled={amountTooHigh || withdrawalAmount === 0}
        onClick={onSubmit}
        sx={submitButtonStyle}
      >
        {
          amountTooHigh ? " amount too high " : "submit"
          // ToDo: Add loading.
        }
      </Button>
    </Stack>
  );
}

export default App;
