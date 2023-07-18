import { Field, Form, Formik } from "formik";
import Button from "../../components/Button/Button";
import FormikInput from "../../components/Formik/FormikInput";
import { useState } from "react";
import { css } from "styled-components";
import * as yup from "yup";
import TodoItems from "./TodoItems";
import FormikSelect from "../../components/Formik/FormikSelect";
import { Div } from "../../components/Tags/Tags";
import FormikCheckbox from "../../components/Formik/FormikCheckbox";

export type ItemsType = {
  itemName: string;
  isCompleted: boolean;
};

const data = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const TodoFormContent = () => {
  return (
    <Div
      $css={css`
        .btn {
          padding-top: 12px;
        }
      `}
    >
      <Form>
        <FormikInput label="Add to List" type="text" name="itemName" />
        <div className="btn">
          <Button
            type="submit"
            $css={css`
              width: 50%;
            `}
          >
            Add
          </Button>
        </div>
      </Form>
    </Div>
  );
};

export default () => {
  const [items, setItems] = useState<ItemsType[]>();

  return (
    <Formik
      initialValues={{ itemName: "", isCompleted: false }}
      validationSchema={yup.object({
        itemName: yup.string().required(),
      })}
      onSubmit={(values, { resetForm }) => {
        setItems((items: ItemsType[] | undefined) => [
          ...(items || []),
          {
            itemName: values.itemName,
            isCompleted: values.isCompleted,
          },
        ]);
        resetForm();
      }}
    >
      <>
        <TodoFormContent />
        <TodoItems items={items} setItems={setItems} />
      </>
    </Formik>
  );
};
