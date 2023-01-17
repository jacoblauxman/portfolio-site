import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-content", {
      itemSelector: ".grid-item",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-item",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <section
      id="work"
      data-nav-tooltip="Work"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>My Portfolio.</h3>
        </div>
        <div className="portfolio-filter-01">
          <ul className="filter nav">
            <li
              className={`c-pointer ${activeBtn("*")}`}
              onClick={handleFilterKeyChange("*")}
              data-filter="*"
            >
              All
            </li>
            <li
              // className={`c-pointer ${activeBtn("branding")}`}
              // onClick={handleFilterKeyChange("branding")}
              // data-filter=".branding"
              className={`c-pointer ${activeBtn("gamebaux")}`}
              onClick={handleFilterKeyChange("gamebaux")}
              data-filter=".gamebaux"
            >
              GameBaux
            </li>
            <li
              // className={`c-pointer ${activeBtn("photoshop")}`}
              // onClick={handleFilterKeyChange("photoshop")}
              // data-filter=".photoshop"
              className={`c-pointer ${activeBtn("thiscord")}`}
              onClick={handleFilterKeyChange("thiscord")}
              data-filter=".thiscord"
            >
              this.cord
            </li>
            <li
              // className={`c-pointer ${activeBtn("fashion")}`}
              // onClick={handleFilterKeyChange("fashion")}
              // data-filter=".fashion"
              className={`c-pointer ${activeBtn("buhnbuh")}`}
              onClick={handleFilterKeyChange("buhnbuh")}
              data-filter=".buhnubh"
            >
              Da Air Buh 'n' Buh
            </li>
            {/* <li
              className={`c-pointer ${activeBtn("product")}`}
              onClick={handleFilterKeyChange("product")}
              data-filter=".product"
            >
              Product
            </li> */}
          </ul>
        </div>{" "}
        {/* Portfolio Filter */}
        <div className="portfolio-content grid-gutter-lg grid-col-3 lightbox-gallery">
          <div className="grid-item gamebaux">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">GameBaux</h5>
                <span><a href="https://gamebaux.onrender.com/" target="_blank">Live Site </a></span> ||
                <span><a href="https://github.com/jacoblauxman/aa-capstone" target="_blank"> GitHub Repo</a></span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/gamebaux-preview.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/gamebaux-preview.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item gamebaux">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">GameBaux</h5>
                <span><a href='https://gamebaux.onrender.com/' target="_blank">Live Site </a></span> ||
                <span><a href='https://github.com/jacoblauxman/aa-capstone' target="_blank"> GitHub Repo</a></span>
                <div>
                  An e-commerce full stack website utilizing React / Redux and Flask SQLAlchemy to
                  deliver functional component features such as user Reviews and Carts,
                  with common 'CRUD' (Create Read Update Delete) applications.
                  Features implemented primarily using AGILE workflow methodologies.
                </div>
              </div>
              <div className="portfolio-img more-info-img" style={{ backgroundColor: "#0F0F1A" }}>
                <span style={{ color: "white", backgroundColor: "black", fontStyle: "italic" }}>More Info on GameBaux:</span>
                <img src="static/img/gamebaux-preview3.png" title="" alt="" />
                <div className="portfolio-icon">
                  {/* <a
                    href="static/img/gamebaux-preview3.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item gamebaux">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">GameBaux</h5>
                <span><a href='https://gamebaux.onrender.com/' target="_blank">Live Site </a></span> ||
                <span><a href='https://github.com/jacoblauxman/aa-capstone' target="_blank"> GitHub Repo</a></span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/gamebaux-preview2.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/gamebaux-preview2.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item thiscord">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">this.cord</h5>
                <span><a href='https://this-cord.onrender.com/' target="_blank">Live Site </a></span> ||
                <span><a href='https://github.com/iamharis08/Thiscord' target="_blank"> GitHub Repo</a></span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/thiscord-preview.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/thiscord-preview.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item thiscord">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">this.cord</h5>
                <span><a href='https://this-cord.onrender.com/' target="_blank">Live Site </a></span> ||
                <span><a href='https://github.com/iamharis08/Thiscord' target="_blank"> GitHub Repo</a></span>
                <div>
                  An app clone targeting social networking / live messaging forum 'Discord'.
                  Deployed within 10 days as a group project, a full stack web app using a Python / Flask stack in the backend
                  and a React / Redux frontend. Features Create, Update, Delete (CRUD)
                  methods for Servers and Channels as well as WebSockets / Socket.IO to
                  deliver bi-directional, realtime chat message updates.
                </div>
              </div>
              <div className="portfolio-img more-info-img" style={{ backgroundColor: "#0F0F1A" }}>
                <span style={{ color: "white", backgroundColor: "black", fontStyle: "italic" }}>More Info on this.cord:</span>
                <img src="static/img/thiscord-preview3.png" title="" alt="" />
                <div className="portfolio-icon">
                  {/* <a
                    href="static/img/m-portfolio-4.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item thiscord">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">this.cord</h5>
                <span><a href='https://this-cord.onrender.com/' target="_blank">Live Site </a></span> ||
                <span><a href='https://github.com/iamharis08/Thiscord' target="_blank"> GitHub Repo</a></span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/thiscord-preview2.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/thiscord-preview2.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item buhnbuh">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Da Air Buh 'n' Buh</h5>
                <span><a href='https://da-air-buh-n-buh.onrender.com/' target="_blank">Live Site </a></span> ||
                <span><a href='https://github.com/jacoblauxman/AirBnB-Proj' target="_blank"> GitHub Repo</a></span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/da-air-buh-n-buh-preview.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/da-air-buh-n-buh-preview.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item buhnbuh">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Da Air Buh 'n' Buh</h5>
                <span><a href='https://da-air-buh-n-buh.onrender.com/' target="_blank">Live Site </a></span> ||
                <span><a href='https://github.com/jacoblauxman/AirBnB-Proj' target="_blank"> GitHub Repo</a></span>
                <div>
                  Clone site of travel/hosting site "Air BnB". Features including user Reviews,
                  user Spots with Spot Images amongst others with fully functioning Creation, Update, Deletion (CRUD).
                  Fully implemented frontend within 2 weeks of developing React.js and Redux.js skills. Backend API routing
                  to spec of project managers with RESTful implementation of said routing endpoints.
                </div>
              </div>
              <div className="portfolio-img more-info-img" style={{ backgroundColor: "#0F0F1A" }}>
                <span style={{ color: "white", backgroundColor: "black", fontStyle: "italic" }}>More Info on Da Air Buh 'n' Buh:</span>                <img src="static/img/m-portfolio-4.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  {/* <a
                    href="static/img/m-portfolio-4.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item buhnbuh">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Da Air Buh 'n' Buh</h5>
                <span><a href='https://da-air-buh-n-buh.onrender.com/' target="_blank">Live Site </a></span> ||
                <span><a href='https://github.com/jacoblauxman/AirBnB-Proj' target="_blank"> GitHub Repo</a></span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/da-air-buh-n-buh-preview2.png" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/da-air-buh-n-buh-preview2.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
