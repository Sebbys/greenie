import Head from "next/head";

const Main = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>Greenie</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Main;
