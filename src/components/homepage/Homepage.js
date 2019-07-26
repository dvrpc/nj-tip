import Inferno, { Component } from "inferno";
import { withRouter } from "inferno-router";

import Search from "../search/Search.js";
import Comments from "../comments/Comments.js";
import Footer from "../footer/Footer.js";

import "./Homepage.css";

import { scrollToElement } from "../../utils/scrollToElement.js";

import logo from "./logo.png";
import TIP_logo from "./TIP_logo.png";
import arrow from "./arrow.png";
import nj from "./nj.webm";
import firstFrame from "./firstFrame.jpg";

class Homepage extends Component {
  render() {
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
                Draft FY2020 Transportation Improvement
                <br />
                Program (TIP) for New Jersey (FY20-FY23)
              </h1>
            </div>
          </header>

          <div className="homepage-main">
            <video
              playsinline
              autoplay
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
              id="more-info-scroll"
              href="#tip-info"
              onClick={e => {
                scrollToElement(this, e, "tipInfo");
              }}
            >
              <span>More Information</span>
              <img src={arrow} alt="down navigation arrow" />
            </a>
            <a
              href="#comments-anchor"
              onClick={e => {
                scrollToElement(this, e, "generalComment");
              }}
            >
              <span>Submit a General Comment</span>
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
                Draft FY2020 Transportation Improvement Program for New Jersey
                (FY20-FY23)
              </h2>
              <p>
                The DVRPC Draft TIP for NJ represents the region's federally
                funded transportation improvement priorities and is required by
                federal law in order for the region to receive and spend federal
                transportation funds. It has been developed in cooperation with
                NJDOT, NJ TRANSIT, DRPA/PATCO and DVRPC's member counties and
                cities. After consideration of public comments, the Draft TIP
                with any recommended changes will be presented to the DVRPC
                Board for adoption at the regularly scheduled Board meeting on
                September 26, 2019.
              </p>
              <p>
                DVRPC invites you to review and comment on the Draft FY2020 TIP
                for the NJ that shows a program of priority transportation
                projects in the counties of Burlington, Camden, Gloucester, and
                Mercer, including the cities of Camden and Trenton, and the{" "}
                <a
                  href="https://www.state.nj.us/transportation/capital/stip2029/"
                  rel="external"
                >
                  Draft FY2020 Statewide TIP (STIP)
                </a>{" "}
                for the entire state of New Jersey. The Draft TIP is included in
                the{" "}
                <a
                  href="https://www.state.nj.us/transportation/capital/stip2029/"
                  rel="external"
                >
                  Draft STIP
                </a>
                . While{" "}
                <strong>
                  the public comment period ends at 5:00 PM Eastern Time on
                  Friday, August 9, 2019
                </strong>
                , the Draft STIP public comment period will remain open until
                all three NJ Metropolitan Planning Organizations (MPOs) have
                closed their Draft TIP public comment periods. NJDOT, NJ TRANSIT
                and the DRPA/PATCO do not hold a separate public comment period
                or meeting for the Draft STIP and rely on DVRPC and other MPOs
                to serve as a vehicle for this federal requirement.
              </p>
              <p>
                A public meeting/information session that DVRPC will jointly
                conduct with NJDOT, NJ TRANSIT and the DRPA/PATCO is scheduled
                on:
                <br />
                <strong>
                  MONDAY, JULY 29, 2019
                  <br />
                  6:00PM - 8:00PM (EST)
                  <br />
                  <address className="homepage-address">
                    ROOM 211
                    <br />
                    JOYCE MCDADE ADMINISTRATION BUILDING
                    <br />
                    640 SOUTH BROAD STREET
                    <br />
                    TRENTON, NJ, 08650
                  </address>
                </strong>
              </p>
              <p>
                Although registration is not required, please RSVP by contacting
                (215) 592-1800 or{" "}
                <a href="mailto:public_affairs@dvrpc.org">
                  public_affairs@dvrpc.org
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="info-section-header">
                How to Submit a Public Comment:{" "}
              </h2>
              <p>
                Submit comments online by clicking the "Search &amp; Comment on
                Draft TIP Projects" feature above or "Submit a General Comment
                on the Draft TIP or Statewide TIP (STIP)" feature below in order
                for a response to be provided in the final TIP document. You can
                still send comments by:
              </p>
              <ul>
                <li>
                  email to <a href="mailto:TIP@dvrpc.org">TIP@dvrpc.org</a>
                </li>
                <li>fax to (215) 592 - 9125; or</li>
                <li>
                  mail to
                  <address className="homepage-address">
                    Attention: NJ TIP Comments
                    <br />
                    c/o DVRPC Office of Communications and Engagement
                    <br />
                    190 N. Independence Mall West, 8th Fl.
                    <br />
                    Philadelphia, PA 19106
                  </address>
                </li>
              </ul>
              <p
                ref={el => {
                  this.generalComment = el;
                }}
              >
                <strong>
                  <a href="/TIP/Draft/pdf/tips.pdf">Click here</a>{" "}
                  <span class="sm"> [0.3 MB pdf] </span>
                  to view helpful tips that can make a public comment more
                  effective
                </strong>
              </p>
              <Comments
                colorScheme={null}
                projectId={null}
                title={
                  "Submit a General Comment on the Draft TIP or Statewide TIP (STIP)"
                }
              />
            </section>

            <section>
              <h2 className="info-section-header">
                What happens after the public comment period ends?
              </h2>
              <p>
                Written comments received during the public comment period and
                responses to those comments will be provided in the final
                printed TIP document as part of the public record. After
                consideration of the public comments received, the Draft TIP
                with any recommended changes will be presented to the DVRPC
                Board for adoption at the September 26, 2019 regularly scheduled
                Board meeting. Note that comments received after the comment
                period is over might not receive a response or be included in
                the final TIP document.
              </p>
            </section>

            <section>
              <h2 className="info-section-header">Detailed Information</h2>
              <ul class="list-group">
                <li class="list-group-item">
                  <a href="/TIP/Draft/pdf/HighlightsNJ20.pdf">
                    Highlights of the Draft FY2020 TIP for NJ
                  </a>{" "}
                  <span class="sm">[86 MB pdf]</span>
                </li>
                <li class="list-group-item">
                  <a href="/TIP/Draft/pdf/20001Ces.pdf">
                    Aspectos destacados del Borrador del Programa de Mejora del
                    Transporte (TIP) de la DVRPC para el FY2020 de Nueva Jersey
                    (FY20 - FY23)
                  </a>{" "}
                  <span class="sm">[86 MB pdf]</span>
                </li>
                <li class="list-group-item">
                  <a href="/TIP/Draft/pdf/1.pdf">General Overview of the TIP</a>{" "}
                  <span class="sm">[1 MB pdf]</span>
                </li>
                <li class="list-group-item">
                  <a href="/TIP/Draft/pdf/2.pdf">Program Summaries</a>{" "}
                  <span class="sm">[0.3 MB pdf]</span>
                </li>
                <li class="list-group-item">
                  <a href="/TIP/Draft/pdf/3.pdf">
                    Responding to Environmental Justice (EJ) and Title VI
                    Concerns
                  </a>{" "}
                  <span class="sm">[0.2 MB pdf]</span>
                </li>
                <li class="list-group-item">
                  <a href="/TIP/Draft/pdf/4.pdf">
                    Performance-Based Planning and Programming (PBPP)
                  </a>{" "}
                  <span class="sm">[0.2 MB pdf]</span>
                </li>
                <li class="list-group-item">
                  <a href="/TIP/Draft/pdf/5.pdf">Public Involvement</a>{" "}
                  <span class="sm">[0.1 MB pdf]</span>
                  <ul>
                    <li>
                      <a href="https://www.dvrpc.org/getinvolved/publicnotices/2019-nj-tip.html">
                        Public Notice
                      </a>{" "}
                    </li>
                    <li>
                      <a href="/TIP/Draft/pdf/Libraries.pdf">
                        Libraries Displaying the Draft TIP
                      </a>{" "}
                      <span class="sm"> [0.1 MB pdf]</span>
                    </li>
                    <li>
                      <a href="/TIP/Draft/pdf/tips.pdf">
                        Make Your Public Comment More Effective
                      </a>{" "}
                      <span class="sm"> [0.3 MB pdf]</span>
                    </li>
                  </ul>
                </li>
                <li class="list-group-item">
                  <a href="/TIP/Draft/pdf/6.pdf">
                    Mapping Application and Listings Overview (Includes Codes
                    and abbreviations)
                  </a>{" "}
                  <span class="sm">[0.2 MB pdf]</span>
                </li>
                <li class="list-group-item">
                  <a href="/TIP/Draft/pdf/7.pdf">Programs</a>{" "}
                  <span class="sm">[0.2 MB pdf]</span>
                  <ul>
                    Helpful Project Indexes:
                    <li>
                      <a href="/TIP/Draft/pdf/NJ-CorresByTitle.pdf">By Title</a>{" "}
                      <span class="sm"> [0.2 MB pdf]</span>
                    </li>
                    <li>
                      <a href="/TIP/Draft/pdf/NJ-CorresByDB.pdf">By DB#</a>{" "}
                      <span class="sm"> [0.1 MB pdf]</span>
                    </li>
                  </ul>
                </li>
                <li class="list-group-item">
                  Project Listings
                  <ul>
                    <li>
                      <a href="/TIP/Draft/pdf/Roadmap.pdf">Roadmap</a>
                      <span class="sm"> [0.2 MB pdf]</span>
                    </li>
                    <li>
                      <a href="/TIP/Draft/pdf/8.pdf">
                        All Projects in DVRPC NJ Region
                      </a>{" "}
                      <span class="sm"> [3 MB pdf]</span>
                    </li>
                    <li>
                      <a href="/TIP/Draft/pdf/Roadmap.pdf">
                        Draft TIP Project Listing Roadmap
                      </a>{" "}
                      <span class="sm"> [0.2 MB pdf]</span>
                    </li>
                    <li>
                      DVRPC Regional Highway Program by County
                      <ul>
                        <li>
                          <a href="/TIP/Draft/pdf/burlington.pdf">
                            Burlington County
                          </a>{" "}
                          <span class="sm"> [0.1 MB pdf]</span>
                        </li>
                        <li>
                          <a href="/TIP/Draft/pdf/camden.pdf">Camden County</a>{" "}
                          <span class="sm"> [0.2 MB pdf]</span>
                        </li>
                        <li>
                          <a href="/TIP/Draft/pdf/drpa.pdf">DRPA/PATCO</a>
                          <span class="sm"> [0.2 MB pdf]</span>
                        </li>
                        <li>
                          <a href="/TIP/Draft/pdf/gloucester.pdf">
                            Gloucester County
                          </a>{" "}
                          <span class="sm"> [0.1 MB pdf]</span>
                        </li>
                        <li>
                          <a href="/TIP/Draft/pdf/mercer.pdf">Mercer County</a>{" "}
                          <span class="sm"> [0.2 MB pdf]</span>
                        </li>
                        <li>
                          <a href="/TIP/Draft/pdf/njt.pdf">NJ TRANSIT</a>
                          <span class="sm"> [0.6 MB pdf]</span>
                        </li>
                        <li>
                          <a href="/TIP/Draft/pdf/various.pdf">
                            Various Counties
                          </a>{" "}
                          <span class="sm"> [0.1 MB pdf]</span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/TIP/Draft/pdf/stwd.pdf">Statewide Program</a>{" "}
                      <span class="sm"> [0.9 MB pdf]</span>
                    </li>
                    <li>
                      <a href="/TIP/Draft/pdf/sd20.pdf">
                        Study and Development Program
                      </a>{" "}
                      <span class="sm"> [0.2 MB pdf]</span>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/TIP/Draft/pdf/9.pdf">Major Project Status Report</a>{" "}
                  <span class="sm"> [0.1 MB pdf]</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="info-section-header">Appendices</h2>
              <ul class="list-group">
                <li class="list-group-item">
                  <a href="/TIP/Draft/pdf/A.pdf">
                    A - Acknowledgement of Board Resolutions
                  </a>{" "}
                  <span class="sm">[0.3 MB pdf]</span>
                </li>
                <li class="list-group-item">
                  <a href="/TIP/Draft/pdf/B.pdf">
                    B - Financial Tables Used in Developing the Program,
                    including the STIP Introduction
                  </a>{" "}
                  <span class="sm">[2 MB pdf]</span>
                </li>
                <li class="list-group-item">
                  <a href="/TIP/Draft/pdf/C.pdf">
                    C - Acknowledgement of the Executive Summary of the Draft
                    Documentation of the Conformity Finding (Executive Summary)
                  </a>{" "}
                  <span class="sm">[0.3 MB pdf]</span>
                </li>
                <li class="list-group-item">
                  <a href="/TIP/Draft/pdf/D.pdf">
                    D – Memorandum of Understanding on Procedures to Amend and
                    Modify the TIP
                  </a>{" "}
                  <span class="sm">[1 MB pdf]</span>
                </li>
                <li class="list-group-item">
                  <a href="/TIP/Draft/pdf/E.pdf">E – DVRPC Local Program</a>{" "}
                  <span class="sm">[0.5 MB pdf]</span>
                </li>
                <li class="list-group-item">
                  <a href="/TIP/Draft/pdf/F.pdf">
                    F – DVRPC TIP Project Benefit Criteria
                  </a>{" "}
                  <span class="sm">[0.5 MB pdf]</span>
                </li>
                <li class="list-group-item">
                  <a href="/TIP/Draft/pdf/G.pdf">
                    G - Acknowledgement of Summary of the TIP Public Involvement
                    Process, Summary of Public Comments, Original Public
                    Comments, Agency Responses, Public Comment Outreach
                    Documentation, and List of Recommended Changes
                  </a>{" "}
                  <span class="sm">[0.3 MB pdf]</span>
                </li>
              </ul>
            </section>
          </article>
        </main>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Homepage);
