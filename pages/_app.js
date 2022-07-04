import Main from "../components/layouts/main";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Main>
      <Component {...pageProps} />
    </Main>
  );
}

export default MyApp;
