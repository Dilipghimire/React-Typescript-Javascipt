import { css } from "styled-components";
import { Div } from "../../../components/Tags/Tags";
import COLORS from "../../../components/Colors/Colors";
import { Link } from "react-router-dom";
import sqlimg from "../sqlImg.png";
import Nav from "./HomeNav";
import HomeNav from "./HomeNav";

export default () => {
  return (
    <Div
      $css={css`
        padding: 20px;
        text-align: end;
        cursor: pointer;

        img {
          opacity: 0.5;
        }
      `}
    >
      <div>
        <Div
          $css={css`
            position: absolute;
            top: 50%;
            width: 40%;
            transform: translate(0, -50%);
            padding: 10px;
            margin-left: 24px;
            dt:first-of-type {
              color: rgb(166 166 166);
              font-size: 4rem;
              font-family: serif;
            }

            dt:nth-of-type(2) {
              font-family: serif;
              color: rgb(166 166 166);
            }

            dt:last-of-type {
              font-family: serif;
              color: ${COLORS.secondary};
            }
          `}
        >
          <dl>
            <dt>Dilip Ghimire</dt>
            <dt>Software Engineer II</dt>
            <dt>
              As a software developer based in Cincinnati, Ohio, I began my
              career as a SQL Developer and have since expanded my skill set to
              become a proficient full-stack developer.Over time, I recognized
              the importance of gaining expertise in other areas of software
              development to enhance my abilities and deliver comprehensive
              solutions.
            </dt>
          </dl>
          <a>
            <Link to={"../experience"}>See more about me</Link>
          </a>
        </Div>
      </div>
    </Div>
  );
};
