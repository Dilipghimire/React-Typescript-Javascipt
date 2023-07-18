import { css } from "styled-components";
import { Div } from "../../../components/Tags/Tags";

export default () => {
  return (
    <Div
      $css={css`
        dt {
          color: white;
          margin-left: 12px;
          cursor: pointer;
        }
        :hover {
          border: 1px solid white;
        }
      `}
    >
      <dl>
        <dt>Returns</dt>
        <dt>& Orders</dt>
      </dl>
    </Div>
  );
};
