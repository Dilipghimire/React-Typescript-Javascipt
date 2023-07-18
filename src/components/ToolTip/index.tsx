import styled, { css } from "styled-components";
import { Div } from "../Tags/Tags";
import { useEffect, useState } from "react";
import { useFormik, useFormikContext } from "formik";
import FormikRadio from "../Formik/FormikRadio";
import { NavBarValues } from "../../Pages/AmazonClone/NavBelt";

const ToolTipWrapper = styled.div`
  position: relative;
  display: inline-block;
`;
const ToolTipContent = styled.div`
  position: absolute;
  border: 1px solid silver;
  background: #fbfbfb;
  width: 180px;
  padding: 20px;
  margin-left: 24px;
  z-index: 999;
`;

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ({ children }: { children: any }) => {
  const [hoverToolTip, setHoverToolTip] = useState(false);
  const { values, setFieldValue } = useFormikContext<NavBarValues>();

  useEffect(() => {
    if (values.EN === true) {
      setFieldValue("ES", false);
    }
    if (values.ES === true) {
      setFieldValue("EN", false);
    }
  }, [values]);

  return (
      <ToolTipWrapper
        onMouseEnter={() => setHoverToolTip(true)}
        onMouseLeave={() => setHoverToolTip(false)}
      >
        {children}

        {hoverToolTip && (
          <ToolTipContent>
            <Div
              $css={css`
                width: 0px;
                height: 0;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-bottom: 10px solid #fbfbfb;
                position: absolute;
                top: -10px;
                margin-left: 28px;
              `}
            />
            <FormikRadio label="English - EN" name="EN" />
            <hr />
            <FormikRadio label="Espanol - ES" name="ES" />
            <hr />
            <a href="#">Learn more</a>
          </ToolTipContent>
        )}
      </ToolTipWrapper>
  );
};
