import { useState } from "react";
import Title from "./Title";
import CustomTextField from "./CustomTextField";

const Contact = () => {
  // store input
  const [ inputValue, setInputValue ] = useState({
    fullName: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevInputValue) => ({ ...prevInputValue, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputValue.fullName, inputValue.email, inputValue.message)

    clearInput();
    setInputValue({ fullName: "", email: "", message: "" });
  };

  const clearInput = () => {
    setInputValue({ fullName: "", email: "", message: "" })
  };

  return (
    <div className="contact">
      <Title>Contact</Title>

      <div>
        <form className="form" onSubmit={handleSubmit}>
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