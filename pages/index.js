import MainSection from "./components/MainSection";

import SimilarArticles from "./components/SimilarArticles";
import Recommended from "./components/Recommended";
import Layout from "./components/Layout";
import Delivery from "./components/Delivery";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <ToastContainer
          autoClose="1500"
          progressStyle={{ background: "blue" }}
        />
      </div>
    </div>
  );
}

export default Home;
