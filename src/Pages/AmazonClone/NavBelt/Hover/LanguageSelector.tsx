import styled, { css } from "styled-components";
import { Div } from "../../../../components/Tags/Tags";

type ToolTipProps = {
  text: string;
};

const ToolTipWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const ToolTipContent = styled.div`
  position: absolute;

  ${ToolTipWrapper}:hover & {
    opacity: 1;
    pointer-events: auto;
  }
`;

export default () => {
  return (
    <ToolTipWrapper>
      <ToolTipContent>test</ToolTipContent>
    </ToolTipWrapper>
  );
};
