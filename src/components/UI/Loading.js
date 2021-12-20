import styled from "@emotion/styled";
import { colors } from "../../ui";

export default function Loading() {
  return (
    <ContainerLoading>
      <p>loading...</p>
      <Loader />
    </ContainerLoading>
  );
}

const ContainerLoading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
  color: ${colors.text};
  justify-content: center;
  align-items: center;
`;
const Loader = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${colors.textCard};
  color: ${colors.textCard};
  animation: dotFlashing 1s infinite linear alternate;
  animation-delay: 0.5s;
  margin: 0 auto;
  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    left: -15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${colors.textCard};
    color: ${colors.textCard};
    animation: dotFlashing 1s infinite alternate;
    animation-delay: 0s;
  }
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    left: 15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${colors.textCard};
    color: ${colors.textCard};
    animation: dotFlashing 1s infinite alternate;
    animation-delay: 1s;
  }
  @keyframes dotFlashing {
    0% {
      background-color: ${colors.textCard};
    }
    50%,
    100% {
      background-color: ${colors.bgButton};
    }
  }
`;
