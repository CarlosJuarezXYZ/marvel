import styled from "@emotion/styled";
import { colors } from "../../ui";
import Icon from "./Icon";

export default function NotFound() {
  return (
    <ContainerNotFound>
      <Icon type="notFound" fill={colors.bgIcon} size={250} />
      <TextNotFound>not data found</TextNotFound>
    </ContainerNotFound>
  );
}

const ContainerNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const TextNotFound = styled.div`
font-size: 30px;
color: ${colors.text};
`
