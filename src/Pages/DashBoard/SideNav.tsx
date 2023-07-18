import { css } from "styled-components";
import { Div } from "../../components/Tags/Tags";

export default () => {
  return (
    <Div
      $css={css`
        height: 100%;
        padding: 20px;
        width: 20%;
        border: 1px solid red;
        background: black;
        position: absolute;
        z-index: 3;
      `}
    >
      Hello
    </Div>
  );
};
