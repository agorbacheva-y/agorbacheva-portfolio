import { useState } from "react";
import Title from "./Title";
import CustomTextField from "./CustomTextField";
import FormControl from "@mui/material/FormControl";

const Contact = () => {
  const [ fullName, setFullName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ message, setMessage ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fullName, email, message);
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
            value={fullName}
            name="fullName"
            onChange={(e) => setFullName(e.target.value)}
          />
          <CustomTextField 
            type="text"
            label="Email" 
            required 
            margin="dense" 
            fullWidth 
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomTextField 
            type="text"
            label="Message" 
            multiline 
            rows={4} 
            margin="dense" 
            fullWidth 
            defaultValue={message}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;