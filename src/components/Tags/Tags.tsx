import styled, { css } from "styled-components";

interface customProps {
  $css?: ReturnType<typeof css>;
}

export const Div = styled.div<customProps>`
  ${({ $css }) => $css};
`;
