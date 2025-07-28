import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import './contact-form.css';


const ContactForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    surname: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().required("Required"),
  });

  return (
    <section id="contact" className="p-4" style={{ background: "#242424" }}>
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold">Contact us</h1>
      </div>

      <Formik
        initialValues={{ name: "", surname: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const payload = {
            name: `${values.name} ${values.surname}`,
            email: values.email,
            message: values.message,
          };

          fetch("https://myportfolio-backend-q6na.onrender.com/api/v1/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          })
            .then((res) => {
              if (!res.ok) throw new Error("Failed");
              return res.json();
            })
            .then(() => {
              alert("Message sent!");
              resetForm();
            })
            .catch(() => alert("Failed to send"))
            .finally(() => setSubmitting(false));
        }}
      >
        {({ errors, touched, isSubmitting, handleChange, values }) => (
          <Form className="p-fluid" style={{ maxWidth: "700px", margin: "auto" }}>
          <div class="formgrid grid">
    <div class="field col">
        <label>First name</label>
        <input name= "name" value={values.name} id="firstname2" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
        
        </input>
    </div>
    
    <div class="field col">
        <label >Lastname</label>
        <input name= "surname" value={values.surname} id="lastname2" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
     onChange={handleChange}
    
                  
              />
                {errors.surname && touched.surname && (
                  <small className="p-error">{errors.surname}</small>
                )}
    
   
    </div>
</div>



            <div className="mb-3">
              <label>Email</label>
              <InputText
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                className={errors.email && touched.email ? "p-invalid" : ""}
              />
              {errors.email && touched.email && (
                <small className="p-error">{errors.email}</small>
              )}
            </div>

            <div className="mb-3">
              <label>How can we help?</label>
              <InputTextarea
                name="message"
                value={values.message}
                onChange={handleChange}
                rows={6}
                autoResize
                className={errors.message && touched.message ? "p-invalid" : ""}
              />
              {errors.message && touched.message && (
                <small className="p-error">{errors.message}</small>
              )}
            </div>

            <Divider />

            <Button
              label="Submit"
              icon="pi pi-send"
              type="submit"
              loading={isSubmitting}
              className="p-button-rounded p-button-lg p-button-secondary"
            />
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactForm;
