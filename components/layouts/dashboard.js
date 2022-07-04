import Head from "next/head";
import Sidebar from "../Sidebar";

const Layout = ({ children, title }) => {
  return (
    <>
      {title && (
        <Head>
          <title>{title} - Greenie</title>
        </Head>
      )}

      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export default Layout;
