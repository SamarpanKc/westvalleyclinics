import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="We provide the highest quality of Hair Transplant, Aesthetic & Skin Care, Dental, and Endocrine related services. Our experienced professionals will give you the best treatment and results. Come experience the difference."
        />
        <meta
          name="keywords"
          content="best hair transplant in kathmandu, best hair transplant in pokhara, west valley, west valley medical clinic, endocrine clinic, endocrine clinic in pokhara, best dental clinic in pokhara, endocrinologist, hair transplant in pokhara,
          dental clinic pokhara  
          "
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
