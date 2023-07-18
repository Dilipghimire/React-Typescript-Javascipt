import React, { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import colors from "../Colors/Colors";

type Variant = "primary" | "secondary" | "warning" | "success" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  disabled?: boolean;
  $css?: ReturnType<typeof css>;
}

const ButtonStyled = styled.button<ButtonProps>`
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  color: white;
  cursor: pointer;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  ${({ $css }) => $css};

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return `
          background-color: ${colors.primary};
        `;
      case "secondary":
        return `
          background-color: ${colors.secondary};
        `;
      case "warning":
        return `
          background-color: ${colors.warning};
        `;
      case "success":
        return `
          background-color: ${colors.success};
        `;
      case "danger":
        return `
          background-color: ${colors.danger};
        `;
      default:
        return "";
    }
  }}
`;

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...rest
}) => {
  return (
    <ButtonStyled variant={variant} {...rest}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
