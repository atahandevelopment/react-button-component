import React from "react";
type Props = {
    variant?: "outline" | "filled";
    padding?: "sm" | "md" | "lg";
    color?: "primary" | "secondary" | "success" | "danger" | "warning";
    children?: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
};
declare const Button: ({ variant, padding, color, type, onClick, children, }: Props) => React.JSX.Element;
export default Button;
