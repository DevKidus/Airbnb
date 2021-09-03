import Footer from "./Common/Footer";
import Main from "./Mini/Main";
import Hero from "./Mini/Hero";
import Header from "./Common/Header";

function Home({ setScroll }) {
  return (
    <div>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
