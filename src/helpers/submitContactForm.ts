import emailjs from "@emailjs/browser";

export const nameRegex: RegExp = /^[a-zA-Zа-яА-ЯіІїЇєЄёЁ\s]+$/;

export const submitContactForm = (
  form: HTMLFormElement,
  setIsFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>,
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>,
  setIsFormError: React.Dispatch<React.SetStateAction<boolean>>
): void => {
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

  const sendEmail = (serviceId: string, templateId: string) => {
    const templateParams = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
    };

    return emailjs.send(
      serviceId,
      templateId,
      templateParams,
      "sBGnZCmTCYR_vOaHS"
    );
  };

  Promise.all([
    sendEmail("service_vur4cex", "template_a61d8ra"),
    sendEmail("service_el0trh8", "template_8kuatgn"),
  ])
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
    })
    .finally(() => {
      setIsSubmitting(false);
    });
};
