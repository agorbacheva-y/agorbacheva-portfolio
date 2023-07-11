import { useState, forwardRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Title from "./Title";
import CustomTextField from "./CustomTextField";
import CustomButton from "./CustomButton";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/d469c1c0-202a-11ee-a6b0-17653bd30bd3";

const Contact = ( props, ref ) => {
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
          throw new Error('Oops! The form was not sent.');
        }
        setSubmitted(true);
      })
      .catch((err) => {
        e.target.submit();
      });
  
    e.target.reset();
  };

  return (
    <div className="contact" id="#contact" ref={ref}>
      <Title>Contact</Title>

      <div className="contact__body">
        <div className="contact__greeting">
          <p>Let's connect!</p>
          <div className="contact__icons__container">
            <a 
              href="https://github.com/agorbacheva-y" 
              target="blank"
              className="contact__link"
            >
              <FaGithub className="contact__icon" />
            </a>
            <a
              href="https://linkedin.com/in/ayumi-gorbacheva-yamamoto-04930038"
              target="blank"
              className="contact__link"
            >
              <FaLinkedin className="contact__icon "/>
            </a>
            
          </div>
        </div>

        <form 
          className="contact__form" 
          onSubmit={handleSubmit} 
          method="POST" 
          action={FORM_ENDPOINT} 
        >
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
          <CustomButton type="submit">Submit</CustomButton>
        </form>
      </div>
      
    </div>
  );
};

export default forwardRef(Contact);