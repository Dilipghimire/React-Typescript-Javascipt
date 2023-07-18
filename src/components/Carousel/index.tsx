import styled, { css } from "styled-components";
import { Div } from "../Tags/Tags";
import { useState } from "react";
import RightArrow from "../../SVG/RightArrow";
import COLORS from "../Colors/Colors";

export default ({
  children,
  items,
  itemIndex,
  setItemIndex,
}: {
  children: any;
  items: { src: string; altText: string; caption: string; key: number }[];
  itemIndex: number;
  setItemIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleNext = () => {
    setItemIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    setItemIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <Div
      $css={css`
      width: 800px;
      border: 1px solid lightgrey;
      position: relative;
        }
        img {
          width: 100%;
        }
      
      `}
    >
      {children}
      <Div
        $css={css`
          position: absolute;
          left: 5%;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
          div {
            transform: rotate(180deg);
            cursor: pointer;
          }
        `}
      >
        {itemIndex !== 0 && (
          <div onClick={handlePrevious}>
            <RightArrow fill={COLORS.warning} />
          </div>
        )}
      </Div>
      <Div
        $css={css`
          position: absolute;
          right: 5%;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
          cursor: pointer;
        `}
      >
        {itemIndex !== items.length - 1 && (
          <div onClick={handleNext}>
            <RightArrow fill={COLORS.warning} />
          </div>
        )}
      </Div>
    </Div>
  );
};
