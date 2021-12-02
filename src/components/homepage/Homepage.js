import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Search from "../search/Search.js";
import Footer from "../footer/Footer.js";

import "./Homepage.css";

import { scrollToElement } from "../../utils/scrollToElement.js";

import logo from "./logo.png";
import TIP_logo from "./TIP_logo.png";
import nj from "./nj.webm";
import firstFrame from "./firstFrame.jpg";

class Homepage extends Component {
  toTop = () => window.scroll({ top: 0, behavior: "smooth" });

  render() {
    return (
      <div className="homepage">
        <div className="landing">
          <header className="homepage-banner">
            <div id="banner-logo">
              <a href="https://www.dvrpc.org/">
                <img src={logo} alt="dvrpc logo" id="dvrpc-logo" />
              </a>
            </div>
            <div className="stacked-headers">
              <img
                id="banner-tip-logo"
                src={TIP_logo}
                alt="Transportation Improvement Program logo"
              />
              <h1>
                FY2022 Transportation Improvement
                <br />
                Program for New Jersey (FY22—FY25)
              </h1>
            </div>
          </header>

          <div className="homepage-main">
            <video
              playsInline
              autoPlay
              muted
              loop
              poster={firstFrame}
              id="bgvid"
            >
              <source src={nj} type="video/webm " />
            </video>
            <div id="search-form">
              <Search />
            </div>
          </div>

          <div className="homepage-bottom-bar">
            <a href="/TIP/NJ/keyword/*" className="homepage-bottom-bar-a">
              View Full TIP Map
            </a>

            <span className="homepage-bottom-bar-vr">|</span>

            <a
              href="#tip-info"
              className="homepage-bottom-bar-a"
              onClick={(e) => {
                scrollToElement(this, e, "tipInfo");
              }}
            >
              More Information
            </a>
            <a
              href="#tip-info"
              className="homepage-bottom-bar-a"
              onClick={(e) => {
                scrollToElement(this, e, "tipInfo");
              }}
            >
              <span className="homepage-bottom-bar-icon">&darr;</span>
            </a>
          </div>
        </div>

        <main id="tip-info" ref={(el) => (this.tipInfo = el)}>
          <aside id="nav-links-box">
            <ul>
              <li>
                <a href="https://www.dvrpc.org/TIP/">TIP Homepage</a>
              </li>
              <li>
                <a href="https://arcg.is/19nnb0">TIP Fundamentals</a>
              </li>
              <li>
                <a href="https://www.dvrpc.org/Products/17065/">TIP Guide</a>
              </li>
              <li>
                <a href="https://www.dvrpc.org/TIP/NJ/">FY2022 TIP for NJ</a>
              </li>
              <li>
                <a href="https://www.dvrpc.org/TIP/PA/">FY2021 TIP for PA</a>
              </li>
              <li>
                <a href="https://www.dvrpc.org/ProjectImplementation/">
                  Project Implementation
                </a>
              </li>
            </ul>

            <hr id="nav-links-hr" />

            <div id="homepage-to-top" onClick={this.toTop}>
              <span>&uarr;</span>
              <div>to top</div>
            </div>
          </aside>

          <article id="tip-info-paragraphs">
            <section>
              <h2 className="info-section-header" id="main-section-header">
                FY2022 Transportation Improvement Program for New Jersey
                (FY22—FY25)
              </h2>
              <p>
                On September 23, 2021 after a 30+ day public comment period, the
                DVRPC Board adopted the DVRPC FY2022 Transportation Improvement
                Program (TIP) for federal FY22-25 as the priority program of
                highway and transit projects for Burlington, Camden, Gloucester,
                and Mercer counties, including the cities of Camden and Trenton.
                It effectively became the official DVRPC TIP for New Jersey
                after federal approval on November 22, 2021. This regional TIP
                is included in the Statewide TIP (STIP), and was developed in
                cooperation with NJDOT, NJ TRANSIT, DRPA/PATCO, and DVRPC's
                member cities and counties in New Jersey. The TIP is a dynamic
                document. Modifications or amendments made to the TIP per{" "}
                <a href="/TIP/NJ/pdf/B.pdf">the MOU</a> are summarized in the{" "}
                <a href="/TIP/NJ/pdf/Act22.pdf">
                  TIP Amendments or Modifications report
                </a>{" "}
                that is regularly updated throughout the life of the TIP.
              </p>
              <a href="https://arcg.is/19nnb0" rel="external">
                <figure>
                  <img
                    src="https://www.dvrpc.org/TIP/img/TIPStoryMapScreenshot.png"
                    alt="TIP Fundamentals"
                  />
                  <figcaption>TIP Fundamentals: Learn the Basics</figcaption>
                </figure>
              </a>
              <p>
                <strong>
                  <a href="/TIP/NJ/pdf/tips.pdf">Click here</a> to view helpful
                  tips that can make a public comment more effective, such as
                  when commenting on TIP Actions for DVRPC Board consideration.
                </strong>
              </p>
            </section>

            <section>
              <h2 className="info-section-header">Detailed Information</h2>
              <ul className="list-group">
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/22001B.pdf">
                    Highlights of the DVRPC FY2022 TIP for New Jersey
                    (FY22-FY25)
                  </a>{" "}
                  (<a href="/TIP/NJ/pdf/22001Bes.pdf">en Español</a>)
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/22001A.pdf">
                    DVRPC FY2022 TIP for New Jersey (Full Document)
                  </a>
                </li>
              </ul>

              <h3>Detailed Information</h3>
              <ul className="list-group">
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/1.pdf">
                    Chapter 1: General Overview of the TIP
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/2.pdf">Chapter 2: Program Summaries</a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/3.pdf">
                    Chapter 3: Responding to Environmental Justice (EJ) and
                    Title VI Concerns
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/4.pdf">
                    Chapter 4: Performance-Based Planning and Programming
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/5.pdf">Chapter 5: Public Involvement</a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/6.pdf">
                    Chapter 6: Mapping Application and Listings Overview
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/7.pdf">Chapter 7: Programs</a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/8.pdf">
                    Chapter 8: Project Listings by Program
                  </a>
                </li>
              </ul>

              <h3>Helpful Project Indices:</h3>
              <ul className="list-group">
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/NJ-CorresByTitle.pdf">
                    Project Index by Title
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/NJ-CorresByDB.pdf">
                    Project Index by DB #
                  </a>
                </li>
              </ul>

              <h3>DVRPC Regional Highway Program by County</h3>
              <ul className="list-group">
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/burlington.pdf">Burlington County</a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/camden.pdf">Camden County</a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/gloucester.pdf">Gloucester County</a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/mercer.pdf">Mercer County</a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/various.pdf">Various Counties</a>
                </li>
              </ul>

              <h3>DVRPC Regional Transit Program by Operator</h3>
              <ul className="list-group">
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/njt.pdf">NJ TRANSIT Projects</a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/drpa.pdf">DRPA/PATCO Projects</a>
                </li>
              </ul>

              <ul className="list-group">
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/stwd.pdf">
                    New Jersey Statewide Programs
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/sd22.pdf">
                    Study and Development Projects
                  </a>
                </li>
              </ul>

              <ul className="list-group">
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/9.pdf">
                    Chapter 9: Major Project Status Report
                  </a>
                </li>
              </ul>

              <h3>Appendices</h3>
              <ul className="list-group">
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/A.pdf">A – Board Resolutions</a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/B.pdf">
                    B – Financial Tables Used in Developing the Program,
                    Including the Statewide TIP (STIP) Introduction
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/C.pdf">
                    C – Executive Summary of the Documentation of the Conformity
                    Finding
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/D.pdf">
                    D – Memorandum of Understanding on Procedures to Amend and
                    Modify the TIP
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/E.pdf">E – DVRPC Local Program</a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/F.pdf">
                    F – DVRPC TIP Project Benefit Criteria
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/G.pdf">
                    G – Environmental Justice Appendix
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/H.pdf">
                    H – Summary of the TIP Public Involvement Process, Public
                    Comments, Agency Responses, and List of Recommended Changes
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="info-section-header">
                Read Submitted Public Comments:
              </h2>
              <p>
                The public comment period for the Draft TIP and STIP documents
                closed on August 23, 2021 at 5:00 PM (EST). Written comments
                received during the public comment period and responses to those
                comments are included in{" "}
                <a href="/TIP/NJ/pdf/H.pdf">Appendix H (Addendum)</a> of the{" "}
                <a href="/TIP/NJ/pdf/22001A.pdf">final printed TIP document</a>,
                as part of the public record. Project-specific comments
                submitted are shown on the web map.{" "}
                <a href="/TIP/NJ/pdf/general.pdf">
                  View general comments and responses here
                </a>
                , or use the webmap to see project-specific comments and
                responses. After consideration of the public comments received,
                the Draft TIP with any recommended changes were presented to the
                DVRPC Board for adoption at the September 23, 2021 Board
                meeting.
              </p>
            </section>
          </article>
        </main>

        <Footer />
      </div>
    );
  }
}

export default withRouter(Homepage);
