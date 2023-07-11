import { forwardRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Title from "./Title";
import Form from "./Form";

const Contact = ( props, ref ) => {
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

        <Form />
      </div>
      
    </div>
  );
};

export default forwardRef(Contact);