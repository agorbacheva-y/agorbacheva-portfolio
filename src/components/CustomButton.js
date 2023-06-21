import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const CustomButton = ({ children }) => {
  const LinkButton = styled(Button) ({
    boxShadow: 'none',
    fontSize: 12,
    padding: '0.5rem',
    margin: '1rem',
    border: 'none',
    borderRadius: '20px',
    backgroundColor: '#00CECB',
    color: '#333745',
    fontFamily: ['League Spartan', 'sans-serif'],
    '&:hover': {
     backgroundColor: '#00a5a2',
     fontWeight: 600,
     border: 'none',
     color: 'white', // difficutl to see???
    },
  });

  return (
    <div>
      <LinkButton variant="contained" >
        {children}
      </LinkButton>
    </div>
  );
};

export default CustomButton;