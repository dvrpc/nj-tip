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
                Draft FY2022 Transportation Improvement
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
            <a href="/TIP/Draft/keyword/*" className="homepage-bottom-bar-a">
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
                <a href="https://www.dvrpc.org/TIP/PA/">FY2021 TIP for PA</a>
              </li>
              <li>
                <a href="https://www.dvrpc.org/TIP/NJ/">FY2020 TIP for NJ</a>
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
                Draft FY2022 Transportation Improvement Program for New Jersey
                (FY22—FY25)
              </h2>
              <p>
                The Draft DVRPC FY2022 TIP (FY22—FY25) for the New Jersey
                portion of the region was developed in cooperation with the New
                Jersey Department of Transportation (NJDOT), New Jersey Transit
                Corporation (NJ TRANSIT), the Delaware River Port Authority
                (DRPA), and DVRPC member cities and counties. The Draft TIP,
                along with public comments received by the deadline, agency
                responses, and after the public comment period, a list of
                recommended changes to the Draft TIP, are expected to be
                presented to the DVRPC Board for adoption in September 2021.
                When also approved by the FHWA and FTA, the DVRPC FY2022 TIP for
                New Jersey will become effective, thereby replacing the FY2020
                TIP. At that time, it will be posted on the DVRPC website.
              </p>
              <h2>NOW ACCEPTING PUBLIC COMMENTS!</h2>
              <p>
                <strong>
                  As of 5:00 PM (EST) on July 21st, the Draft DVRPC TIP and
                  <a href="https://www.state.nj.us/transportation/capital/stip2231/">
                    NJDOT and NJ TRANSIT’s Draft Statewide (STIP)
                  </a>{" "}
                  are currently open for public review and comment until August
                  23, 2021, at 5:00 PM (EST) (see{" "}
                  <a href="https://www.dvrpc.org/getinvolved/publicnotices">
                    Public Notice
                  </a>
                  ).
                </strong>{" "}
                NJDOT and NJ TRANSIT do not hold a separate public comment
                period or meeting for the Draft STIP and rely on DVRPC and other
                MPOs to serve as the vehicle for this federal requirement.
              </p>
              <p>
                <strong>
                  <a href="/TIP/Draft/pdf/tips.pdf">Click here</a>{" "}
                  <span className="sm"> [0.3 MB pdf] </span>to view helpful tips
                  that can make a public comment more effective
                </strong>
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
              <h2>Public Meetings</h2>
              <p>
                To abide by public health guidelines for public gatherings, you
                are invited to join one or both online public
                meetings/information sessions via webinar or by phone in
                listen-only mode, as scheduled:
              </p>
              <h3>Wednesday, August 11, 2021, from 2:00 PM—3:00 PM</h3>
              <a href="" className="button">
                Click here to register
              </a>
              <p>
                Call-in information: 646-558-8656
                <br />
                Meeting ID: 934 8624 1523
                <br />
                Passcode: Ld6YeTd3
              </p>
              <h3>Wednesday, August 18, 2021, at 7:00 PM—8:00 PM</h3>
              <a href="" className="button">
                Click here to register
              </a>
              <p>
                Call-in information: 646-558-8656
                <br />
                Meeting ID: 987 8869 6352
                <br />
                Passcode: MU7XWu09
              </p>
              <p>
                For any accommodations, including closed captioning and
                interpretation, please contact the DVRPC Office of
                Communications and Engagement at 215-592-1800 or{" "}
                <a href="mailto:public_affairs@dvrpc.org">
                  public_affairs@dvrpc.org
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="info-section-header">Draft Documents</h2>
              <ul className="list-group">
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/22001B_draft.pdf">
                    Highlights of the Draft DVRPC FY2022 TIP for New Jersey
                    (FY22-FY25)
                  </a>{" "}
                  <span className="sm">[43.3 MB pdf]</span> (
                  <a href="/TIP/Draft/pdf/22001Bes_draft.pdf">en Español</a>{" "}
                  <span className="sm">[2.0 MB pdf]</span>)
                </li>
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/22001A_draft.pdf">
                    Draft DVRPC FY2022 TIP for New Jersey (Full Document)
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/stip_draft.pdf">
                    Draft FY2022 STIP for NJDOT and NJ TRANSIT
                  </a>
                </li>
              </ul>

              <h3>Detailed Information</h3>
              <ul className="list-group">
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/1.pdf">
                    Chapter 1: General Overview of the TIP
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/2.pdf">
                    Chapter 2: Program Summaries
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/3.pdf">
                    Chapter 3: Responding to Environmental Justice (EJ) and
                    Title VI Concerns
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/4.pdf">
                    Chapter 4: Performance-Based Planning and Programming
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/5.pdf">
                    Chapter 5: Public Involvement
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/6.pdf">
                    Chapter 6: Mapping Application and Listings Overview
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/7.pdf">Chapter 7: Programs</a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/8.pdf">
                    Chapter 8: Project Listings by Program
                  </a>
                </li>
              </ul>

              <h3>Helpful Project Indices:</h3>
              <ul className="list-group">
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/NJ-CorresByTitle.pdf">
                    Project Index by Title
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/NJ-CorresByDB.pdf">
                    Project Index by DB #
                  </a>
                </li>
              </ul>

              <ul className="list-group">
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/8.pdf">
                    Draft TIP Sample Project Listing Roadmap
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/8.pdf">
                    All Projects in DVRPC NJ Region
                  </a>
                </li>
              </ul>

              <h3>DVRPC Regional Highway Program by County</h3>
              <ul className="list-group">
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/burlington.pdf">Burlington County</a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/camden.pdf">Camden County</a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/gloucester.pdf">Gloucester County</a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/mercer.pdf">Mercer County</a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/various.pdf">Various Counties</a>
                </li>
              </ul>

              <h3>DVRPC Regional Transit Program by Operator</h3>
              <ul className="list-group">
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/njt.pdf">NJ TRANSIT Projects</a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/drpa.pdf">DRPA/PATCO Projects</a>
                </li>
              </ul>

              <ul className="list-group">
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/stwd.pdf">
                    New Jersey Statewide Programs
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/sd22.pdf">
                    Study and Development Projects
                  </a>
                </li>
              </ul>

              <ul className="list-group">
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/9.pdf">
                    Chapter 9: Major Project Status Report
                  </a>
                </li>
              </ul>

              <h3>Appendices</h3>
              <ul className="list-group">
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/A.pdf">
                    A – Acknowledgement of Board Resolutions
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/B.pdf">
                    B – Financial Tables Used in Developing the Draft Program,
                    Including the Draft Statewide TIP (STIP) Introduction
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/C.pdf">
                    C – Acknowledgment of the Executive Summary of the Draft
                    Documentation of the Conformity Finding
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/D.pdf">
                    D – Memorandum of Understanding on Procedures to Amend and
                    Modify the TIP
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/E.pdf">E – DVRPC Local Program</a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/F.pdf">
                    F – DVRPC TIP Project Benefit Criteria
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/G.pdf">
                    G –Environmental Justice Appendix
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/Draft/pdf/H.pdf">
                    H – Acknowledgment of Summary of the TIP Public Involvement
                    Process, Public Comments, Original Public Comments, Agency
                    Responses, and List of Recommended Changes
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
                closed on August 9, 2019. Written comments received during the
                public comment period and responses to those comments are
                included in <a href="/TIP/Draft/pdf/G.pdf">Appendix G</a>{" "}
                <span className="sm">[3.8 MB pdf]</span> of the{" "}
                <a href="/TIP/Draft/pdf/20001A.pdf">
                  final printed TIP document
                </a>{" "}
                <span className="sm">[7.6 MB pdf]</span>, as part of the public
                record. Project-specific comments submitted are also shown on
                the web map.{" "}
                <a href="/TIP/Draft/pdf/general.pdf">
                  View general comments and responses here
                </a>
                , <span className="sm">[0.5 MB pdf]</span> or use the webmap to
                see project-specific comments and responses. After consideration
                of the public comments received, the Draft TIP with any
                recommended changes were presented to the DVRPC Board for
                adoption at the September 26, 2019 Board meeting.
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
