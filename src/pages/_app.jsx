import "../styles/globals.css";
import "@fontsource-variable/zalando-sans";
import "@fontsource/instrument-serif";
import "@fontsource/instrument-serif/400-italic.css";
import Head from "next/head";
import { useEffect } from "react";

const NullComp = ({ children }) => <>{children}</>;

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || NullComp;

  useEffect(() => {
    // Skip for users who prefer reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lenis;
    let rafId;

    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({
        duration: 1.1,          // slightly slower than default — feels premium not sluggish
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo-out
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.9,   // subtle — don't fight the user
        touchMultiplier: 1.8,
        infinite: false,
      });

      function raf(time) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

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






