import styled from "@emotion/styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateHeroes } from "../../features/heroes/heroesSlice";
import { colors } from "../../ui";
import Button from "./Button";
import ImagenHeroe from "./ImageHeroe";

export default function Modal({
  url,
  name,
  description,
  modified,
  id,
  closeModal,
}) {
  const [nameModal, setName] = useState(name);
  const [descriptionModal, setDescription] = useState(description);

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

  const dispatch = useDispatch();

  const updateHeroe = () => {
    dispatch(
      updateHeroes({ id: id, name: nameModal, description: descriptionModal })
    );
  };

  return (
    <ContainerModal>
      <ContentModal>
        <ContainerImage>
          <ImagenHeroe url={url} />
        </ContainerImage>
        <ContainerOptions>
          <ContentInput
            placeholder="name"
            name="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={nameModal}
          />
          <ContentTextArea
            placeholder="Description"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            value={descriptionModal}
          />
          <Text>Modified: {transformTime(modified)}</Text>
        </ContainerOptions>

        <ContainerButtons>
          <Button
            onClick={() => updateHeroe()}
            size="medium"
            bg="black"
            color="#fff"
          >
            Editar
          </Button>

          <Button
            onClick={() => closeModal()}
            size="medium"
            bg="black"
            color="#fff"
          >
            Cerrar
          </Button>
        </ContainerButtons>
      </ContentModal>
    </ContainerModal>
  );
}

const ContainerModal = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
`;

const ContentModal = styled.form`
  width: 400px;
  height: 550px;
  border-radius: 10px;
  background-color: #fff;
  padding: 20px;
  border: 2px solid skyblue;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

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
  color: ${colors.text};
`;

const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Text = styled.p`
  color: black;
`;

const ContentInput = styled.input`
  width: 100%;
  height: 40px;
  color: black;
  border-radius: 10px;
  outline: none;
  border: 1px solid black;
`;
const ContentTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  outline: none;
  border-radius: 10px;
  border: 1px solid black;
`;
