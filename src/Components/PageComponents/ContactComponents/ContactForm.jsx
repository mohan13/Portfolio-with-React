import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ContactData } from "./ContactData";
import * as yup from "yup";
export const Schema = yup.object().shape({
  email: yup.string().email().required("Please! Enter you email."),
  message: yup.string().required("Please! Enter you message."),
  m: yup.string().required("Please! Enter you message."),
});
const ContactForm = () => {
  return (
    <div className="bg-gray-200 flex flex-col md:px-64  ">
      <Formik
        initialValues={{ email: "", message: "", name: "" }}
        validationSchema={Schema}
        render={({ errors, handleSubmit }) => {
          return (
            <Form
              className="my-14 px-10 md:py-14 md:px-24 border-2 grid gap-6"
              onClick={handleSubmit}
            >
              <div className="grid gap-2">
                <div className="font-slogan text-3xl md:text-6xl">
                  Contact me
                </div>
                <div className="flex flex-col text-sm md:text-lg text-gray-500 gap-3 leading-loose my-4">
                  I'm interested in Freelance opportunities-especially ambitious
                  or large projects.However,if you have other request or
                  question,don't hesitate to use the form.
                </div>
              </div>
              {ContactData?.map((val, i) => {
                return (
                  <div key={i}>
                    <Field
                      className={`outline-none text-md w-full py-2  pl-4 border1 ${
                        i === ContactData.length - 1 ? "h-40" : ""
                      }`}
                      as={val.as}
                      type={val.type}
                      name={val.name}
                      placeholder={val.placeholder}
                    />
                    <ErrorMessage
                      className=" text-red-400"
                      name={val.name}
                      component={"div"}
                    />
                  </div>
                );
              })}
              <button
                className="border transition duration-300  hover:bg-black hover:text-white border-2 w-36 rounded-sm border-black px-4 py-2 text-sm"
                type="submit"
              >
                Send message !
              </button>
            </Form>
          );
        }}
      />
    </div>
  );
};

export default ContactForm;
