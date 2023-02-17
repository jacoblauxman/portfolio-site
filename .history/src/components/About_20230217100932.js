const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src="static/img/thirdselfie.jpg" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>
                  {`I'm`} a Software Engineer, recent App Academy Graduate, and Musician.{" "}
                </h3>
                <p>
                  {/* {`I'm`} a Freelancer Front-end Developer with over 3 years of
                  experience. {`I'm`} from San Francisco. I code and create web
                  elements for amazing people around the world. I like work with
                  new people. New people new Experiences. */}
                  {`I'm a Software Engineer with a 10+ year background as a performing musician and instructor
                  currently dwelling in the desert (AZ). I've noted and grown to love the parallels between programming and music as languages
                with varying 'dialects' as well as the theory/methods and inner working logic and problem solving skills required
                used to produce unique creative endeavors.`}
                </p>
                <div className="row">
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">3+</span>
                      <div className="media-body">
                        Full Stack Projects <br />
                        Completed.
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">12+</span>
                      <div className="media-body">
                        Years of <br />
                        Performance / Teaching
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="mailto:jlauxman@gmail.com" target="_blank">
                    <span>Contact Me</span>
                  </a>
                  <a className="px-btn px-btn-theme" href="#work">
                    <span>Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Education &amp; Skills</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>2007-2011</span>
                <h6>Music Performance (Jazz)</h6>
                <p>Herberger Institute for Design and the Arts (Arizona State University)</p>
              </li>
              <li>
                <span>2022-2023</span>
                <h6> Software Engineering / Web Dev</h6>
                <p>App Academy Software Engineering Coding Bootcamp</p>
              </li>
              {/* <li>
                <span>2010-2012</span>
                <h6>Search Engine Optimization</h6>
                <p>International Design Institute</p>
              </li> */}
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>My skills</h3>
              <p>
                {/* {`I'm`} a Freelancer Front-end Developer with over 3 years of
                experience. I code and create web elements for amazing people
                around the world. I like work with new people. New people new
                Experiences. */}
                {`After spending the past half a year or more focusing on Javascript, Python, React.js / Redux.js, Flask, HTML5 / CSS3
                and applying said languages to several solo and group full stack web projects,
                I'm ready to head into the next venture of coding and further the depths of my skills.
                I am looking for the opportunity to expand my overall knowledge in the field while still
                given ample opportunity to apply and hone my current abilities. I'd love to contribute to any
                organized and supportive team developing intuitive and well thought projects, especially
                those related to music, the arts or educational spaces.`}
              </p>
              <div className="skill-lt">
                <h6>Javascript</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "92%" }}>
                    <span data-toggle="tooltip" title="92%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Python</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "77%" }}>
                    <span data-toggle="tooltip" title="72%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>React / Redux</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "88%" }}>
                    <span data-toggle="tooltip" title="86%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>HTML5 / CSS3</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "82%" }}>
                    <span data-toggle="tooltip" title="88%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/jacob-lessons-mmw-camp.jpeg" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Music Instructor</h6>
                  <label>Music Maker Workshops | Stages Music | Freelance | May 2010 - July 2022</label>
                  <div className="rb-time">Part Time</div>
                  <p>
                    Providing personalized musical instruction from beginner to advanced level
                    and of all ages, adapting core concept of music fundamentals to fit client /
                    student personalized interests and curriculum. Documentation and management of individual
                    lesson data as well as unique, formatted lesson materials and musical notation created
                    with annotations specific to individual.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/jacob-performance.jpg" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Musician (Performing / Recording Artist)</h6>
                  <label>Freelance | Desert Cross / Impact Church | Twin Ponies, OO, Tripaw'D | Dec 2007 - Present</label>
                  <div className="rb-time">Part Time</div>
                  <p>
                    Application of various musical skills with an emphasis on guitar / stringed instruments.
                    Provided weekly/bi-weekly performance and rehearsal in both original and previously
                    recorded / cover music materials as well as memorization of expected materials in timely manner
                    for performance / recording. Sound design/manipulation as well as general music theory / logic
                    utilized for creation of unique works or parts. Ensemble and team work / building efforts and
                    responsibilities in a variety of scenarios and sizes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a3.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Front-end Developer</h6>
                  <label>WeLab | Remote | Jan 2019 - Present</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default About;
