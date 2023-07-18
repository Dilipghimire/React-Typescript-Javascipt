import { css } from "styled-components";
import { Div } from "../../../components/Tags/Tags";
import { useCartItems } from "../../../components/Hooks/GetAllCart";
import {
  useGetProduct,
  useProductData,
} from "../../../components/Hooks/GetAllProducts";
import CheckoutProducts from "./CartProducts";
import { LoadingIcon } from "../../../SVG/LoadingIcon";
import { useEffect, useState } from "react";
import { FixDecimal } from "../../../components/Util/FixDecimal";
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import Checkout from "../Checkout";

export default () => {
  const { data, isLoading } = useCartItems();
  const { data: allProduct } = useProductData();
  const products = data?.filter(({ userId }) => userId === 1)[0].products;
  const [updatedQty, setUpdatedQty] = useState(products);
  const productIds = updatedQty?.map((item) => item.productId);
  const priceData = allProduct?.filter((item) => productIds?.includes(item.id));
  const quantity = updatedQty?.map((item) => item);

  useEffect(() => {
    if (products) {
      setUpdatedQty(products);
    }
  }, [products]);

  const updateProductsQty = (
    productId: number,
    quantity: number,
    price: number
  ) => {
    setUpdatedQty(
      updatedQty?.map((item) =>
        item.productId === productId
          ? {
              ...item,
              quantity: quantity,
              price: price,
            }
          : item
      )
    );
  };

  const handleDelete = (productId: number, e: any) => {
    e.preventDefault();
    setUpdatedQty(updatedQty?.filter((item) => item?.productId !== productId));
  };

  const totalItems = quantity?.reduce((accumulator, currentValue: any) => {
    return accumulator + currentValue.quantity;
  }, 0);

  const subTotal = quantity?.reduce(
    (accumulator, currentValue: any, index: number) => {
      return (
        accumulator +
        Number(priceData?.[index].price || 0) * Number(currentValue.quantity)
      );
    },
    0
  );

  return (
    <>
      {isLoading ? (
        <LoadingIcon />
      ) : (
        <Div
          $css={css`
            display: flex;
            justify-content: space-evenly;
            h1 {
              margin-top: 32px;
            }
            .cart-item-container {
              background: whitesmoke;
              padding: 40px;
              width: 550px;
            }
            .sub-total {
              display: flex;
              justify-content: end;
              p {
                padding-right: 20px;
              }
            }
          `}
        >
          <Div>
            <h1>Shopping Cart</h1>

            <div className="cart-item-container">
              {updatedQty &&
                updatedQty.map((item: any) => (
                  <CheckoutProducts
                    key={item.productId}
                    productId={item.productId}
                    item={item}
                    updateProductsQty={updateProductsQty}
                    handleDelete={handleDelete}
                  />
                ))}
              <div className="sub-total">
                <p>
                  Subtotal({totalItems} items) :{" "}
                  <strong>${FixDecimal(subTotal || 0)}</strong>
                </p>
              </div>
            </div>
          </Div>
          <Div>
            <h1>Payment</h1>
            <Checkout />
          </Div>
        </Div>
      )}
    </>
  );
};
