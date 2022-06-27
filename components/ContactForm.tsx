import React, { createRef, FC, useRef, useState,  } from "react";
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios"
import emailjs from '@emailjs/browser';



const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required(),
    name: Yup.string().required().max(30),
    subject: Yup.string().required().max(250),
    message: Yup.string().required().max(250),
});


const renderError = (message:string) => <p className="form-helper">{message}</p>;


const onSubmit = async (values:any) => {
    alert(JSON.stringify(values, null, 2));
};

const sleep = (ms:number) => new Promise((r) => setTimeout(r, ms));



const ContactForm = (): JSX.Element => {


    const recaptchaRef = useRef<ReCAPTCHA>(null);


    const [isSubmitted, setIsSubmitted] = useState(false)
    const [submissionFailed, setSubmissionFailed] = useState(false)

    if(isSubmitted){
        return (
            <div className="flex flex-col gap-8 flex-1 p-8 rounded-sm bg-custom-accent-primary">
                <h3 className=" text-custom-primary">Form successfully submitted 🎉</h3>
                <p className=" text-custom-faded-dark">Thank you for getting in touch. I&#39;ll do my best to reply to you as soon as possible. </p>
            </div>
        )
    }else{
        return (
            <Formik   
                key='form2'
                initialValues={{
                    email: '',
                    name: '',
                    subject: '',
                    message: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={ async (values, { resetForm }) => {
                    await sleep(500);

                    if(recaptchaRef.current !== null){
                        const token = await recaptchaRef.current.executeAsync();

                        console.log(token);
                        
                        await axios({
                            method: "POST",
                            url: "/api/recaptcha",
                            data: {
                                token: token
                            },
                            withCredentials: false
                        }).then((response) => {
                            if (response.data.success) {

                                const sendValues = {...values, date: new Date()}
                                
                                emailjs.send("service_5qfjjtl", "template_b8eywuu", sendValues, process.env.NEXT_PUBLIC_EMAILJS_USER)
                                .then((result: any) => {
                                setIsSubmitted(true)
                                setSubmissionFailed(false)
                                resetForm();
                                }, (error: any) => {
                                    setSubmissionFailed(true)
                                });
                            } else {
                                setSubmissionFailed(true)

                            }
                        })
                    }
            
                    // await onSubmit(values);
                    // resetForm();
                }}
            > 
                {(props) => {

                return (
                    <>
                    {submissionFailed && 
                    <div>
                        <h3 className=" text-custom-white my-4">Oh no! Something went wrong, please try again.</h3>
                    </div>}
                        <Form key={'contactForm'} className="w-full flex  flex-col gap-8 " >


                            <div className="wrap flex flex-col lg:flex-row gap-8 w-full">
                                <div className={`field-group  `} >
                                    <label className="hidden" htmlFor="name">Full name*</label>
                                    <Field
                                        className={`form-input `}
                                        id="name"
                                        name="name"
                                        placeholder="Your name*"
                                        type="text"
                                        aria-label="name"
                                    />
                                    <ErrorMessage name="name" render={renderError} />
                                </div>
                                <div className={`field-group  `} >
                                    <label className="hidden" htmlFor="email">Email address*</label>
                                    <Field
                                        className={`form-input `}
                                        id="email"
                                        name="email"
                                        placeholder="Your email*"
                                        type="email"
                                        aria-label="email"
                                    />
                                    <ErrorMessage name="email" render={renderError} />
                                </div>
                            </div>
                            <div className={`field-group  `} >
                                <label className="hidden" htmlFor="subject">Reason for getting in touch*</label>
                                <Field
                                    className={`form-input `}
                                    id="subject"
                                    name="subject"
                                    placeholder="Reason for getting in touch*"
                                    type="text"
                                    aria-label="subject"
                                />
                                <ErrorMessage name="subject" render={renderError} />
                            </div>
                            <div className={`field-group  `} >
                                <label className="hidden" htmlFor="message">Message*</label>
                                <Field
                                    className={`form-input `}
                                    id="message"
                                    name="message"
                                    placeholder="Your message*"
                                    as="textarea"
                                    aria-label="message"
                                />
                                <ErrorMessage name="message" render={renderError} />
                            </div>

                            
                            <div className={`field-group `}>
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY as string}
                                    size="invisible"
                                />
                                <button className={`flex-1 btn-ghost `}  type="submit">Send your response</button>
                            </div>
                        </Form>
                    </>
                )

                }}
            </Formik>
        );
    }

};

export default ContactForm;