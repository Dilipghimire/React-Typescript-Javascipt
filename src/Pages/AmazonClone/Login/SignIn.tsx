import { css } from "styled-components";
import AmazonLogo from "../../../SVG/AmazonLogo";
import { Div } from "../../../components/Tags/Tags";
import FormikInput from "../../../components/Formik/FormikInput";
import { Form, Formik, useFormikContext } from "formik";
import Button from "../../../components/Button/Button";
import { TitleSeprator } from "../NavBelt/Modal/SelectAddressModal";
import { useLogin } from "../../../components/Hooks/Login";
import { useNavigate } from "react-router-dom";

type LoginType = {
  username: string;
  password: string;
};

const SignInContent = () => {
  return (
    <Form>
      <span>
        UserName
        <FormikInput name="username" />
      </span>
      <span>
        password
        <FormikInput name="password" type="password" label="password" />
      </span>
      <Div
        $css={css`
          margin-top: 8px;
        `}
      >
        <Button type="submit">Sign in</Button>
      </Div>
    </Form>
  );
};

export default () => {
  const { mutateAsync, isLoading, isError, isSuccess, error } = useLogin();

  return (
    <Div
      $css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <Formik<LoginType>
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          try {
            await mutateAsync({ ...values });
           
          } catch (e) {
            console.log(e);
          }
        }}
      >
        <Div
          $css={css`
            .logo {
              margin-top: 32px;
              display: flex;
              justify-content: center;
            }

            .main-container {
              margin-top: 12px;
            }
            .container {
              border: 1px solid lightGrey;
              padding: 20px;
              width: 230px;
            }
          `}
        >
          <div className="logo">
            <AmazonLogo fill="Black" />
          </div>
          <div className="main-container">
            <div className="container">
              <h2>Sign in</h2>
              <SignInContent />
            </div>
          </div>
          <TitleSeprator>
            <p>
              <span>New to Amazon?</span>
            </p>
          </TitleSeprator>
          <Button type="button">Create your amazon account</Button>
        </Div>
      </Formik>
    </Div>
  );
};
