import "../styles/globals.css";
import "@fontsource-variable/zalando-sans";
import "@fontsource/instrument-serif";
import "@fontsource/instrument-serif/400-italic.css";
import Head from "next/head";

const NullComp = ({ children }) => <>{children}</>;

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || NullComp;

  return (
    <div className="min-h-screen bg-canvas font-primary text-ink antialiased">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}



