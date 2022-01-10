import { Box, Grid, Slider } from "@mui/material";
import BrightnessLowIcon from "@mui/icons-material/BrightnessLow";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import React, { FC } from "react";
import config from "../config";

interface BrightnessRequest {
  operation: string;
  brightness: number;
}

const brightnessBoxSliderStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "50px",
  backgroundColor: "#3B3B3B",
  width: "320px",
  paddingLeft: "10px",
  paddingRight: "10px",
  borderRadius: "10px",
};

const iconStyle = {
  color: "white",
  fontSize: "medium",
};

const gridItemStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const BrightnessSlider: FC = () => {
  const onChangeBrightness = (value: number) => {
    const brightnessRequest: BrightnessRequest = {
      operation: "brightness",
      brightness: value,
    };

    fetch(config.LED_API_URL + "brightness", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(brightnessRequest),
    }).catch((error) => {
      console.log("ERROR", error);
    });
  };

  return (
    <Box style={brightnessBoxSliderStyle}>
      <Grid container spacing={2}>
        <Grid item xs={1} style={gridItemStyle}>
          <BrightnessLowIcon style={iconStyle} />
        </Grid>
        <Grid item xs={10} style={gridItemStyle}>
          <Slider
            aria-label="Brightness"
            defaultValue={100}
            valueLabelDisplay="auto"
            min={0}
            max={100}
            onChangeCommitted={(_e, v) => onChangeBrightness(v as number)}
          />
        </Grid>
        <Grid item xs={1} style={gridItemStyle}>
          <BrightnessHighIcon style={iconStyle} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BrightnessSlider;