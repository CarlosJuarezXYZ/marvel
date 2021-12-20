import styled from "@emotion/styled";
import { colors } from "../../ui";
import Link from "../UI/Link";

export default function Navbar() {
  const arrayLink = [
    { id: "a", option: "Heroes" },
    { id: "b", option: "Favorites" },
  ];
  return (
    <StyledNavar>
      {arrayLink.map((link) => (
        <Link key={link.id}>{link.option}</Link>
      ))}
    </StyledNavar>
  );
}

const StyledNavar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: ${colors.text};
  width: 100%;
  height: auto;
  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 500px) {
    display: flex;
    flex-direction: inherit;
    width: 100%;
  }
`;
