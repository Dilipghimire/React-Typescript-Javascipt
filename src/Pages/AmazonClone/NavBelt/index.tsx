import { Form, Formik, useFormikContext } from "formik";
import { css } from "styled-components";
import AmazonLogo from "../../../SVG/AmazonLogo";
import SearchIcon from "../../../SVG/SearchIcon";
import FormikInput from "../../../components/Formik/FormikInput";
import { Div } from "../../../components/Tags/Tags";
import ToolTip from "../../../components/ToolTip";
import LocationInfo from "./LocationInfo";
import SelectAddressModal from "./Modal/SelectAddressModal";
import ReturnOrder from "./ReturnOrder";
import SelectCategory from "./SelectCategory";
import SingInAccount from "./SingInAccount";
import USAFlag from "../../AmazonClone/NavBelt/Flag.jpg";
import CartIcon from "../../AmazonClone/NavBelt/add-cart.png";
import { useCartItems } from "../../../components/Hooks/GetAllCart";
import { useNavigate } from "react-router-dom";

export type NavBarValues = {
  categoryList: string;
  searchText: string;
  EN: boolean;
  ES: boolean;
};

const MainNavContent = () => {
  const { values, setFieldValue } = useFormikContext<NavBarValues>();
  const { data } = useCartItems();
  const navigate = useNavigate();

  return (
    <Form>
      <SelectAddressModal />
      <Div
        $css={css`
          background: #232f3e;
          display: flex;
          align-items: center;
          .amazon-logo {
            display: flex;
            align-items: center;
            margin-left: 12px;
            cursor: pointer;
            padding: 20px;
            :hover {
              border: 1px solid white;
            }
          }
          .search-text {
            width: 35vw;
          }
          .search-Icon {
            background: #f99237;
            padding: 4px;
          }
          .amz-lang {
            display: flex;
            align-items: center;
            margin-left: 24px;
            cursor: pointer;

            :hover {
              border: 1px solid white;
            }
          }
          img {
            width: 30px;
          }
          .cart {
            display: flex;
            margin-left: 12px;
            cursor: pointer;
            :hover {
              border: 1px solid white;
            }
          }
          p {
            color: white;
          }
        `}
      >
        <Div className="amazon-logo" onClick={() => navigate("/amazon")}>
          <AmazonLogo fill="white" />
        </Div>
        <LocationInfo />
        <Div
          $css={css`
            display: flex;
          `}
        >
          <SelectCategory />
          <Div className="search-text">
            <FormikInput name="searchText" />
          </Div>
          <div className="search-Icon">
            <SearchIcon />
          </div>
        </Div>
        <ToolTip>
          <Div>
            <div className="amz-lang">
              <div>
                <img src={USAFlag} />
              </div>
              <p>
                EN <span>&#9662;</span>
              </p>
            </div>
          </Div>
        </ToolTip>

        <SingInAccount />
        <ReturnOrder />
        <div className="cart" onClick={() => navigate("./cart")}>
          <img src={CartIcon} />
          <p>Cart:</p>
          <p>{data?.filter(({ userId }) => userId === 1)[0].products.length}</p>
        </div>
      </Div>
    </Form>
  );
};

export default () => {
  return (
    <Formik<NavBarValues>
      initialValues={{
        categoryList: "All",
        searchText: "",
        EN: true,
        ES: false,
      }}
      onSubmit={(values, { resetForm }) => {
        //console.log()
      }}
    >
      <MainNavContent />
    </Formik>
  );
};
