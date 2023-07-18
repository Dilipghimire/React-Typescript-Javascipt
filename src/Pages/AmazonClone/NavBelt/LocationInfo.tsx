import { css } from "styled-components";
import LocationLogo from "../../../SVG/LocationLogo";
import { Div } from "../../../components/Tags/Tags";
import { useModal } from "../../../components/Context/ModalContext";

export default () => {
    const {toggleModal} = useModal()
  return (
    <Div
      $css={css`
        display: flex;
        align-items: center;
        padding: 0 12px;
        margin: 5px 2px 5px 0;
        cursor: pointer;
        :hover {
          border: 1px solid white;
        }
        dt {
          color: white;
        }
        dt:nth-of-type(2) {
          font-weight: 800;
        }
      `}
      onClick={toggleModal}
    >
      <LocationLogo />
      <dl>
        <dt>Hello</dt>
        <dt>select your address</dt>
      </dl>
    </Div>
  );
};
