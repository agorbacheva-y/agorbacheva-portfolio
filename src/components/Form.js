import { useRef } from "react";
import emailjs from "emailjs-com";
import CustomTextField from "./CustomTextField";
import CustomButton from "./CustomButton";

const Form = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_contact_form',
      'template_contact',
      form.current,
      'u26i7KVn03eu_YpF2'
    )
      .then((result) => {
        alert('Your message has been sent!');
        console.log(result.status, result.text);
      })
      .catch((err) => {
        alert('Oops! Your message was not sent.');
      })
  }

  return (
    <form 
      ref={form}
      className="contact__form" 
      onSubmit={handleSubmit} 
    >
      <CustomTextField 
        type="text"
        label="Name" 
        required 
        margin="dense" 
        fullWidth 
        name="full_name"
        id="full_name"
      />
      <CustomTextField 
        type="text"
        label="Email" 
        required 
        margin="dense" 
        fullWidth 
        name="email"
        id="email"
      />
      <CustomTextField 
        type="text"
        label="Message" 
        multiline 
        rows={4} 
        margin="dense" 
        fullWidth 
        name="message"
        id="message"
      />
      <button 
        className="submit-btn" 
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;