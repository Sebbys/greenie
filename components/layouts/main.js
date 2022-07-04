import Head from "next/head";

const Main = ({ children }) => {
  return (
    <>
      <Head>
        <title>Fahri - Homepage</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Main;
