import styled, { css } from "styled-components";
import { Div } from "../Tags/Tags";
import COLORS from "../Colors/Colors";
import { useState } from "react";
import { useModal } from "../Context/ModalContext";

interface SideModalProps {
  $css?: ReturnType<typeof css>;
  title?: string;
  children: any;
  id: string
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
`;

const ModalContent = styled.div<SideModalProps>`
  background-color: white;
  padding: 0px 16px 24px;
  border-radius: 4px;
  width: 350px;
  heigth: 100vh;
  ${({ $css }) => $css};
`;

const SideDrawer: React.FC<SideModalProps> = ({ children, title, id, ...rest }) => {
  const { isModalOpen, toggleModal } = useModal();

  return (
    <ModalOverlay>
      <ModalContent  id ={id} {...rest}>
        <Div
          $css={css`
            border-bottom: 1px solid ${COLORS.sliver};
            padding: 8px 0 8px;
            margin-bottom: 16px;
            display: flex;
            justify-content: space-between;
          `}
        >
          <p> {title} </p>
          <p onClick={toggleModal}>X</p>
        </Div>

        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default SideDrawer;
