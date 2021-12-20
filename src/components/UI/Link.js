import styled from "@emotion/styled";
import { colors } from "../../ui";

export default function Link({ children }) {
  return <StyledLink>{children}</StyledLink>;
}

const StyledLink = styled.a`
  color: ${colors.text};
  outline: none;
  width: 100%;
  height: 50px;
  text-decoration: none;
  font-family: Inter;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  background-color: rgba(7, 108, 255, 0.1);
  border-radius: 10px;
  &:hover {
    color: black;
  }
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;
