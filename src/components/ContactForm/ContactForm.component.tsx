import { useState } from "react";
import "./ContactForm.component.css";
import { Button } from "../Button/Button.component";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormError, setIsFormError] = useState(false);

  const nameRegex = /^[a-zA-Zа-яА-Я\s]+$/;
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const form = e.target as HTMLFormElement;
    const nameInput = form.name as unknown as HTMLInputElement;
    const emailInput = form.email as HTMLInputElement;
    const messageInput = form.message as HTMLTextAreaElement;
  
    if (!nameRegex.test(nameInput.value)) {
      alert("Please enter a correct name.");
      return;
    }
  
    if (nameInput.value.length < 3 || nameInput.value.length > 50) {
      alert("Please enter a name between 3 and 50 characters.");
      return;
    }
  
    const data = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
    };
  
    emailjs.sendForm('service_vur4cex', 'template_a61d8ra', form, 'sBGnZCmTCYR_vOaHS')
      .then(() => {
        console.log("Form submitted successfully");
        setIsFormSubmitted(true);
        setIsFormError(false);
        form.reset();
      })
      .catch((error) => {
        console.error("Error submitting the form:", error);
        setIsFormError(true);
        setIsFormSubmitted(false);
      });
  }
  
  const closeMessage = () => {
    setIsFormSubmitted(false);
    setIsFormError(false);
  };

  return (
    <section className="sectionform">
      <div className="form">
        <h2 className="form__heading">Write to us</h2>
        <div className="form__container">
          <form
            className="form__form"
            onSubmit={handleSubmit}
            // method="POST"
          >
            <div className="form__group">
              <label htmlFor="name" className="form__label"></label>
              <input
                type="text"
                id="name"
                name="name"
                className="form__input field"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Your mail"
              />
            </div>
            <div className="form__group">
              <textarea
                name="message"
                id="message"
                className="form__textarea field"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
                    className="form__message-close form__message--success form__message--text"
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
                    className="form__message-close form__message--error form__message--text"
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
              text="Send a message"
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

