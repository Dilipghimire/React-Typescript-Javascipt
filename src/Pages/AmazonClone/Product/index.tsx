import { css } from "styled-components";
import { Div } from "../../../components/Tags/Tags";
import StarRatings from "react-star-ratings";
import useCategories from "../../../components/Hooks/GetAllCategory";
import { useNavigate } from "react-router-dom";
import { useProductData } from "../../../components/Hooks/GetAllProducts";
import { FixDecimal } from "../../../components/Util/FixDecimal";
import { LoadingIcon } from "../../../SVG/LoadingIcon";

export default () => {
  const { data, isLoading } = useProductData();
  const navigate = useNavigate();

  return !isLoading ? (
    <Div
      $css={css`
        margin: 20px 16px 0px 16px;
      `}
    >
      <Div
        $css={css`
          border: 1px solid lightgrey;
          padding: 16px 0px 16px 10px;
          display: flex;
          justify-content: center;
          color: white;
          background: rgb(233 74 101);
          padding: 40px;
          font-size: 45px;
        `}
      >
        Fourth of July Sale
      </Div>
      <Div
        $css={css`
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          cursor: pointer;
        `}
      >
        {data &&
          data?.length > 0 &&
          data?.map((item) => (
            <Div
              key={item.id}
              $css={css`
                border: 1px solid lightgrey;
                width: 220px;
                padding: 12px;
                margin-top: 20px;
                img {
                  width: 100%;
                }

                dt:nth-of-type(1) {
                  font-size: 12px;
                  font-family: fangsong;
                }

                dt:last-of-type {
                  font-size: 16px;
                  font-family: fantasy;
                  color: green;
                  font-weight: 800;
                }
              `}
              onClick={() => navigate(`./product/${item.id}`)}
            >
              <img src={item.image} />
              <dl>
                <dt>{item.title}</dt>
                <hr />

                <dt>
                  {data && (
                    <StarRatings
                      rating={item.rating.rate}
                      starRatedColor="#d15800d1"
                      starDimension="20px"
                      starSpacing="0"
                    />
                  )}
                  {item.rating?.count}
                </dt>
                <dt>List Price: {FixDecimal(item.price)}</dt>
              </dl>
            </Div>
          ))}
      </Div>
    </Div>
  ) : (
    <LoadingIcon />
  );
};
