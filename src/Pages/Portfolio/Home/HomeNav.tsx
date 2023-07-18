import { Link } from "react-router-dom";
import { Div } from "../../../components/Tags/Tags";
import { css } from "styled-components";

export default () => {
  return (
    <Div
      $css={css`
        display: flex;
        justify-content: end;
        padding: 12px;
        border-radius: 5px;
        box-shadow: 1px -3px 9px #aaaaaa;
        a {
          font-size: 1.2rem;
          font-family: serif;
          margin-right: 10px;
          font-weight: 700;
        }
      `}
    >
      <nav>
        <a>
          <Link to={"/portfolio/dash-board"}>Home</Link>
        </a>
        <a>
          <Link to={"/portfolio/experience"}>Resume</Link>
        </a>
        <a>
          <Link to={"/portfolio/education"}>Education</Link>
        </a>
      </nav>
    </Div>
  );
};
