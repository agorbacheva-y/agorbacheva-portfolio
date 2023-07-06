import { forwardRef } from "react";
import Title from "./Title";

const AboutMe = ( props, ref ) => {
  return (
    <div className="aboutme" ref={ref}>
      <Title>About Me</Title>
      <div className="aboutme__text">
        <p>
          I am a California transplant currently living in Sweden with experience working in 
          three countries (US, Japan, Estonia) in account management at a certification agency 
          and in payment operations at a fintech prior to switching careers to web development.
          I studied front-end development at Sundsgårdens Folkhögskola and am keen to start
          a career in this field to work alongside amazing programmers and learn much more!
        </p>
      </div>
    </div>
  );
};

export default forwardRef(AboutMe);