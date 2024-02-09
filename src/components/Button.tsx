import React from "react";

type Props = {
  variant?: "outline" | "filled";
  padding?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "success" | "danger" | "warning";
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  variant="filled",
  padding="sm",
  color="primary",
  type="button",
  onClick,
  children,
}: Props) => {
  let btnColor = "";
  switch (color) {
    case "primary":
      btnColor = "#099ede";
      break;
    case "secondary":
      btnColor = "#5009de";
      break;
    case "success":
      btnColor = "#11c204";
      break;
    case "danger":
      btnColor = "#c20437";
      break;
    case "warning":
      btnColor = "#c29904";
      break;
  }

  const btnProps = {
    style: {
      backgroundColor: variant === "outline" ? "transparent" : btnColor,
      borderRadius: "5px",
      padding: padding === "sm" ? "8px" : padding === "md" ? "12px" : "16px",
      color: variant === "outline" ? btnColor : "white",
      boxShadow: "0 0 5px rgba(0,0,0,0.2)",
      border: variant === "outline" ? `1px solid ${btnColor}` : "none",
    },
    onClick: onClick,
    type: type,
  };

  return <button {...btnProps}>{children}</button>;
};

export default Button;
