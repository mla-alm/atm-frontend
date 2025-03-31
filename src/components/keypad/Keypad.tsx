import React from "react";
import { Button, Stack } from "@mui/material";
import backArrowIcon from "./back-arrow-icon.png";
import { roundButtonStyle } from "../styles/button-styles";

export interface KeypadProps {
  onNumberClick?: (number: number) => void;
  onBackspaceClick?: () => void;
}

const Keypad: React.FC<KeypadProps> = ({
  onNumberClick = () => {},
  onBackspaceClick = () => {},
}) => {
  return (
    <Stack spacing={3}>
      {/* First row: 1, 2, 3 */}
      <Stack direction="row" spacing={3}>
        <Button
          variant="contained"
          onClick={() => onNumberClick(1)}
          sx={roundButtonStyle}
        >
          1
        </Button>
        <Button
          variant="contained"
          onClick={() => onNumberClick(2)}
          sx={roundButtonStyle}
        >
          2
        </Button>
        <Button
          variant="contained"
          onClick={() => onNumberClick(3)}
          sx={roundButtonStyle}
        >
          3
        </Button>
      </Stack>

      {/* Second row: 4, 5, 6 */}
      <Stack direction="row" spacing={3}>
        <Button
          variant="contained"
          onClick={() => onNumberClick(4)}
          sx={roundButtonStyle}
        >
          4
        </Button>
        <Button
          variant="contained"
          onClick={() => onNumberClick(5)}
          sx={roundButtonStyle}
        >
          5
        </Button>
        <Button
          variant="contained"
          onClick={() => onNumberClick(6)}
          sx={roundButtonStyle}
        >
          6
        </Button>
      </Stack>

      {/* Third row: 7, 8, 9 */}
      <Stack direction="row" spacing={3}>
        <Button
          variant="contained"
          onClick={() => onNumberClick(7)}
          sx={roundButtonStyle}
        >
          7
        </Button>
        <Button
          variant="contained"
          onClick={() => onNumberClick(8)}
          sx={roundButtonStyle}
        >
          8
        </Button>
        <Button
          variant="contained"
          onClick={() => onNumberClick(9)}
          sx={roundButtonStyle}
        >
          9
        </Button>
      </Stack>

      {/* Fourth row: Back/Delete, 0 */}
      <Stack direction="row" spacing={3}>
        <Button
          variant="contained"
          onClick={onBackspaceClick}
          sx={roundButtonStyle}
        >
          <img
            src={backArrowIcon}
            alt="Back"
            style={{ height: "70px", width: "auto" }}
          />
        </Button>
        <Button
          variant="contained"
          onClick={() => onNumberClick(0)}
          sx={roundButtonStyle}
        >
          0
        </Button>
        <div style={{ width: "100%" }} />
      </Stack>
    </Stack>
  );
};

export default Keypad;
