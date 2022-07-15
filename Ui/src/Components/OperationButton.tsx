import React, { FC } from "react";
import Button from "@mui/material/Button";

interface IOperationButton {
  operationName: string;
  onClick(): void;
  icon: JSX.Element;
  style: object;
}

const buttonStyle = {
  fontFamily: "Ubuntu, -apple-system",
  fontSize: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "90%",
  height: "50px",
  borderRadius: "10px",
  backgroundColor: "#3B3B3B",
};

const sceneButtonStyle = {
  fontFamily: "Ubuntu, -apple-system",
  fontSize: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "95%",
  height: "50px",
  borderRadius: "10px",
  opacity: "0.7",
  backgroundColor: "#1C2C54", //3B3B3B
};

const OperationButton: FC<IOperationButton> = (props): JSX.Element => {
  return (
    <Button
      style={props.style}
      variant="text"
      startIcon={props.icon}
      onClick={props.onClick}
    >
      {props.operationName}
    </Button>
  );
};

export default OperationButton;
export { sceneButtonStyle, buttonStyle };