import dynamic from "next/dynamic";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Services from "../src/components/Services";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});
const Index = () => {
  return (
    <Layout>
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="home-banner">
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <h6>Heya, I'm</h6>
                  <h1 className="font-alt">Jacob Lauxman</h1>
                  <p className="lead">
                    I'm a <TypingAnimation />
                  </p>
                  <p className="desc">
                    I'm a Musician turned Software Engineer, providing design and web development services for customers of all sizes.
                    Penchant for the Arts and other Creative spaces, Proud Cat Dad.
                  </p>
                  <div className="btn-bar">
                    <a className="px-btn px-btn-theme" href="https://drive.google.com/file/d/1hWI5TJVAVq5sIZblhg52iCQCXjOt-yeD/view?usp=share_link" target="_blank">
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                  <img src="static/img/j-laux-about-me.jpg" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Home */}
      {/* about us */}
      {/* Portfolio */}
      <Portfolio />
      {/* End Portfolio */}
      
      <About />
      {/* End about us */}
      {/* Services */}
      <Services />
      {/* End Services */}
      {/* Blog */}
      {/* <Blog /> */}
      {/* End Blog */}
      {/* Contact us */}
      <Contact />
    </Layout>
  );
};
export default Index;
