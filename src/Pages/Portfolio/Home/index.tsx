import { css } from "styled-components";
import { Div } from "../../../components/Tags/Tags";
import COLORS from "../../../components/Colors/Colors";
import { Link } from "react-router-dom";
import sqlimg from "../sqlImg.png";
import Nav from "./HomeNav";
import HomeNav from "./HomeNav";

export default () => {
  return (
    <header>
      <Div
        $css={css`
          width: 280px;
          background-color: #54b689;
          position: fixed;
          left: 0;
          top: 0;
          height: 100vh;

          .person-name {
            color: white;
            font-weight: bold;
            font-size: 1.5rem;
            text-align: center;
          }
          .about-me-info {
            padding: 0 15px 0 15px;
            color: white;
            text-align: center;
          }
        `}
      >
        <p className="person-name">Dilip Ghimire</p>
        <div className="about-me-info">
          <p>
            Hi, my name is Dilip Ghimire. I am a software engineer. welcome to
            my personal website.{" "}
          </p>
        </div>
      </Div>
      <Div
        $css={css`
          background: #fafafa !important;
          padding: 3rem !important;
          margin-left: 280px;
        `}
      >
        body
      </Div>
    </header>
    // <Div
    //   $css={css`
    //     padding: 20px;
    //     text-align: end;
    //     cursor: pointer;

    //     img {
    //       opacity: 0.5;
    //     }
    //   `}
    // >
    //   <div>
    //     <Div
    //       $css={css`
    //         position: absolute;
    //         top: 50%;
    //         width: 40%;
    //         transform: translate(0, -50%);
    //         padding: 10px;
    //         margin-left: 24px;
    //         dt:first-of-type {
    //           color: rgb(166 166 166);
    //           font-size: 4rem;
    //           font-family: serif;
    //         }

    //         dt:nth-of-type(2) {
    //           font-family: serif;
    //           color: rgb(166 166 166);
    //         }

    //         dt:last-of-type {
    //           font-family: serif;
    //           color: ${COLORS.secondary};
    //         }
    //       `}
    //     >
    //       <dl>
    //         <dt>Dilip Ghimire</dt>
    //         <dt>Software Engineer II</dt>
    //         <dt>
    //           As a software developer based in Cincinnati, Ohio, I began my
    //           career as a SQL Developer and have since expanded my skill set to
    //           become a proficient full-stack developer.Over time, I recognized
    //           the importance of gaining expertise in other areas of software
    //           development to enhance my abilities and deliver comprehensive
    //           solutions.
    //         </dt>
    //       </dl>
    //       <a>
    //         <Link to={"../experience"}>See more about me</Link>
    //       </a>
    //     </Div>
    //   </div>
    // </Div>
  );
};
