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
    <div className="bg-gray-200 flex flex-col p-4 md:px-52  ">
      <div className="grid md:mt-14 gap-2">
        <div className="font-slogan text-3xl md:text-6xl">Contact me</div>
        <div className="flex flex-col text-sm md:text-lg text-gray-500 gap-3 leading-loose my-4">
          I'm interested in Freelance opportunities-especially ambitious or
          large projects.However,if you have other request or question,don't
          hesitate to use the form.
        </div>
      </div>
      <Formik
        initialValues={{ email: "", message: "", name: "" }}
        validationSchema={Schema}
        render={({ errors, handleSubmit }) => {
          return (
            <Form
              className="my-4 md:my-14 bg-white p-6 md:p-10 rounded-md  border-2 grid gap-6"
              onClick={handleSubmit}
            >
              {ContactData?.map((val, i) => {
                return (
                  <div key={i}>
                    <Field
                      className={`outline-none text-md w-full bg-gray-200 p-4 rounded-sm border1 ${
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
