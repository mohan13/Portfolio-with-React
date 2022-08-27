import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ContactData } from "./ContactData";
import * as yup from "yup";
export const Schema = yup.object().shape({
  email: yup.string().email().required("Please! Enter you email."),
  message: yup.string().required("Please! Enter you message."),
});
const ContactForm = () => {
  return (
    <div
    className=" flex flex-col px-64 items-center "
    >
      <Formik
        initialValues={{ email: "", message: "", name: "" }}
        validationSchema={{ Schema }}
        render={({ errors, handleSubmit, touched }) => {
          return (
            <Form className="border w-full p-10 rounded-sm " onClick={handleSubmit}>
              {ContactData?.map((val, i) => {
                return (
                  <div key={i}>
                    <Field
                      className="outline-none w-full  text-xl py-4 pl-4 border mb-8"
                      type={val.type}
                      name={val.name}
                      placeholder={val.placeholder}
                    />
                    <ErrorMessage name={val.name} components="div" />
                  </div>
                );
              })}
              <button type="submit">Send message !</button>
            </Form>
          );
        }}
      />
    </div>
  );
};

export default ContactForm;
