import { useState } from "react";
import Title from "./Title";
import CustomTextField from "./CustomTextField";
import FormControl from "@mui/material/FormControl";

const Contact = () => {
  const [ inputValue, setInputValue ] = useState({
    fullName: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`Name: ${inputValue.fullName}, Email: ${inputValue.email}, Message: ${inputValue.message}` );

    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact">
      <Title>Contact</Title>

      <div>
        <form className="form" onSubmit={handleSubmit}>
          <CustomTextField 
            type="text"
            id="name"
            label="Name" 
            required 
            margin="dense" 
            fullWidth 
            value={inputValue.fullName}
            name="name"
            onChange={handleChange}
          />
          <CustomTextField 
            label="Email" 
            required 
            margin="dense" 
            fullWidth 
            value={inputValue.email}
            name="email"
            onChange={handleChange}
          />
          <CustomTextField 
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