import { css } from "styled-components";
import { Div } from "../../../components/Tags/Tags";
import HamburgerMenu from "../../../SVG/HamburgerMenu";

export default () => {
  return (
    <Div
      $css={css`
        border: 1px solid black;
        padding: 5px;
        background: #232f3e;

        .all-item {
          display: flex;
          align-items: center;
          span {
            color: white;
            padding-left: 5px;
          }
        }
      `}
    >
      <div className="all-item">
        <HamburgerMenu />
        <span>All</span>
      </div>
    </Div>
  );
};
