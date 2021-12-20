import styled from "@emotion/styled";
import { colors } from "../../ui";
import CardContainer from "../containers/CardContainer";
//import CardContainer from "../Containers/CardContainer";
import Button from "./Button";
import ImagenHeroe from "./ImageHeroe";

export default function CardHeroe({
  url,
  name,
  description,
  modified,
  onClick,
}) {
  function transformTime(modified) {
    const year = new Date(modified).getFullYear();
    const month = new Date(modified).getMonth();
    const day = new Date(modified).getDate();
    const months = [
      "January",
      "Febrary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Agust",
      "Septmeber",
      "October",
      "November",
      "December",
    ];

    return `${months[month]} ${day},${year}`;
  }

  return (
    <CardContainer>
      <ContainerImage>
        <ImagenHeroe url={url} />
      </ContainerImage>
      <ContainerOptions>
        <Text>
          <TextBold>Name:</TextBold> {name}
        </Text>
        <Text>
          <TextBold>Description:</TextBold> {description}
        </Text>
        <Text>
          <TextBold>Modified:</TextBold> {transformTime(modified)}
        </Text>
      </ContainerOptions>
      <ContainerDescription>
        <Button
          onClick={onClick}
          size="medium"
          bg={colors.bgButton}
          color={colors.text}
        >
          Edit
        </Button>
      </ContainerDescription>
    </CardContainer>
  );
}

const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
const ContainerOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: 12px;
  margin-bottom: 10px;
  color: ${colors.textCard};
`;
const ContainerDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  color: ${colors.textCard};
`;
const Text = styled.p`
  color: ${colors.textCard};
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
const TextBold = styled.p`
  color: black;
  font-weight: bold;
`;
