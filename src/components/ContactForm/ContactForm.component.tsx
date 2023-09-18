import { useState } from "react";
import "./ContactForm.component.css";
import { Button } from "../Button/Button.component";
import { submitContactForm } from "../../helpers/submitContactForm";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormError, setIsFormError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = (e: { preventDefault: () => void; target: any }) => {
    e.preventDefault();
    const form = e.target;
    setIsSubmitting(true);
    submitContactForm(
      form,
      setIsFormSubmitted,
      setIsFormError,
      setIsSubmitting
    );
  };

  const closeMessage = () => {
    setIsFormSubmitted(false);
    setIsFormError(false);
  };

  return (
    <section className="sectionform">
      <div className="form">
        <h2 className="h2 form__heading">Write to us</h2>
        <div className="form__container">
          <form
            className="form__form"
            onSubmit={handleFormSubmit}
            method="POST"
          >
            <div className="form__group">
              <label htmlFor="name" className="form__label"></label>
              <input
                type="text"
                id="name"
                name="name"
                className="form__input field"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                placeholder="Your name"
              />
            </div>
            <div className="form__group">
              <label htmlFor="email" className="form__label"></label>
              <input
                name="email"
                type="email"
                id="email"
                className="form__input field"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                placeholder="Your mail"
              />
            </div>
            <div className="form__group">
              <textarea
                name="message"
                id="message"
                className="form__textarea field"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                placeholder="Your message"
              ></textarea>
            </div>
            {isFormSubmitted && (
              <div className="form__message form__message--success">
                <div>
                  <p className="form__message--text">Message sent!</p>
                </div>
                <div className="div">
                  <button
                    className={
                      `
                      form__message-close 
                      form__message--success 
                      form__message--text
                      `
                    }
                    onClick={closeMessage}
                  >
                    X
                  </button>
                </div>
              </div>
            )}
            {isFormError && (
              <div className="form__message form__message--error">
                <div>
                  <p className="form__message--text">Something went wrong!</p>
                </div>
                <div>
                  <button
                    className={
                      `
                      form__message-close
                      form__message--error
                      form__message--text
                      `
                    }
                    onClick={closeMessage}
                  >
                    X
                  </button>
                </div>
              </div>
            )}
            <Button
              type="submit"
              color="pink"
              text={isSubmitting ? "Message is sending..." : "Send a message"}
              className="form__submit-button"
              disabled={isFormSubmitted}
              onClick={() => {}}
            />
          </form>
        </div>
      </div>
    </section>
  );
};
