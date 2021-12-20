import styled from "@emotion/styled";
import ContainerLogos from "../containers/ContainerLogos";
import Navbar from "../containers/Navbar";

export default function Header() {
  return (
    <StyledHeader>
      <ContainerLogos />
      <Navbar />
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px 10px;
  gap: 110px;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;
