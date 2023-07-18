import React from "react";
import { useField } from "formik";
import styled, { css } from "styled-components";

type InputType = "text" | "number" | "currency" | "decimal"|"password";

interface CustomInputProps {
  type?: InputType;
  name: string;
  placeholder?: string;
  label?: string;
  $css?: ReturnType<typeof css>;
  error?: string;
}

const InputWrapper = styled.div``;

const Input = styled.input<CustomInputProps>`
  padding: 0.6rem;
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;

  ${({ $css }) => $css};
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

const CustomInput: React.FC<CustomInputProps> = ({
  type = "text",
  ...props
}) => {
  const [field, meta] = useField(props.name);

  return (
    <InputWrapper>
      <Input type={type} {...field} {...props} />
      {meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
    </InputWrapper>
  );
};

export default CustomInput;
