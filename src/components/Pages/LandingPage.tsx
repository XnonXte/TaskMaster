import Navbar from "./_Navbar";
import Hero from "./_Hero";
import Footer from "./_Footer";

const LandingPage = () => {
  return (
    <>
      <div className="wrapper">
        <main>
          <Navbar />
          <Hero />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
