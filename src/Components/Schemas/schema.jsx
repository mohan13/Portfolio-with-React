import * as yup from "yup";
export const Schema = yup.object().shape({
  email: yup.string().email().required("Please! Enter you email."),
  message: yup.string().required("Please! Enter you message."),
  name: yup.string().required("Please! Enter you message."),
});