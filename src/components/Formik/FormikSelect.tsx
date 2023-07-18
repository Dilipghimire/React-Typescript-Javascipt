import { useField, useFormikContext } from "formik";
import styled, { css } from "styled-components";
import { Div } from "../Tags/Tags";
import { useState } from "react";
import COLORS from "../Colors/Colors";

const DropDownContainer = styled.div`
  option {
    padding: 8px;
    cursor: pointer;

    :hover {
      background: ${COLORS.light};
      padding: 8px;

    }
  }

  .selected-item {
    box-shadow: ${COLORS.sliver} 0px 0px 4px;
    padding: 10px;
    text-align: end;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    background: white;
    border: 1px solid ${COLORS.sliver};
  }

  label {
    margin-bottom: 8px;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 0.5rem;
`;

interface DropdownProps {
  label: string;
  name: string;
  children: any;
}

const FormikSelect: React.FC<DropdownProps> = ({ label, name, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { values, setFieldValue } = useFormikContext<any>();
  const [field, meta] = useField(name);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setFieldValue(name, value);
    setIsOpen(false);
  };

  return (
    <DropDownContainer>
      <label htmlFor={name}>{label}</label>
      <Div>
        <div
          className="selected-item"
          {...field}
          id={name}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{values[name]}</span>
          <span
            aria-expanded="true"
            className={`arrow ${isOpen ? "open" : ""}`}
          >
            &#9662;
          </span>
        </div>

        {isOpen && (
          <Div
            className="options-value"
            onClick={(e: any) => handleSelectChange(e)}
            $css={css`
              position: absolute;
              height: 80vh;
              overflow-y: scroll;
              z-index: 999;

            `}
          >
            {children}
          </Div>
        )}
        {meta.touched && meta.error && (
          <ErrorMessage>{meta.error}</ErrorMessage>
        )}
      </Div>
    </DropDownContainer>
  );
};

export default FormikSelect;
