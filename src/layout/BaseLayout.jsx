import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import "swiper/css";
import "swiper/css/navigation";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
