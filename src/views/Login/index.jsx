import { withFormik } from "formik";
import { connect } from "react-redux";
import * as yup from "yup";
import { REGEX } from "../../constants";
import { login } from "../../store/actions/userActions";
import LoginForm from "./LoginForm";
import users from "../../store/actions/userActions/types";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .matches(REGEX.EMAIL_REGEX_SCHEMA, "Datos faltantes o incorrectos")
    .max(30)
    .required(" "),
  password: yup
    .string()
    .trim()
    .matches(REGEX.NUMERIC_PASSWORD, "Tipo de dato incorrecto")
    .min(8, "Password debe contener al menos 8 caracteres")
    .max(8, "Password debe contener al menos 8 caracteres")
    .required(" "),
  rememberUser: yup.bool(),
});

const Login = withFormik({
  validateOnChange: true,
  enableReinitialize: false,
  validationSchema,
  mapPropsToValues: ({ email, password, rememberUser }) => ({
    email: email || "",
    password: password || "",
    rememberUser: rememberUser || false,
  }),
  handleSubmit: (value, { props, setErrors, setFieldValue }) => {
    props.login(value).then((res) => {
      let { type } = res;
      type === users.LOGIN_USER_SUCCESS
        ? props.history.push(`/auth/tecnologias`)
        : setErrors("ocurrio un error al iniciar sesión");
    });
  },
})(LoginForm);

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(Login);
