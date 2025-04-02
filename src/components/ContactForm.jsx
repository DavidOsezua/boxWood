import React from "react";
import Card from "./Card";
import Button from "./Button";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <Card>
      <p>Fill a quick response form</p>

      <p>
        Have a question or need assistance? Fill out the quick response form,
        and our team will get back to you shortly.
      </p>

      <form className="content">
        <div className="content mt-[2rem]">
          <input placeholder="Your Name" className={`${styles.input}`} />
          <input placeholder="Phone Number" className={`${styles.input}`} />
          <input placeholder="Your Email" className={`${styles.input}`} />
          <input placeholder="Amount Lost (£)" className={`${styles.input}`} />
          <textarea
            placeholder="Summary of what happened"
            className={`${styles.textarea}`}
          />
        </div>

        <div className="flex justify-end">
          <Button text={`Submit`} />
        </div>
      </form>
    </Card>
  );
};

export default ContactForm;
