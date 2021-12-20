import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeroes, setFilter } from "../../features/heroes/heroesSlice";
import CardHeroe from "../UI/Cardheroe";
import InputField from "../UI/Input";
import Loading from "../UI/Loading";
import Modal from "../UI/Modal";
import NotFound from "../UI/NotFound";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Body() {
  const dispatch = useDispatch();

  const heroes = useSelector((state) => state.heroes.filterItems);
  const status = useSelector((state) => state.heroes.status);
  const [modal, setModal] = useState(false);
  const [idmodal, setIdModal] = useState(0);
  const [limit, setLimit] = useState(20);
  const [inputName, setInputName] = useState("");
  const [inputModified, setInputModified] = useState("");
  const [more, setMore] = useState(true);

  useEffect(() => {
    dispatch(fetchHeroes(limit));
  }, []);

  useEffect(() => {
    if (inputName != "" || inputModified != "") {
      setMore(false);
    } else {
      setMore(true);
    }
  }, [inputName, inputModified]);

  const fetchData = () => {
    setLimit(limit + 20);
    dispatch(fetchHeroes(limit));
  };

  const modalData = (id) => {
    setIdModal(id);
    setModal(true);
  };

  const onChangeModified = (e) => {
    dispatch(setFilter({ name: "modified", value: e.target.value }));
    setInputModified(e.target.value);
  };

  const onChangeName = (e) => {
    dispatch(setFilter({ name: "name", value: e.target.value }));
    setInputName(e.target.value);
  };

  return (
    <InfiniteScroll
      dataLength={heroes.length}
      next={fetchData}
      hasMore={more}
      loader={<Loading />}
    >
      <ContainerBody>
        <ContainerInput>
          <InputField
            type="text"
            name="modified"
            placeholder="Search by Date"
            onChange={onChangeModified}
            value={inputModified}
          />
          <InputField
            type="text"
            name="name"
            placeholder="Seach by Name"
            onChange={onChangeName}
            value={inputName}
          />
        </ContainerInput>
        <ContainerCards>
          {heroes.map((heroe) => {
            return (
              <CardHeroe
                key={heroe.id}
                url={heroe.thumbnail}
                name={heroe.name}
                description={heroe.description}
                modified={heroe.modified}
                onClick={() => modalData(heroe.id)}
              />
            );
          })}
        </ContainerCards>

        {status === "loading" && <Loading />}
        {heroes.length == "" && status !== "loading" && <NotFound />}
      </ContainerBody>
      {modal &&
        heroes
          .filter((heroe) => heroe.id == idmodal)
          .map((hero) => {
            return (
              <Modal
                key={hero.id}
                id={hero.id}
                url={hero.thumbnail}
                name={hero.name}
                description={hero.description}
                modified={hero.modified}
                closeModal={() => setModal(false)}
              />
            );
          })}
    </InfiniteScroll>
  );
}

const ContainerBody = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 600px) {
    padding: 0;
  }
`;
const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: auto;
`;
const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  width: 100%;
  height: 100%;
  margin-top: 10px;
  align-items: center;
  justify-items: center;
  @media (max-width: 950px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
