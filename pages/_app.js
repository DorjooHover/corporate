import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import "../src/styles/index.scss";
import Layout from "../src/components/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
