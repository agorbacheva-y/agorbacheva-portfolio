import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const CustomTextField = ({ type, id, label, required, margin, multiline, rows, fullWidth, defaultValue, name }) => {
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
      <InputField 
        type={type}
        id={id}
        label={label} 
        required={required} 
        margin={margin} 
        multiline={multiline} 
        rows={rows}
        fullWidth={fullWidth}
        defaultValue={defaultValue}
        name={name}
      />
    </div>
  );
};

export default CustomTextField;