import { css } from "styled-components";
import { LoadingIcon } from "../../../SVG/LoadingIcon";
import { useCartItems } from "../../../components/Hooks/GetAllCart";
import {
  useGetProduct,
  useProductData,
} from "../../../components/Hooks/GetAllProducts";
import { Div } from "../../../components/Tags/Tags";
import ProductImage from "./ProductImage";
import Button from "../../../components/Button/Button";
import FormikSelect from "../../../components/Formik/FormikSelect";
import { Form, Formik } from "formik";
import { useState } from "react";
import { FixDecimal } from "../../../components/Util/FixDecimal";

export default ({
  productId,
  item,
  updateProductsQty,
  handleDelete,
}: {
  productId: number;
  item: { productId: number; quantity: number };
  updateProductsQty: (
    productId: number,
    quantity: number,
    price: number
  ) => void;
  handleDelete: (productId: number, e:any) => void;
}) => {
  const { data: productDetails, isLoading } = useGetProduct(productId);
  const { data: allProduct } = useProductData();

  return (
    <Div
      $css={css`
        p:first-of-type {
          font-weight: 800;
          padding-right: 32px;
        }
        .container-checkout {
          display: flex;
          align-items: center;
        }
        .product-info {
          padding-left: 42px;
        }
      `}
    >
      <div className="container-checkout">
        <ProductImage productImage={productDetails} />
        <div className="product-info">
          <Div
            $css={css`
              display: flex;
              align-items: center;
              font-weight: 800;
            `}
          >
            <p>{productDetails?.description}</p>
            <div>${FixDecimal(Number(productDetails?.price))}</div>
          </Div>
          <span>In Stock</span>
          <Div
            $css={css`
              display: flex;
              button {
                background: none;
                border: none;
                cursor: pointer;
              }
            `}
          >
            <select
              name={`${productDetails?.id} qty`}
              onChange={(e) =>
                updateProductsQty(
                  item?.productId,
                  Number(e.currentTarget.value),
                  Number(productDetails?.price)
                )
              }
              defaultValue={item.quantity}
            >
              {[...Array(10)].map((item, idx) => (
                <option key={idx} value={item}>
                  {idx + 1}
                </option>
              ))}
            </select>
            <button onClick={(e) => handleDelete(item?.productId, e)}>Delete</button>
          </Div>
        </div>
      </div>

      <hr />
    </Div>
  );
};
