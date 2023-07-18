import styled, { css } from "styled-components";
import TodoForm from "./TodoForm";
import { Div } from "../../components/Tags/Tags";
import COLORS from "../../components/Colors/Colors";

export const Background = styled.div<{ $css?: ReturnType<typeof css> }>`
  box-shadow: ${COLORS.sliver} 0px 0px 5px;
  border-radius: 8px;
  padding: 16px;
  margin: 24px;
  ${({ $css }) => $css}
`;

export default () => {
  return (
    <>
      <Div
        $css={css`
          margin-top: 16px;
        `}
      >
        <Background>
          <TodoForm />
        </Background>
      </Div>
    </>
  );
};
