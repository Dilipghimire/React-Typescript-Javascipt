import { useParams } from "react-router-dom";
import { Div } from "../../../components/Tags/Tags";
import { useGetProduct } from "../../../components/Hooks/GetAllProducts";
import { css } from "styled-components";
import StarRatings from "react-star-ratings";
import { FixDecimal } from "../../../components/Util/FixDecimal";
import Button from "../../../components/Button/Button";
import { LoadingIcon } from "../../../SVG/LoadingIcon";
import { useAddToCart } from "../../../components/Hooks/AddNewItem";

export default () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProduct(Number(id));
  const { mutateAsync } = useAddToCart();

  /** userId: number;
  data: string;
  products: { productId: number; quantity: number }[]; */

  return !isLoading ? (
    <Div
      $css={css`
        display: flex;
        margin: 50px 0px 0 60px;
        align-items: center;
        img {
          width: 200px;
          height: 200px;
        }
        .rating {
          display: flex;
          align-items: center;

          .star-ratings {
            padding: 0 10px 0 5px;
          }
        }
        p {
          font-family: fangsong;
          font-size: 35px;
          margin-bottom: 0px !important;
          width: 50vw;
        }
        .price {
          font-family: fangsong;
          font-size: 35px;
        }
      `}
    >
      <img src={data?.image} />
      <Div
        $css={css`
          margin-left: 40px;
          margin-top: 40px;
        `}
      >
        <p>{data?.description}</p>
        {data && (
          <dl>
            <dt className="rating">
              <span>{data?.rating?.rate}</span>
              <div className="star-ratings">
                <StarRatings
                  rating={data?.rating?.rate}
                  starRatedColor="#d15800d1"
                  starDimension="20px"
                  starSpacing="0"
                />
              </div>
              <span>{data?.rating?.count} ratings</span>
            </dt>
            <dt>{data?.category}</dt>
          </dl>
        )}
        <hr />
        {data && (
          <span className="price">List Price: ${FixDecimal(data?.price)}</span>
        )}
        <Div
          $css={css`
            display: grid;
            gap: 16px;
            margin-top: 16px;
            width: 200px;
          `}
        >
          <Button
            onClick={async () => {
              // await mutateAsync({
              //   userId: 1,
              //   date: '2023-07-07T00:00:00.000Z',
              //   products: [{ productId: data?.id || 0, quantity: 1 }],
              // });
            }}
          >
            Add to cart
          </Button>
          <Button>Buy now</Button>
        </Div>
      </Div>
    </Div>
  ) : (
    <LoadingIcon />
  );
};
