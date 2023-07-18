import { css } from "styled-components";
import { Div } from "../../components/Tags/Tags";
import { Background } from "./Todo";
import Button from "../../components/Button/Button";
import COLORS from "../../components/Colors/Colors";
import { ItemsType } from "./TodoForm";
import { Dispatch, SetStateAction } from "react";

export default ({
  items,
  setItems,
}: {
  items: ItemsType[] | undefined;
  setItems: Dispatch<SetStateAction<ItemsType[] | undefined>>;
}) => {
  const handleDeleteItem = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: ItemsType,
    index: number
  ) => {
    setItems(items?.filter((item, idx) => idx !== index));
  };

  const handleCompleteItem = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: ItemsType,
    index: number
  ) => {
    setItems(
      items &&
        items.map((item, idx) => {
          return idx === index ? { ...item, isCompleted: true } : item;
        })
    );
  };

  return (
    <Div
      $css={css`
        margin-top: 24px;
        .item-list {
          margin-top: 16px;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          column-gap: 8px;
          border: 1px solid ${COLORS.sliver};
          padding: 8px;
        }
      `}
    >
      {items && items?.length > 0 && <h1>List of todo lists</h1>}
      {items &&
        items.map((item, index) => {
          return (
            <Div
              className="item-list"
              $css={css`
                p {
                  font-family: serif;
                  grid-column-start: span 4;
                  text-align: justify;
                  text-decoration: ${item.isCompleted ? `line-through` : ""};
                  text-decoration-color: ${item.isCompleted
                    ? COLORS.danger
                    : ""};
                  text-decoration-width: 20px;
                }
              `}
            >
              <p>{item.itemName}</p>
              <Button
                variant="primary"
                $css={css`
                  grid-column-start: 5;
                `}
                type="button"
                onClick={(e) => handleCompleteItem(e, item, index)}
                disabled={item.isCompleted}
              >
                {item.isCompleted ? `Completed` : `Complete`}
              </Button>
              <Button
                variant="danger"
                type="button"
                $css={css`
                  grid-column-start: 6;
                `}
                onClick={(e) => handleDeleteItem(e, item, index)}
              >
                Delete
              </Button>
            </Div>
          );
        })}
    </Div>
  );
};
