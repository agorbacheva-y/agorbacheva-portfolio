import Title from "./Title";
import TextField from "@mui/material/TextField";

const Contact = () => {
  return (
    <div className="contact">
      <Title>Contact</Title>

      <div>
        <form>
          <TextField label="Name" required margin="dense" />
          <TextField label="Email" required margin="dense" />
          <TextField label="Message" multiline rows={4} margin="dense" />
        </form>
      </div>
    </div>
  );
};

export default Contact;