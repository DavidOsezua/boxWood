import React from "react";
import ContactUs from "../components/ContactUs";
import ContactForm from "../components/ContactForm";
import styles from "./Contact.module.css";
import MainLayout from "../layout/MainLayout";

const Contact = () => {
  return (
    <MainLayout>
      <section className={`section`}>
        <div className={`sectionContainer`}>
          <div className={`content ${styles.contact}`}>
            <ContactUs />
            <ContactForm />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
