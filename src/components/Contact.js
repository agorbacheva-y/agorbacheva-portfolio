import Title from "./Title";
import TextField from "@mui/material/TextField";
import CustomTextField from "./CustomTextField";

const Contact = () => {
  return (
    <div className="contact">
      <Title>Contact</Title>

      <div>
        <form>
          <CustomTextField label="Name" required margin="dense" />
          <CustomTextField label="Email" required margin="dense" />
          <CustomTextField label="Message" multiline rows={4} margin="dense" />
        </form>
      </div>
    </div>
  );
};

export default Contact;