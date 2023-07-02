import { forwardRef } from "react";
import Layout from "./Layout";

const Home = ( props, ref ) => {
  return (
    <div className="home" ref={ref} >
      <Layout>
        <div className="home__pic">
         {/* add image here */}
        </div>
        <div className="home__greeting">
          <h3><span className="bold">Hej!</span> I'm</h3>
        </div>
        <div>
          <h1 className="first-name">Ayumi</h1>
          <h2 className="last-name">Gorbacheva-Yamamoto</h2>
        </div>
        <div className="home__desc">
          <h4>an aspiring web developer with a passion to learn</h4>
        </div>
      </Layout>
    </div>
  );
};

export default forwardRef(Home);