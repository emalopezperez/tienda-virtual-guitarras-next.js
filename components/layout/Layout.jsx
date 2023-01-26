import Head from "next/head";
import Nav from "../navBar/Nav";
import Footer from "../footer/Footer";

const Layout = ({ children, title = "", description = "" }) => {
  return (
    <>
      <Head>
        <title>{`The Guitarist's Paradise - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
