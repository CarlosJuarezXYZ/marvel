import styled from "@emotion/styled";
import { colors } from "../../ui";

const sizes = {
  tiny: {
    padding: "6px 15px",
    size: "12px",
  },
  small: {
    padding: "6px 15px",
    size: "16px",
  },
  medium: {
    size: "18px",
    padding: "10px 20px",
  },
};

export default function Button({
  color = colors.text,
  bg = colors.bgButton,
  size = "medium",
  onClick,
  disabled = false,
  children,
}) {
  if (!sizes[size]) size = "medium";
  return (
    <StyledButton
      size={size}
      bg={bg}
      color={color}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  outline: none;
  padding: ${(props) => sizes[props.size].padding};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  border-radius: 10px;
  color: ${(props) => props.color};
  font-style: normal;
  font-weight: 800;
  font-size: ${(props) => sizes[props.size].size};
  line-height: 20px;
  background-color: ${(props) => props.bg};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.color};
    color: ${(props) => props.bg};
    border: 1px solid ${(props) => props.bg};
  }
`;
