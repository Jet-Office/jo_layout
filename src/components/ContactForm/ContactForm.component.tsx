import { useState } from "react";
import "./ContactForm.component.css";
import { Button } from "../Button/Button.component";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormError, setIsFormError] = useState(false);

  const nameRegex = /^[a-zA-Zа-яА-Я\s]+$/;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nameRegex.test(name)) {
      alert("Please enter a correct name.");
      return;
    }

    if (name.length < 3 || name.length > 50) {
      alert("Please enter a name between 3 and 50 characters.");
      return;
    }
    const data = {
      from: "Mailgun Sandbox <mailgun@sandbox2126b81827c0408085ce2d29ee6f7972.mailgun.org>",
      to: "Oksana Kyryienko <oksana.kirienko@jetoffice.org>",
      subject: "Hello Oksana Kyryienko",
      text: message,
    };

    try {
      const response = await fetch(
        "https://api.mailgun.net/v3/sandbox2126b81827c0408085ce2d29ee6f7972.mailgun.org/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization:
              "Basic " +
              btoa("api:b826bcb220e108bf7c3cef24f1a43fbf-135a8d32-b32899db"),
          },
          body: new URLSearchParams(data).toString(),
        }
      );

      if (response.ok) {
        console.log("Form submitted successfully");
        setIsFormSubmitted(true);
        setIsFormError(false);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        console.error("Form submission failed");
        setIsFormError(true);
        setIsFormSubmitted(false);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setIsFormError(true);
      setIsFormSubmitted(false);
    }
  };

  const closeMessage = () => {
    setIsFormSubmitted(false);
    setIsFormError(false);
  };

  return (
    <section className="sectionform">
      <div className="form">
        <h2 className="form__heading">Write to us</h2>
        <div className="form__container">
          <form className="form__form" onSubmit={handleSubmit}>
            <div className="form__group">
              <label htmlFor="name" className="form__label"></label>
              <input
                type="text"
                id="name"
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
              color="pink"
              text="Send a message"
              className="form__submit-button"
              disabled={isFormSubmitted}
            />
          </form>
        </div>
      </div>
    </section>
  );
};
