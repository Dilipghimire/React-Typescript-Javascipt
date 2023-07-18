import styled from "styled-components";

export default () => {
  const Input = styled.input`
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
    :focus {
      outline: 2px solid #f7b101;
    }
  `;

  return <Input />;
};
