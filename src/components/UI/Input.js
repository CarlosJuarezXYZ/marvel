import styled from "@emotion/styled";
import { colors } from "../../ui";

export default function InputField({
  name,
  value,
  type,
  placeholder,
  onChange,
}) {
  return (
    <StyledInput
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    ></StyledInput>
  );
}

const StyledInput = styled.input`
  height: 48px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 21px;
  color: ${colors.text};
  padding: 0 15px;
  border-radius: 10px;
  border: none;
  width: 35%;
  background: ${colors.bgInput};
  border: 1px solid ${colors.border};

  &::placeholder {
    color: ${colors.placeHolder};
  }
  &:focus {
    outline: none;
    border: 1px solid ${colors.focus};
  }
`;
