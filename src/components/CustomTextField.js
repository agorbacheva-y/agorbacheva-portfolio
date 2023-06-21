import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

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

const CustomTextField = ({ type, label, required, margin, multiline, rows, fullWidth, defaultValue, name, onChange }) => {
  return (
    <div>
      <InputField 
        type={type}
        label={label} 
        required={required} 
        margin={margin} 
        multiline={multiline} 
        rows={rows}
        fullWidth={fullWidth}
        defaultValue={defaultValue}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomTextField;