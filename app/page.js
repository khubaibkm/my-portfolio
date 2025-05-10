"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import NavBar from "./NavBar";
import Image from "next/image";

export default function HomePage() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // cursor design
    const crsr = document.querySelector("#cursor");
    const crsrblur = document.querySelector("#cursor-blur");
    document.addEventListener("mousemove", function (e) {
      gsap.to(crsr, {
        duration: 0.4,
        left: e.x - 18,
        top: e.y - 22,
      });
      gsap.to(crsrblur, {
        duration: 1.5,
        left: e.x - 200,
        top: e.y - 225,
      });
    });

    // Navigation bar scroll
    gsap.fromTo(
      "#nav",
      {
        backgroundColor: "transparent",
        height: "150px", // Set the initial height of the navbar
      },
      {
        backgroundColor: "black",
        height: "100px", // Set the final height of the navbar
        duration: 0.5,
        scrollTrigger: {
          trigger: "#nav",
          scroller: "body",
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      }
    );


    // color changing from page1 to page2
    gsap.to(["#page1", "#page2"], {
      backgroundColor: "black",
      scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
      },
    });

    // smooth scroll for nav links
    document.querySelectorAll("#nav .navlinks").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute("href"));
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
    // smooth scroll for arrow
    document.querySelectorAll("#arr a").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute("href"));
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // set the width of skill bars
    const skillBars = document.querySelectorAll(".skill-bar");
    skillBars.forEach((skillBar) => {
      const skillLevel = skillBar.querySelector(".skill-level");
      const width = skillLevel.getAttribute("data-width");
      setTimeout(() => {
        skillLevel.style.width = width;
      }, 100);
    });

    // various cursor transformations on hover
    const enlargeCursor = (e) => {
      crsr.style.transform = "scale(2) translateY(5px) translateX(-12px)";
      crsr.style.border = "1px solid white";
      crsr.style.backgroundColor = "transparent";
      crsr.style.transition =
        "transform 0.5s, border 0.5s, background-color 0.5s";
    };
    const resetCursor = (e) => {
      crsr.style.transform = "scale(1) translate(0px)";
      crsr.style.border = "0px solid #addc2f";
      crsr.style.backgroundColor = "#addc2f";
      crsr.style.transition =
        "transform 0.5s, border 0.5s, background-color 0.5s";
    };

    document.querySelectorAll("#nav a.navlinks").forEach((el) => {
      el.addEventListener("mouseenter", enlargeCursor);
      el.addEventListener("mouseleave", resetCursor);
    });

    // arrow
    document.querySelectorAll("#arrow").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        crsr.style.transform = "scale(0)";
        crsr.style.backgroundColor = "transparent";
        crsr.style.transition =
          "transform 0.5s, border 0.5s, background-color 0.5s";
      });
      el.addEventListener("mouseleave", resetCursor);
    });

    // cards
    document.querySelectorAll(".card").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        crsr.style.transform = "scale(3) translateY(-10px) translateX(0px)";
        crsr.style.border = "1px solid white";
        crsr.style.backgroundColor = "transparent";
        crsr.style.transition =
          "transform 0.5s, border 0.5s, background-color 0.5s";
      });
      el.addEventListener("mouseleave", resetCursor);
    });

    // footer h3, a
    document.querySelectorAll("#footer h3, #footer a").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        crsr.style.transform = "scale(3) translateY(-10px) translateX(0px)";
        crsr.style.border = "1px solid #bfff11";
        crsr.style.backgroundColor = "transparent";
        crsr.style.transition =
          "transform 0.5s, border 0.5s, background-color 0.5s";
      });
      el.addEventListener("mouseleave", resetCursor);
    });

    // scroll triggers
    gsap.from("#aboutin", {
      scale: 0.6,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#about-me",
        scroller: "body",
        start: "top 60%",
        end: "top 55%",
        scrub: 3,
      },
    });

    gsap.from(".skill-level", {
      scaleX: 0,
      opacity: 1,
      transformOrigin: "left",
      scrollTrigger: {
        trigger: ".skills",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 12,
      },
    });

    gsap.from("#college, #school", {
      y: 400,
      opacity: 0,
      scrollTrigger: {
        trigger: "#education",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 3,
      },
    });

    gsap.from(".card", {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 80%",
        end: "top 75%",
        scrub: 1,
      },
    });

    gsap.from("#colon1", {
      y: -70,
      x: -70,
      scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 60%",
        end: "top 55%",
        scrub: 4,
      },
    });
    gsap.from("#colon2", {
      y: 70,
      x: 70,
      scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 60%",
        end: "top 55%",
        scrub: 4,
      },
    });

    // preventing zooming in/out
    const wheelHandler = (event) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };
    const keydownHandler = (event) => {
      if (
        event.ctrlKey &&
        (event.key === "+" ||
          event.key === "-" ||
          event.key === "=" ||
          event.key === "0")
      ) {
        event.preventDefault();
      }
    };
    const gestureHandler = (event) => event.preventDefault();

    document.addEventListener("wheel", wheelHandler, { passive: false });
    document.addEventListener("keydown", keydownHandler);
    document.addEventListener("gesturestart", gestureHandler);
    document.addEventListener("gesturechange", gestureHandler);
    document.addEventListener("gestureend", gestureHandler);

    // Cleanup on unmount
    return () => {
      document.removeEventListener("wheel", wheelHandler);
      document.removeEventListener("keydown", keydownHandler);
      document.removeEventListener("gesturestart", gestureHandler);
      document.removeEventListener("gesturechange", gestureHandler);
      document.removeEventListener("gestureend", gestureHandler);
    };
  }, []);

  return (
    <>
      {/* -------------- NAVBAR -------------- */}
      <NavBar />

      <div id="cursor"></div>
      <div id="cursor-blur"></div>

      <div id="main">
        {/* PAGE 1 */}
        <div id="page1">
          <h1>hey, I am khubaib Ahmad.</h1>
          <h2>Welcome to my Portfolio!</h2>
          <p>
            A Software developer from INDIA. <br />
            Passionate about building Optimized web applications!
          </p>
          <div id="mypic"></div>
          <div id="arr">
            <a href="#page2">
              <div id="arrow">
                <i className="ri-arrow-down-line"></i>
              </div>
            </a>
          </div>
        </div>

        {/* PAGE 2 */}
        <div id="page2">
          <div id="scroller">
            <div id="scroller1">
              <h4>WEB DEVELOPER.&nbsp;</h4>
              <h4>REACT.&nbsp;</h4>
              <h4>NODE.&nbsp;</h4>
              <h4>HEADLESS CMS.&nbsp;</h4>
              <h4>SEO.&nbsp;</h4>
              <h4>SQL.&nbsp;</h4>
              <h4>AWS.&nbsp;</h4>
              <h4>LINUX.&nbsp;</h4>
            </div>
            <div id="scroller1">
              <h4>WEB DEVELOPER.&nbsp;</h4>
              <h4>REACT.&nbsp;</h4>
              <h4>NODE.&nbsp;</h4>
              <h4>HEADLESS CMS.&nbsp;</h4>
              <h4>SEO.&nbsp;</h4>
              <h4>SQL.&nbsp;</h4>
              <h4>AWS.&nbsp;</h4>
              <h4>LINUX.&nbsp;</h4>
            </div>
          </div>

          <div id="about-me">
            <div id="aboutin">
              <h3>ABOUT ME</h3>
              <p><strong>Full Stack Developer</strong> skilled in building responsive, user-friendly, and optimized web applications using Next.js, Node.js, and Express. Experienced in creating scalable REST APIs, secure authentication systems, and integrating headless CMS like Strapi.</p>

              <p>Currently working as an <strong>SDE 1</strong> at <strong>AlphaSaaS</strong>, contributing to SaaS product development. Proficient with tools like Postman, Sequelize, GSAP, and AWS, with a solid grasp of MVC architecture and SQL databases.</p>
            </div>
          </div>

          <div className="skills">
            <h2>My SKILLS</h2>
            <div className="skill">
              <div className="skill-name">NEXT JS</div>
              <div className="skill-bar">
                <div className="skill-level" data-width="80%"></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">Node JS</div>
              <div className="skill-bar">
                <div className="skill-level" data-width="60%"></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">Headless CMS</div>
              <div className="skill-bar">
                <div className="skill-level" data-width="70%"></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">Tailwind & Material UI</div>
              <div className="skill-bar">
                <div className="skill-level" data-width="85%"></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">Technical SEO</div>
              <div className="skill-bar">
                <div className="skill-level" data-width="70%"></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">AWS</div>
              <div className="skill-bar">
                <div className="skill-level" data-width="65%"></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">SQL</div>
              <div className="skill-bar">
                <div className="skill-level" data-width="55%"></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">Postman & Jira</div>
              <div className="skill-bar">
                <div className="skill-level" data-width="70%"></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">Figma</div>
              <div className="skill-bar">
                <div className="skill-level" data-width="75%"></div>
              </div>
            </div>
          </div>

          <div id="education">
            <h2>EDUCATION</h2>
            <div id="college">
              <h3>Graduation</h3>
              <p>
                BACHELORS OF TECHNOLOGY - COMPUTER SCIENCE <br />
                Integral University, Lucknow INDIA. <br />
                Batch: 2020 - 2024 &nbsp;&nbsp; CGPA: 9.0 <br />
              </p>
            </div>
            <div id="school">
              <h3>Schooling</h3>
              <p>
                CENTRAL BOARD of SECONDARY EDUCATION (PCM) <br />
                St John&apos;s Senior Secondary School, Firozabad INDIA. <br />
                Farewell: 2020 <br />
              </p>
            </div>
          </div>
        </div>

        {/* PAGE 3 */}
        <div id="page3">
          <h2>MY PROJECTS</h2>
          <div id="cards-container">
            <div className="card" id="card1">
              <div className="overlay">
                <h4>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://unifinderr.netlify.app"
                  >
                    UniFinder
                  </a>
                  <span style={{ fontWeight: 100, color: "black", textTransform: "lowercase" }}>
                    &nbsp;← Link
                  </span>
                </h4>
                <p>
                  Discover information about various amenities and services. <br />
                  Utilized React.js for the frontend and Firebase for the backend.
                  Enabled real-time data storage and user authentication.
                </p>
              </div>
            </div>

            <div className="card" id="card2">
              <div className="overlay">
                <h4>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://khubaiblive.netlify.app/"
                  >
                    Portfolio
                  </a>
                  <span style={{ fontWeight: 100, color: "black", textTransform: "lowercase" }}>
                    &nbsp;← Link
                  </span>
                </h4>
                <p>
                  This is my Portfolio, you&apos;re on this site now. <br />
                  Built on NextJS using the powerful GSAP (GreenSock Animation Platform) library of JavaScript for animations and scroll triggers.
                </p>
              </div>
            </div>

            <div className="card" id="card3">
              <div className="overlay">
                <h4>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://playandpray.netlify.app/"
                  >
                    PLAY&PRAY
                  </a>
                  <span style={{ fontWeight: 100, color: "black", textTransform: "lowercase" }}>
                    &nbsp;← Link
                  </span>
                </h4>
                <p>
                  App that I built, based on HTML, CSS, JS and vanta.js. <br />
                  Utilized API (quran.cloud) to fetch the audio of Surah and other
                  relevant information.
                </p>
              </div>
            </div>

            <div className="card" id="card4">
              <div className="overlay">
                <h4>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://iuconnect.live/"
                  >
                    Alumni Connect
                  </a>
                  <span style={{ fontWeight: 100, color: "black", textTransform: "lowercase" }}>
                    &nbsp;← Link (in collab)
                  </span>
                </h4>
                <p>
                  Connecting students to the Alumni <br />
                  Developed using React as the primary framework and
                  Bootstrap for CSS. <br />
                  Used Firebase for backend data storage and management.
                </p>
              </div>
            </div>

            <div className="card" id="card7">
              <div className="overlay">
                <h4>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://codepen.io/khubaibkm/pen/QWrrjjr"
                  >
                    iPhone
                  </a>
                  <span style={{ fontWeight: 100, color: "black", textTransform: "lowercase" }}>
                    &nbsp;← Link
                  </span>
                </h4>
                <p>
                  This is a UI design of an iPhone, created using CSS containing its
                  calculator which is fully working. I wrote the logic in JQuery.
                </p>
              </div>
            </div>

            <div className="card" id="card8">
              <div className="overlay">
                <h4>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://codepen.io/khubaibkm/pen/oNqEgNY"
                  >
                    My Phone
                  </a>
                  <span style={{ fontWeight: 100, color: "black", textTransform: "lowercase" }}>
                    &nbsp;← Link
                  </span>
                </h4>
                <p>
                  This is a UI design of my personal Phone, Redmi Note 8 Pro. During my
                  Summers in 2K22, I used to experiment on CSS, and so made this design.
                </p>
              </div>
            </div>
          </div>

          <div id="green-div">
            <img
              style={{ transform: "rotate(180deg)" }}
              src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg"
              alt=""
            />
            <h4>
              If you liked my projects or if you happen to find any bugs or faults in them,
              Feel free to get in touch with me through the Contact section.
            </h4>
            <img
              src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg"
              alt=""
            />
          </div>
        </div>

        {/* PAGE 4 */}
        <div id="page4">
          <h4>achievements</h4>
          <p>
            Won the Bangalore&apos;s biggest Hackathon, known as the Namma Yatri Open
            Mobility Challenge with my teammate in June&apos;23. We were honored with
            the prize of &#8377; 50,000. To showcase the impact of our solution, we got
            a chance to present it to the whole world at an event organized by the company.
          </p>
          <img id="colon1"
            src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg"
            alt=""
          />
          <img id="colon2"
            style={{ transform: "rotate(180deg)" }}
            src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg"
            alt=""
          />
        </div>

        {/* FOOTER */}
        <div id="footer">
          <img
            src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-footer.svg"
            alt=""
          />
          <div id="f1">
            <h3>Connect <br /> With me.</h3>
          </div>
          <div id="f2">
            <h3>
              <a target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/khubaibahmad122/"
              >
                linkedin <i className="ri-linkedin-line"></i>
              </a>
            </h3>
            <h3>
              <a target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/_._.khubaib._._/"
              >
                instagram <i className="ri-instagram-line"></i>
              </a>
            </h3>
            <h3>
              <a target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/khubaib.ahmad.90281"
              >
                facebook <i className="ri-facebook-circle-line"></i>
              </a>
            </h3>
          </div>
          <div id="f3">
            <h3>
              <a target="_blank"
                rel="noreferrer"
                href="https://github.com/khubaibkm"
              >
                github <i className="ri-github-fill"></i>
              </a>
            </h3>
            <h3>
              <a target="_blank"
                rel="noreferrer"
                href="https://twitter.com/Khubaib56058732"
              >
                twitter <i className="ri-twitter-line"></i>
              </a>
            </h3>
            <h3>
              <a target="_blank"
                rel="noreferrer"
                href="mailto:khubaibahmadkm@gmail.com"
              >
                mail <i className="ri-google-line"></i>
              </a>
            </h3>
          </div>
          <div id="f4">
            <h4>
              Thank you for <br />
              visiting my portfolio,<br />
              You can also checkout<br />
              my{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1h9RQW_XNarLU7EEYeaea0BMrB_WtP_GO/view?usp=drive_link"
              >
                resume
              </a>{" "}
              for
              <br />
              more detail.<br />
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
