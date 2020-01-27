import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Search from "../search/Search.js";
import Footer from "../footer/Footer.js";
import ReadOnlyComments from "../comments/ReadOnlyComments.js";

import "./Homepage.css";

import { getGeneralComments } from "../reducers/commentsReducer.js";
import { scrollToElement } from "../../utils/scrollToElement.js";

import logo from "./logo.png";
import TIP_logo from "./TIP_logo.png";
import arrow from "./arrow.png";
import nj from "./nj.webm";
import firstFrame from "./firstFrame.jpg";

class Homepage extends Component {
  componentDidMount() {
    this.props.getGeneralComments();
  }

  render() {
    const comments = this.props.comments.comments || [];

    return (
      <div className="homepage">
        <div className="landing">
          <header className="homepage-banner">
            <div id="banner-logo">
              <a href="https://www.dvrpc.org/">
                <img src={logo} alt="dvrpc logo" />
              </a>
            </div>
            <div className="stacked-headers">
              <img
                id="banner-tip-logo"
                src={TIP_logo}
                alt="Transportation Improvement Program logo"
              />
              <h1>
                FY2020 Transportation Improvement
                <br />
                Program (TIP) for New Jersey (FY20-FY23)
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
              <source src={nj} type="video/webm" />
            </video>
            <div id="search-form">
              <Search />
            </div>
          </div>

          <div className="homepage-bottom-bar">
            <a
              href="#tip-info"
              onClick={e => {
                scrollToElement(this, e, "tipInfo");
              }}
            >
              <span>More Information</span>
              <img src={arrow} alt="down navigation arrow" />
            </a>
          </div>
        </div>

        <main
          id="tip-info"
          ref={el => {
            this.tipInfo = el;
          }}
        >
          <aside id="nav-links-box">
            <p>
              <a href="https://www.dvrpc.org/TIP/">
                Transportation Improvement Program (TIP)
              </a>
            </p>
            <ul>
              <li>
                <b>FY2020 TIP for NJ</b>
              </li>
              <li>
                <a href="https://www.dvrpc.org/Products/17065/">TIP Guide</a>
              </li>
              <li>
                <a href="https://www.dvrpc.org/TIP/PA/">FY2019 TIP for PA</a>
              </li>
              <li>
                <a href="https://www.dvrpc.org/ProjectImplementation/">
                  Project Implementation
                </a>
              </li>
            </ul>
          </aside>

          <article id="tip-info-paragraphs">
            <section>
              <h2 className="info-section-header" id="main-section-header">
                FY2020 Transportation Improvement Program for New Jersey
                (FY20-FY23)
              </h2>
              <p>
                On September 26, 2019 after a 30+ day public comment period, the
                DVRPC Board adopted the DVRPC FY2020 Transportation Improvement
                Program (TIP) for FY20-23 with Recommended Changes as the
                priority program of highway and transit projects for Burlington,
                Camden, Gloucester, and Mercer counties, including the cities of
                Camden and Trenton. It effectively became the official DVRPC TIP
                for New Jersey after federal approval by FHWA, FTA, and EPA on
                December 5, 2019. This regional TIP is included in the Statewide
                TIP (STIP), and was developed in cooperation with NJDOT, NJ
                TRANSIT, DRPA/PATCO, and DVRPC's member cities and counties in
                NJ. The TIP is a dynamic document. Project Listings below are
                regularly updated via{" "}
                <a href="/TIP/NJ/pdf/Act20.pdf">
                  TIP amendments or modifications
                </a>{" "}
                <span className="sm">[0.1 MB pdf]</span> to the program.
              </p>
              <p>
                <strong>
                  <a href="/TIP/NJ/pdf/tips.pdf">Click here</a>{" "}
                  <span className="sm"> [0.3 MB pdf] </span>
                  to view helpful tips that can make a public comment more
                  effective
                </strong>
              </p>
            </section>

            <section>
              <h2 className="info-section-header">Detailed Information</h2>
              <ul className="list-group">
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/20001B.pdf">
                    Highlights of the FY2020 TIP for NJ
                  </a>{" "}
                  <span className="sm">[43.3 MB pdf]</span>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/1.pdf">General Overview of the TIP</a>{" "}
                  <span className="sm">[1 MB pdf]</span>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/2.pdf">Program Summaries</a>{" "}
                  <span className="sm">[0.3 MB pdf]</span>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/3.pdf">
                    Responding to Environmental Justice (EJ) and Title VI
                    Concerns
                  </a>{" "}
                  <span className="sm">[0.2 MB pdf]</span>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/4.pdf">
                    Performance-Based Planning and Programming (PBPP)
                  </a>{" "}
                  <span className="sm">[0.2 MB pdf]</span>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/5.pdf">Public Involvement</a>{" "}
                  <span className="sm">[0.1 MB pdf]</span>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/6.pdf">
                    Mapping Application and Listings Overview (Includes Codes
                    and Abbreviations)
                  </a>{" "}
                  <span className="sm">[0.2 MB pdf]</span>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/7.pdf">Programs</a>{" "}
                  <span className="sm">[0.2 MB pdf]</span>
                  <ul>
                    <li>
                      <a href="/TIP/NJ/pdf/NJ-CorresByTitle.pdf">
                        Project Index By Title
                      </a>{" "}
                      <span className="sm"> [0.2 MB pdf]</span>
                    </li>
                    <li>
                      <a href="/TIP/NJ/pdf/NJ-CorresByDB.pdf">
                        Project Index By DB#
                      </a>{" "}
                      <span className="sm"> [0.1 MB pdf]</span>
                    </li>
                  </ul>
                </li>
                <li className="list-group-item">
                  Project Listings
                  <ul>
                    <li>
                      <a href="/TIP/NJ/pdf/Roadmap.pdf">
                        TIP Project Listing Roadmap
                      </a>
                      <span className="sm"> [0.2 MB pdf]</span>
                    </li>
                    <li>
                      <a href="/TIP/NJ/pdf/8.pdf">
                        All Projects in DVRPC NJ Region
                      </a>{" "}
                      <span className="sm"> [3 MB pdf]</span>
                    </li>
                    <li>
                      DVRPC Regional Highway Program by County
                      <ul>
                        <li>
                          <a href="/TIP/NJ/pdf/burlington.pdf">
                            Burlington County
                          </a>{" "}
                          <span className="sm"> [0.1 MB pdf]</span>
                        </li>
                        <li>
                          <a href="/TIP/NJ/pdf/camden.pdf">Camden County</a>{" "}
                          <span className="sm"> [0.2 MB pdf]</span>
                        </li>
                        <li>
                          <a href="/TIP/NJ/pdf/gloucester.pdf">
                            Gloucester County
                          </a>{" "}
                          <span className="sm"> [0.1 MB pdf]</span>
                        </li>
                        <li>
                          <a href="/TIP/NJ/pdf/mercer.pdf">Mercer County</a>{" "}
                          <span className="sm"> [0.2 MB pdf]</span>
                        </li>
                        <li>
                          <a href="/TIP/NJ/pdf/various.pdf">Various Counties</a>{" "}
                          <span className="sm"> [0.1 MB pdf]</span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      DVRPC Regional Transit Program by Operator
                      <ul>
                        <li>
                          <a href="/TIP/NJ/pdf/drpa.pdf">DRPA/PATCO</a>
                          <span className="sm"> [0.2 MB pdf]</span>
                        </li>
                        <li>
                          <a href="/TIP/NJ/pdf/njt.pdf">NJ TRANSIT</a>
                          <span className="sm"> [0.6 MB pdf]</span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/TIP/NJ/pdf/stwd.pdf">Statewide Program</a>{" "}
                      <span className="sm"> [0.9 MB pdf]</span>
                    </li>
                    <li>
                      <a href="/TIP/NJ/pdf/sd20.pdf">
                        Study and Development Program
                      </a>{" "}
                      <span className="sm"> [0.2 MB pdf]</span>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/TIP/NJ/pdf/9.pdf">Major Project Status Report</a>{" "}
                  <span className="sm"> [0.1 MB pdf]</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="info-section-header">Appendices</h2>
              <ul className="list-group">
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/A.pdf">A - Board Resolutions</a>{" "}
                  <span className="sm">[0.3 MB pdf]</span>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/B.pdf">
                    B - Statewide TIP (STIP) Financial Tables, including the
                    STIP Introduction
                  </a>{" "}
                  <span className="sm">[2 MB pdf]</span>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/C.pdf">
                    C - Executive Summary of the Documentation of the Conformity
                    Finding
                  </a>{" "}
                  <span className="sm">[0.3 MB pdf]</span>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/D.pdf">
                    D – Memorandum of Understanding on Procedures to Amend and
                    Modify the TIP
                  </a>{" "}
                  <span className="sm">[1 MB pdf]</span>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/E.pdf">E – DVRPC Local Program</a>{" "}
                  <span className="sm">[0.5 MB pdf]</span>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/F.pdf">
                    F – DVRPC TIP Project Benefit Criteria
                  </a>{" "}
                  <span className="sm">[0.5 MB pdf]</span>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/G.pdf">
                    G - Summary of the TIP Public Involvement Process, Public
                    Comments, Agency Responses, and List of Recommended Changes
                  </a>{" "}
                  <span className="sm">[0.3 MB pdf]</span>
                </li>
                <li className="list-group-item">
                  <a href="/TIP/NJ/pdf/20001A.pdf">Full TIP Document</a>{" "}
                  <span className="sm">[7.6 MB pdf]</span>
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
                included in <a href="/TIP/NJ/pdf/G.pdf">Appendix G</a>{" "}
                <span className="sm">[3.8 MB pdf]</span> of the{" "}
                <a href="/TIP/NJ/pdf/20001A.pdf">final printed TIP document</a>{" "}
                <span className="sm">[7.6 MB pdf]</span>, as part of the public
                record. Project-specific comments submitted are also shown on
                the web map.{" "}
                <a href="/TIP/NJ/pdf/general.pdf">
                  View general comments and responses here
                </a>
                , <span className="sm">[0.5 MB pdf]</span> or use the webmap to
                see project-specific comments and responses. After consideration
                of the public comments received, the Draft TIP with any
                recommended changes were presented to the DVRPC Board for
                adoption at the September 26, 2019 Board meeting.
              </p>
              <p
                ref={el => {
                  this.generalComment = el;
                }}
              ></p>
            </section>
          </article>
        </main>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.getComments
});

const mapDispatchToProps = dispatch => ({
  getGeneralComments: () => dispatch(getGeneralComments())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Homepage)
);
