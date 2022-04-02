import { useRef, useState } from "react";
import styles from "../../styles/guests/add.module.scss";

import { ToastContainer, toast } from "react-toastify";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../services/axios.js";
import { useRouter } from "next/router";
import { Form } from "@unform/web";
import Link from "next/link";
import * as yup from "yup";

import { toastDefaultConfig } from "../../Globals/config/toast/index.js";
import { TextInput } from "../../Components/Inputs/TextInput/Index";
import InputMask from "../../Components/Inputs/InputMask/Index";
import { Loading } from "../../Components/Loading/Index";

export default function Guests() {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(data) {
    const errors = {};
    const schema = yup.object().shape({
      firstName: yup.string().required("please, say your first name!"),
      lastName: yup.string().required("please, say your last name!"),
      email: yup
        .string()
        .email("please, say a valid email!")
        .required("please, say your email!"),
      phoneNumber: yup.string().required("please, say your phone number!"),
      address: yup.string().required("please, say your address!"),
      country: yup.string().required("please, say your country!"),
      state: yup.string().required("please, say your state!"),
    });
    try {
      await schema.validate(data, { abortEarly: false });
      setIsLoading(true);
      axios
        .post("/guests", data)
        .then(() => {
          toast.success("User created successfully!", toastDefaultConfig);
          setIsLoading(false);
          setTimeout(() => {
            router.push("/guests");
          }, 3500);
        })
        .catch((err) => {
          console.log(err);
          if (err.response) {
            if (err.response.status == 422)
              toast.warn("User already created!", toastDefaultConfig);
          } else toast.error("Internal error, something went wrong!", toastDefaultConfig);
        })
        .finally(() => setIsLoading(false));
    } catch (err) {
      // Se chegamos aqui existem erros no form
      if (err instanceof yup.ValidationError) {
        err.inner.forEach((e) => {
          errors[e.path] = e.message;
        });
      }
    } finally {
      if (formRef && formRef.current) formRef.current.setErrors(errors);
    }
  }

  return (
    <>
      <Head>
        <title>SWH | New Guests</title>
      </Head>

      <div className={styles.container}>
        <ToastContainer />
        <Loading visible={isLoading} />
        <section className={styles.content}>
          <h1 className={styles.titlePage}>Customer View</h1>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <section className={styles.containerTextInput}>
              <div className={styles.contentTextInput}>
                <TextInput name="firstName" placeholder="First Name" />
              </div>
              <div className={styles.contentTextInput}>
                <TextInput name="lastName" placeholder="Last Name" />
              </div>
            </section>

            <section className={styles.containerTextInput}>
              <div className={styles.contentTextInput}>
                <TextInput name="email" placeholder="Email Address" />
              </div>
              <div className={styles.contentTextInput}>
                <InputMask name="phoneNumber" placeholder="Phone Number" />
              </div>
            </section>

            <section className={styles.containerTextInput}>
              <div className={styles.contentTextInput}>
                <TextInput name="address" placeholder="Address" />
              </div>
            </section>

            <section className={styles.containerTextInput}>
              <div className={styles.contentTextInput}>
                <TextInput name="country" placeholder="Country" />
              </div>
              <div className={styles.contentTextInput}>
                <TextInput name="state" placeholder="State" />
              </div>
            </section>

            <button type="submit" className={styles.buttonSubmit}>
              <span className={styles.buttonText}>Submit</span>
            </button>
          </Form>
          <Link href="/guests">
            <a className={styles.linkRedirect}>Return to All Customers</a>
          </Link>
        </section>
      </div>
    </>
  );
}
