import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage alt="surrealist painting" src="../images/4169397842.png" />
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
