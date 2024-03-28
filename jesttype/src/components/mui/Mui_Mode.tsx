import { useTheme } from "@mui/system";
import { Typography } from "@mui/material";
import React from "react";

const Mui_Mode = () => {
  const theme = useTheme();
  const dark = theme.palette.mode;

  return (
    <div>
      <Typography variant="h3">{`${dark} mode`}</Typography>
    </div>
  );
};

export default Mui_Mode;
