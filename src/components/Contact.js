import { useState } from "react";
import Title from "./Title";
import CustomTextField from "./CustomTextField";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/c27aab20-10dd-11ee-a6b0-17653bd30bd3";

const Contact = () => {
  // store input
  const [ inputValue, setInputValue ] = useState({
    fullName: "",
    email: "",
    message: ""
  });

  const [ submitted, setSubmitted ] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevInputValue) => ({ ...prevInputValue, [name]: value }));

    console.log(inputValue.fullName, inputValue.email, inputValue.message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {};

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }
        setSubmitted(true);
      })
      .catch((err) => {
        e.target.submit();
      });
  
    clearInput();
    setInputValue({ fullName: "", email: "", message: "" });
  };

  const clearInput = () => {
    setInputValue({ fullName: "", email: "", message: "" })
  };

  if (submitted) {
    return (
      <>
        <p>Thank you!</p>
        <p>We'll be in touch soon.</p>
      </>
    );
  }

  return (
    <div className="contact">
      <Title>Contact</Title>

      <div>
        <form className="form" onSubmit={handleSubmit} method="POST" action={FORM_ENDPOINT} >
          <CustomTextField 
            type="text"
            label="Name" 
            required 
            margin="dense" 
            fullWidth 
            defaultValue={inputValue.fullName}
            name="fullName"
            onChange={handleChange}
          />
          <CustomTextField 
            type="text"
            label="Email" 
            required 
            margin="dense" 
            fullWidth 
            defaultValue={inputValue.email}
            name="email"
            onChange={handleChange}
          />
          <CustomTextField 
            type="text"
            label="Message" 
            multiline 
            rows={4} 
            margin="dense" 
            fullWidth 
            defaultValue={inputValue.message}
            name="message"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

// cant clear input after submit...