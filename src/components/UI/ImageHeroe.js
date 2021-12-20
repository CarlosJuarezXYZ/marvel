import styled from "@emotion/styled";

export default function ImagenHeroe({url}) {
  return <StyledHeroe url={url} />;
}

const StyledHeroe = styled.div`
  width: 100%;
  height: 250px;
  border: none;
  background-image: url(${(props) => `${props.url.path}.${props.url.extension}`});
  background-size: 100% 100%;
  border-radius: 10px;
`;
