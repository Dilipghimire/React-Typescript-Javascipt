import { css } from "styled-components";
import { Div } from "../../../components/Tags/Tags";
import { useState } from "react";
import COLORS from "../../../components/Colors/Colors";
import webImage from "../webDev.png";
import reactImage from "../reactimage.png";
import cImage from "../cImage.png";
import sqlImage from "../sqlImg.png";
import gitImage from "../gitImg.png";
import js from "../jsImage.png";
import ts from "../typeImage.png";
import sqllogo from "../sqlIogo.jpeg";
import etlImage from "../etlImg.jpeg";
import HomeNav from "../Home/HomeNav";

export default () => {
  const [toggleSummary, setToogleSummary] = useState(true);

  const handleToggle = () => {
    setToogleSummary((prevToggle) => !prevToggle);
  };

  return (
    <Div
      $css={css`
        display: flex;
        img {
          width: 10rem;
          margin-top: 30px;
        }
      `}
    >
      <Div
        $css={css`
          margin: 20px;
          border-radius: 15px;
          box-shadow: 0px 0px 5px ${COLORS.sliver};
          padding: 10px;

          h3 {
            text-align: start;
            padding-left: 20px;
            cursor: pointer;
            color: ${COLORS.grey};
            font-family: serif;
          }
          p {
            text-align: start;
            padding-left: 20px;
            font-family: serif;
            color: ${COLORS.secondary};
          }
          h4 {
            color: ${COLORS.grey};
            font-family: serif;
            text-align: start;
            padding-left: 20px;
          }
        `}
      >
        <h3 onClick={handleToggle}>Summary {toggleSummary ? "-" : "+"}</h3>
        {toggleSummary && (
          <p>
            Experienced software engineer with a strong attention to detail,
            specializing in information technology and services. Proficient in
            agile full-stack development, utilizing SQL Server, JavaScript,
            Typescript, C#, HTML, CSS, Bootstrap, Reactstrap, APIs, and data
            transformation. Skilled in version control systems like GIT and SVN,
            as well as continuous integration tools such as Jenkins and
            TeamCity. Committed to delivering top-notch software products. Holds
            a Bachelor’s degree in Computer Information Systems.
          </p>
        )}

        <h3>Experience</h3>
        <hr />
        <h4>
          Azibo (San Francisco, CA), Frontend Software Engineer II : Feb 2022 –
          May 2023
        </h4>
        <p>
          - Collaborated with a cross-functional team to develop a tenant and
          landlord application with integrated accounting services.
          <br /> - Implemented responsive and user-friendly front-end interfaces
          using React and TypeScript, ensuring optimal performance and
          usability. <br />- Developed reusable UI components and maintained a
          consistent design system throughout the application.
          <br /> - Worked closely with UX/UI designers to translate wireframes
          and mockups into interactive web pages. <br />- Conducted code reviews
          and implemented best practices to ensure code quality,
          maintainability, and scalability.
          <br /> - Participated in agile development processes, including sprint
          planning, daily stand-ups, and retrospectives.
          <br /> - Collaborated with the backend team to define API requirements
          and resolve integration issues.
          <br /> - Assisted in troubleshooting and debugging issues, providing
          timely solutions to meet project deadlines.
        </p>

        <hr />
        <h4>
          Zywave Inc. (Milwaukee, WI), Software Engineer II : July 2021 – Feb
          2022
        </h4>
        <p>
          - Worked within Agile Development Methodologies, including Scrum, Epic
          Envisioning, Grooming, Retro, Demo, and Backlog refining. <br />
          - Developed web applications using Vue and React frameworks,
          leveraging JavaScript and TypeScript.
          <br />
          - Enhanced the ELT (Extract, Load, Transform) process, resulting in a
          30% performance improvement. <br />- Managed a C# application and
          customized it to meet the data provider's requirements for extracting
          data from their database. <br />
          - Utilized Azure Data Factory to load and transform data in SQL tables
          through web applications. <br />
          - Collaborated with team members to plan, design, and develop new
          projects, adopting new technologies such as Azure, Azure Data Factory,
          Vue, React, JavaScript, TypeScript, and .NET. <br />- Acted as a
          mentorfor junior and peer programmers within the team. <br />
        </p>
        <hr />
        <h4>
          IHS Markit (Boulder, CO) Full Stack Software Engineer II: Oct 2017 –
          July 2021
        </h4>
        <p>
          - I have worked as a Full Stack Web Developer, taking responsibility
          for both front-end and back-end development tasks. <br />
          - I am proficient in creating components using popular JavaScript
          frameworks like React with Javascript and TypeScript. <br />
          - Throughout my career, I have successfully planned, developed,
          tested, deployed, and maintained various web applications. <br />
          - I possess expertise in creating, updating, and optimizing stored
          procedures using SQL. <br />
          - I am experienced in retrieving and aggregating data from multiple
          sources and vendors, including FTP and SFTP. <br />
        </p>
        <hr />
        <h4>
          Revenue Solution Inc (Jefferson City, MO) SQL Developer : July 2016 –
          June 2017
        </h4>
        <p>
          - I effectively translated client requirements into comprehensive
          application designs and system requirements. By thoroughly
          understanding the clients' needs, I ensured the successful development
          and implementation of web applications. <br />
          - I proficiently wrote stored procedures, functions, and views. These
          components were essential in maintaining SQL databases and enabling
          efficient data retrieval and manipulation. Utilizing a wide range of
          SQL statements, I ensured optimal performance and integrity of the
          databases. <br />
          - I diligently debugged and optimized SQL statements. This involved
          analyzing the execution plans, fine-tuning queries, and addressing any
          underlying problems that impacted the performance or functionality of
          the application. <br />
          - leveraged SSIS (SQL Server Integration Services) to seamlessly load
          data from diverse sources into the database tables. This allowed for
          efficient data integration, transformation, and synchronization,
          ensuring the accuracy and consistency of information within the
          applications. <br />
        </p>
      </Div>
      <span>
        <img src={sqlImage} />
        <img src={reactImage} />
        <img src={cImage} />
        <img src={gitImage} />
        <img src={js} />
        <img src={ts} />
        <img src={sqllogo} />
        <img src={etlImage} />
      </span>
    </Div>
  );
};
