import React from "react";
import { useField } from "formik";
import styled from "styled-components";

interface RadioProps {
  name: string;
  label: string;
}

const RadioContainer = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const RadioInput = styled.input`
  margin-right: 0.5rem;
`;

const RadioLabel = styled.span`
  font-size: 1rem;
`;

const FormikRadio: React.FC<RadioProps> = ({ name, label }) => {
  const [field] = useField({ name, type: "checkbox" });

  return (
    <RadioContainer>
      <RadioInput type="checkbox" {...field} />
      <RadioLabel>{label}</RadioLabel>
    </RadioContainer>
  );
};

export default FormikRadio;
