import { css } from "styled-components";
import { Div } from "../../../components/Tags/Tags";

export default () => {
  return (
    <Div
      $css={css`
        color: white;
        margin-left: 12px;
        cursor: pointer;
        :hover {
          border: 1px solid white;
        }
      `}
    >
      <dl>
        <dt>Hello, sign in</dt>
        <dt>Account & Lists</dt>
      </dl>
    </Div>
  );
};
