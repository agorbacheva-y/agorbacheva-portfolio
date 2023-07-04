import { forwardRef } from "react";

const Top = ( props, ref ) => {
  return <div ref={ref}></div>;
};

export default forwardRef(Top);