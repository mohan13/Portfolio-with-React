import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";
import { ContactData } from "./ContactData";
import { Schema } from "../../Schemas/schema";
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
        initialValues={{ email: "", message: "", name: "", subject: "" }}
        validationSchema={Schema}
        onSubmit={(values) => {
          console.log(values);
          emailjs
            .send(
              "service_2jcgfww",
              "template_hbivdo5",
              values,
              "gFoy8Sm4gZDOvc5y-"
            )
            .then(
              (result) => {
                console.log(result.text);
              },
              (error) => {
                console.log(error.text);
              }
            );
        }}
        render={({ errors, handleSubmit, touched }) => {
          return (
            <Form
              className="my-4 md:my-14 bg-white p-6 md:p-10 rounded-md  border-2 grid gap-6"
              onSubmit={handleSubmit}
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
