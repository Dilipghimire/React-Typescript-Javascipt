import styled, { css } from "styled-components";
import { Div } from "../Tags/Tags";
import COLORS from "../Colors/Colors";
import { useState } from "react";
import { useModal } from "../Context/ModalContext";

interface ModalProps {
  $css?: ReturnType<typeof css>;
  title?: string;
  children: any;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const ModalContent = styled.div<ModalProps>`
  background-color: white;
  padding: 0px 16px 24px;
  border-radius: 4px;
  z-index: 999;
  ${({ $css }) => $css};
`;

const Modal: React.FC<ModalProps> = ({ children, title, ...rest }) => {
  const { isModalOpen, toggleModal } = useModal();

  return isModalOpen ? (
    <ModalOverlay>
      <ModalContent {...rest}>
        <Div
          $css={css`
            border-bottom: 1px solid ${COLORS.sliver};
            padding: 8px 0 8px;
            margin-bottom: 16px;
            display: flex;
            justify-content: space-between;

            .close-btn {
              cursor: pointer;
            }

            .title {
              font-weight: 800;
            }
          `}
        >
          <p className="title"> {title} </p>
          <p className="close-btn" onClick={toggleModal}>
            X
          </p>
        </Div>

        {children}
      </ModalContent>
    </ModalOverlay>
  ) : null;
};

export default Modal;
