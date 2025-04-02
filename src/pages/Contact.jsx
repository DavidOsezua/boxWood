import React from "react";
import ContactUs from "../components/ContactUs";
import ContactForm from "../components/ContactForm";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={`section`}>
      <div className={`sectionContainer`}>
        <div className={`content ${styles.contact}`}>
          <ContactUs />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
