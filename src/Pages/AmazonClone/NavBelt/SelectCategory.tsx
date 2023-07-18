import { css } from "styled-components";
import FormikSelect from "../../../components/Formik/FormikSelect";
import { Div } from "../../../components/Tags/Tags";
import DropDownList from "../MockData/DropDownList";

export default () => {
  return (
    <Div
      $css={css`
        overflow: auto;
        font-size: 0.8rem;
        option {
          background: #f2f2f2;
          font-size: 0.8rem;
        }
      `}
    >
      <FormikSelect label="" name="categoryList">
        {DropDownList &&
          DropDownList.dropDownData.map((item, idx) => (
            <option key={idx} value={item}>
              {item}
            </option>
          ))}
      </FormikSelect>
    </Div>
  );
};
