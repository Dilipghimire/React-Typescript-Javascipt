import styled, { css } from "styled-components";
import Modal from "../../../../components/Modal";
import { useModal } from "../../../../components/Context/ModalContext";
import Button from "../../../../components/Button/Button";
import { Div } from "../../../../components/Tags/Tags";
import BaseInput from "../../../../components/Formik/FormikInput/BaseInput";

export const TitleSeprator = styled.div`
  p {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #000;
    line-height: 0.1em;
    margin: 10px 0 20px;
  }

  p span {
    background: #fff;
    padding: 0 10px;
  }
`;

export default () => {
  return (
    <Modal
      $css={css`
        width: 450px;
        .signin-btn {
          width: 100%;
          margin-bottom: 16px;
        }
      `}
      title="Choose from the location"
    >
      <p>
        Delivery options and delivery speeds may vary for different locations
      </p>

      <Button className="signin-btn" variant="primary">
        Sign in to see your address
      </Button>
      <TitleSeprator>
        <p>
          <span>or enter us zip code</span>
        </p>
      </TitleSeprator>
      <Div
        $css={css`
          display: flex;
          margin-bottom: 16px;
          button {
            margin-left: 16px;
          }
        `}
      >
        <BaseInput />
        <Button variant="primary">apply</Button>
      </Div>
      <TitleSeprator>
        <p>
          <span>or</span>
        </p>
      </TitleSeprator>

      <Div
        $css={css`
          display: flex;
          justify-content: end;
        `}
      >
        <Button>Done</Button>
      </Div>
    </Modal>
  );
};
