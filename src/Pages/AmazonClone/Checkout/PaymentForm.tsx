import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Div } from "../../../components/Tags/Tags";
import styled, { css } from "styled-components";
import { useState } from "react";
import Button from "../../../components/Button/Button";

const CardInputWrapper = styled.div`
  border: 1px solid lightgrey;
  border-radius: 8px;
  padding: 12px 4px;
  width: 350px;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 12px;
`;

export default () => {
  const [error, setError] = useState("");

  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
  };

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setError(error?.message || "");
      console.log("Payment error:", error);
    } else {
      console.log("Payment successful:", paymentMethod);
      // You can handle the successful payment here, e.g., make an API call to your backend
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardInputWrapper>
          <CardElement options={CARD_ELEMENT_OPTIONS} />
        </CardInputWrapper>

        <Div
          $css={css`
            margin-top: 12px;
          `}
        >
          <Button type="submit" disabled={!stripe}>
            Pay
          </Button>
        </Div>
      </form>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};
