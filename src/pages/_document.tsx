import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="We provide the highest quality Hair Transplant, Skin Care, and Aesthetics & Antiaging services in Pokhara at West Valley Medical Clinic. Our experienced professionals deliver exceptional, natural results."
        />
        <meta
          name="keywords"
          content="hair transplant in pokhara, best hair transplant in pokhara, skin clinic pokhara, aesthetics pokhara, antiaging clinic pokhara, west valley medical clinic, west valley pokhara"
        />
        <meta
          property="og:image"
          content="/public/images/hairTransplant/banner1.png"
        />

        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
