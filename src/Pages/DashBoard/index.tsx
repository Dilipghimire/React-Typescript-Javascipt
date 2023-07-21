import { css } from "styled-components";
import { Background } from "../TodoApp/Todo";
import { Div } from "../../components/Tags/Tags";
import { Link, NavLink } from "react-router-dom";
import Modal from "../../components/Modal";
import { useState } from "react";
import { useModal } from "../../components/Context/ModalContext";
import Carousel from "../../components/Carousel";

export default () => {
  const { isModalOpen, toggleModal } = useModal();
  const [itemIndex, setItemIndex] = useState(0);

  const data = [
    { id: 1, Name: "BOA" },
    { id: 2, Name: "Amex" },
    { id: 3, Name: "Discovery" },
  ];

  const items = [
    {
      src: "https://picsum.photos/id/123/1200/400",
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: "https://picsum.photos/id/456/1200/400",
      altText: "Slide 2",
      caption: "Slide 2",
      key: 2,
    },
    {
      src: "https://picsum.photos/id/678/1200/400",
      altText: "Slide 3",
      caption: "Slide 3",
      key: 3,
    },
  ];

  return (
    <Div>
      <Div
        $css={css`
          display: grid;
          grid-template-columns: repeat(6, 1fr);

          .app-list {
            cursor: pointer;
          }
        `}
      >
        <Background className="app-list">
          <h3>
            <Link to={"../../todo"}>Todo Demo App</Link>
          </h3>
        </Background>
        <Background className="app-list">
          <h3>
            <Link to={"../../portfolio/dash-board"}>Portfolio</Link>
          </h3>
        </Background>
        <Background className="app-list">
          <h3>
            <Link to={"../amazon/login"}>Amazon Clone</Link>
          </h3>
        </Background>
        <Background className="app-list">
          <h3>
          <Link to={"../weather"}>Weather App</Link>
          </h3>
        </Background>
      </Div>
    </Div>
  );
};
