import Layout from "./Layout";

const Home = () => {
  return (
    <Layout>
      <div>
        <h3><span className="bold">Hej!</span> I'm</h3>
      </div>
      <div>
        <h1 className="first-name">Ayumi</h1>
        <h2 className="last-name">Gorbacheva-Yamamoto</h2>
      </div>
      <div>
        <h4>an aspiring web developer with a passion to learn</h4>
      </div>

    </Layout>
  );
};

export default Home;