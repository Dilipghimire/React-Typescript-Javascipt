import React from 'react';
import { useField } from 'formik';
import styled from 'styled-components';

interface CheckBoxProps {
  name: string;
  label: string;
}

const CheckBoxContainer = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const CheckBoxInput = styled.input`
  margin-right: 0.5rem;
`;

const CheckBoxLabel = styled.span`
  font-size: 1rem;
`;

const FormikCheckbox: React.FC<CheckBoxProps> = ({ name, label }) => {
  const [field] = useField({ name, type: 'checkbox' });

  return (
    <CheckBoxContainer>
      <CheckBoxInput type="checkbox" {...field} />
      <CheckBoxLabel>{label}</CheckBoxLabel>
    </CheckBoxContainer>
  );
};


export default FormikCheckbox;