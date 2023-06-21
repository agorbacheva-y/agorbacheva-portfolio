import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const CustomTextField = ({ label, required, margin, multiline, rows }) => {
  const InputField = styled(TextField) ({
    '& label.Mui-focused': {
      color: '#00CECB',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#00CECB',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#333745',
      },
      '&:hover fieldset': {
        borderColor: '#00CECB',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#00CECB',
      },
    },
  });

  return (
    <div>
      <InputField label={label} required={required} margin={margin} multiline={multiline} rows={rows} />
    </div>
  );
};

export default CustomTextField;