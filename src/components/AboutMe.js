import { forwardRef } from "react";
import Title from "./Title";

const AboutMe = ( props, ref ) => {
  return (
    <div className="aboutme" ref={ref}>
      <Title>About Me</Title>
      <div className="aboutme__text">
        <p>Lorem ipsum dolor sit amet. Et nihil minima sed dolorem ipsam et deleniti repudiandae et itaque labore 33 atque laborum est quis voluptatem. Est porro aspernatur vel molestias natus vel fugiat nobis ut aliquam dignissimos At enim recusandae!
        Qui quam nihil et molestiae rerum sed ipsam nihil est modi dolorum ut ipsam dicta eum culpa quod. Est dolor expedita hic ducimus alias qui temporibus voluptate non tenetur modi rem cumque dolorem!
        </p>
      </div>
    </div>
  );
};

export default forwardRef(AboutMe);