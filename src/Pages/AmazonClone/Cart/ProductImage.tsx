import { css } from "styled-components";
import { ProductData } from "../../../components/Hooks/GetAllProducts";
import { Div } from "../../../components/Tags/Tags";

export default ({
  productImage,
}: {
  productImage: ProductData | undefined;
}) => {
  return (
    <Div
      $css={css`
        img {
          width: 75px;
          margin-top: 16px;
        }
      `}
    >
      <img src={productImage?.image} />
    </Div>
  );
};
