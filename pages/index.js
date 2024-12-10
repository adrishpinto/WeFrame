import MainSection from "./components/MainSection";

import SimilarArticles from "./components/SimilarArticles";
import Recommended from "./components/Recommended";
import Layout from "./components/Layout";
import Delivery from "./components/Delivery";
function Home() {
  return (
    <div className="w-full h-full">
      <div className="sm:overflow-hidden">
        <Layout>
          <MainSection />
          <SimilarArticles />
          <Recommended />
          <Delivery />
        </Layout>
      </div>
    </div>
  );
}

export default Home;
