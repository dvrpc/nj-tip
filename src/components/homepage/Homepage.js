import Inferno, { Component } from "inferno";
import { withRouter } from "inferno-router";

import Search from "../search/Search.js";

import "./Homepage.css";

import { scrollToElement } from "../../utils/scrollToElement.js";

import logo from "./logo.png";
import TIP_logo from "./TIP_logo.png";
import arrow from "./arrow.png";
import philly from "./philly.mp4";
import firstFrame from "./firstFrame.jpg";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="landing">
          <div className="homepage-banner">
            <div id="banner-logo">
              <img src={logo} alt="dvrpc logo" />
            </div>
            <img
              id="banner-tip-logo"
              src={TIP_logo}
              alt="Transportation Improvement Program logo"
            />
            <div className="stacked-headers">
              <h1>FY2019 Transportation Improvement</h1>
              <h1>Program for New Jersey (FY20-23)</h1>
            </div>
          </div>

          <div className="homepage-main">
            <video
              playsinline
              autoplay
              muted
              loop
              poster={firstFrame}
              id="bgvid"
            >
              <source src={philly} type="video/mp4" />
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
              More Information
              <img src={arrow} alt="down navigation arrow" />
            </a>
          </div>
        </div>

        <div
          id="tip-info"
          ref={el => {
            this.tipInfo = el;
          }}
        >
          <div className="nav-links-box">
            <p>
              <a href="https://www.dvrpc.org/TIP/">
                Transportation Improvement Program (TIP)
              </a>
            </p>
            <ul>
              <li>
                <b>FY2019 TIP for NJ</b>
              </li>
              <li>
                <a href="https://www.dvrpc.org/Products/17065/">TIP Guide</a>
              </li>
              <li>
                <a href="https://www.dvrpc.org/TIP/NJ/">FY2018 TIP for NJ</a>
              </li>
              <li>
                <a href="https://www.dvrpc.org/ProjectImplementation/">
                  Project Implementation
                </a>
              </li>
            </ul>
          </div>
          <div className="tip-info-cluster">
            <div className="tip-info-paragraphs">
              <h2>
                FY2019 Transportation Improvement Program for New Jersey
                (FY20-23)
              </h2>

              <p>Text about the public comment period goes here</p>

              <div>
                <h2>Detailed Information</h2>
                <ul class="list-group">
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">
                      Highlights of the FY2019 TIP for NJ
                    </a>{" "}
                    <span class="sm">[1.1 MB pdf]</span>
                  </li>
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">
                      TIP Document Text (includes abbreviations and codes)
                    </a>{" "}
                    <span class="sm">[1.0 MB pdf]</span>
                  </li>
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">General Overview of the TIP</a>{" "}
                    <span class="sm">[0.2 MB pdf]</span>
                  </li>
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">Program Summaries</a>{" "}
                    <span class="sm">[0.2 MB pdf]</span>
                  </li>
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">
                      Responding to Environmental Justice (EJ) and Title VI
                      Concerns
                    </a>{" "}
                    <span class="sm">[0.1 MB pdf]</span>
                  </li>
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">
                      Performance-Based Planning and Programming (PBPP)
                    </a>{" "}
                    <span class="sm">[0.2 MB pdf]</span>
                  </li>
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">Public Involvement</a>{" "}
                    <span class="sm">[0.1 MB pdf]</span>
                  </li>
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">Libraries Displaying the TIP</a>{" "}
                    <span class="sm">[0.1 MB pdf]</span>
                  </li>
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">Major Project Status Report</a>{" "}
                    <span class="sm">[0.1 MB pdf]</span>
                  </li>
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">Public Notice</a>{" "}
                    <span class="sm">[0.3 MB pdf]</span>
                  </li>
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">
                      Mapping Application and Listings Overview
                    </a>{" "}
                    <span class="sm">[0.1 MB pdf]</span>
                  </li>
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">Project Index by Title</a>{" "}
                    <span class="sm">[0.1 MB pdf]</span>
                  </li>
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">Project Index by MPMS#</a>{" "}
                    <span class="sm">[0.1 MB pdf]</span>
                  </li>
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">
                      Project Index for Interstate Management Program (IMP)
                    </a>{" "}
                    <span class="sm">[0.1 MB pdf]</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2>Summary of Amendments and Modifications</h2>
                <p>
                  DVRPC will update these project listings (generally each
                  month), as we amend or modify the TIP, as permitted under the
                  TIP MOU. The{" "}
                  <a href="/TIP/NJ/pdf/.pdf">
                    Summary of Amendments and Modifications
                  </a>{" "}
                  <span class="sm">[0.3 MB pdf]</span> provides a chronological
                  listing of all project changes.
                </p>
              </div>

              <div>
                <h2>Program Lists</h2>
                <ul class="list-group">
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">All Projects</a>{" "}
                    <span class="sm">[2.0 MB pdf]</span>
                  </li>
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">Bucks County</a>{" "}
                    <span class="sm">[0.2 MB pdf]</span>
                  </li>
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">Chester County</a>{" "}
                    <span class="sm">[0.2 MB pdf]</span>
                  </li>
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">Delaware County</a>{" "}
                    <span class="sm">[0.2 MB pdf]</span>
                  </li>
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">Montgomery County</a>{" "}
                    <span class="sm">[0.4 MB pdf]</span>
                  </li>
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">Philadelphia County</a>{" "}
                    <span class="sm">[0.3 MB pdf]</span>
                  </li>
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">Projects in Various Counties</a>{" "}
                    <span class="sm">[0.2 MB pdf]</span>
                  </li>
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">Transit Projects</a>{" "}
                    <span class="sm">[0.3 MB pdf]</span>
                  </li>
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">
                      Interstate Management Program Projects
                    </a>{" "}
                    <span class="sm">[0.4 MB pdf]</span>
                  </li>
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">Competitive Programs</a>{" "}
                    <span class="sm">[0.3 MB pdf]</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2>Appendices</h2>
                <ul class="list-group">
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">A – Board Resolutions</a>{" "}
                    <span class="sm">[0.9 MB pdf]</span>
                  </li>
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">
                      B – State DOT Financial Guidance
                    </a>{" "}
                    <span class="sm">[3.0 MB pdf]</span>
                  </li>
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">
                      C – Memorandum of Understanding on Procedures to Amend and
                      Modify the TIP
                    </a>{" "}
                    <span class="sm">[0.9 MB pdf]</span>
                  </li>
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">
                      D – DVRPC TIP Project Benefit Criteria
                    </a>{" "}
                    <span class="sm">[0.3 MB pdf]</span>
                  </li>
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">
                      E – State DOT General and Procedural Guidance
                    </a>{" "}
                    <span class="sm">[1.6 MB pdf]</span>
                  </li>
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">
                      F – SEPTA’s and PART’s Financial Capacity Analysis
                    </a>{" "}
                    <span class="sm">[0.1 MB pdf]</span>
                  </li>
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">
                      G - Executive Summary of the Documentation of the
                      Conformity Finding
                    </a>{" "}
                    <span class="sm">[0.4 MB pdf]</span>
                  </li>
                  <li class="list-group-item">
                    <a href="/TIP/NJ/pdf/.pdf">
                      H - Summary of the TIP Public Involvement Process; Summary
                      of Public Comments; Original Public Comments; Agency
                      responses; List of Recommended Changes; and Supporting
                      Documentation
                    </a>{" "}
                    <span class="sm">[29 MB pdf]</span>
                  </li>
                </ul>
              </div>

              <div id="obligation-table-wrapper">
                <h2>Obligation Summary</h2>
                <table id="obligation-summary-table">
                  <tbody>
                    <tr>
                      <td>FY2019:</td>

                      <td>
                        <a href="/TIP/NJ/pdf/.pdf">Summary</a>{" "}
                        <span class="sm">[0.03 MB pdf]</span>
                      </td>

                      <td>
                        <a href="/TIP/NJ/pdf/.pdf">Details</a>{" "}
                        <span class="sm">[0.3 MB pdf]</span>
                      </td>
                    </tr>
                    <tr>
                      <td>FY2018:</td>

                      <td>
                        <a href="/TIP/NJ/pdf/.pdf">Summary</a>{" "}
                        <span class="sm">[0.03 MB pdf]</span>
                      </td>

                      <td>
                        <a href="/TIP/NJ/pdf/.pdf">Details</a>{" "}
                        <span class="sm">[0.7 MB pdf]</span>
                        <br />
                      </td>
                    </tr>

                    <tr>
                      <td>FY2017:</td>

                      <td>
                        <a href="/TIP/NJ/pdf/.pdf">Summary</a>{" "}
                        <span class="sm">[0.04 MB pdf]</span>
                      </td>

                      <td>
                        <a href="/TIP/NJ/pdf/.pdf">Details</a>{" "}
                        <span class="sm">[0.3 MB pdf]</span>
                        <br />
                      </td>
                    </tr>

                    <tr>
                      <td>FY2016:</td>

                      <td>
                        <a href="/TIP/NJ/pdf/.pdf">Summary</a>{" "}
                        <span class="sm">[0.04 MB pdf]</span>
                      </td>

                      <td>
                        <a href="/TIP/NJ/pdf/.pdf">Details</a>{" "}
                        <span class="sm">[0.3 MB pdf]</span>
                        <br />
                      </td>
                    </tr>

                    <tr>
                      <td>FY2015:</td>

                      <td>
                        <a href="/TIP/NJ/pdf/.pdf">Summary</a>{" "}
                        <span class="sm">[0.07 MB pdf]</span>
                      </td>

                      <td>
                        <a href="/TIP/NJ/pdf/.pdf">Details</a>{" "}
                        <span class="sm">[0.4 MB pdf]</span>
                        <br />
                      </td>
                    </tr>

                    <tr>
                      <td>FY2014:</td>

                      <td>
                        <a href="/TIP/NJ/pdf/.pdf">Summary</a>{" "}
                        <span class="sm">[0.1 MB pdf]</span>
                      </td>

                      <td>
                        <a href="/TIP/NJ/pdf/.pdf">Details</a>{" "}
                        <span class="sm">[0.4 MB pdf]</span>
                        <br />
                      </td>
                    </tr>

                    <tr>
                      <td>FY2013:</td>

                      <td>
                        <a href="/TIP/NJ/pdf/.pdf">Summary</a>{" "}
                        <span class="sm">[0.08 MB pdf]</span>
                      </td>

                      <td>
                        <a href="/TIP/NJ/pdf/.pdf">Details</a>{" "}
                        <span class="sm">[0.6 MB pdf]</span>
                        <br />
                      </td>
                    </tr>

                    <tr>
                      <td>FY2012:</td>

                      <td>
                        <a href="/TIP/NJ/pdf/.pdf">Summary</a>{" "}
                        <span class="sm">[0.3 MB pdf]</span>
                      </td>

                      <td>
                        <a href="/TIP/NJ/pdf/.pdf">Details</a>{" "}
                        <span class="sm">[0.6 MB pdf]</span>
                        <br />
                      </td>
                    </tr>

                    <tr>
                      <td>FY2011:</td>

                      <td>
                        <a href="/TIP/NJ/pdf/.pdf">Summary</a>{" "}
                        <span class="sm">[0.3 MB pdf]</span>
                      </td>

                      <td>
                        <a href="/TIP/NJ/pdf/.pdf">Details</a>{" "}
                        <span class="sm">[0.7 MB pdf]</span>
                        <br />
                      </td>
                    </tr>

                    <tr>
                      <td>FY2010:</td>

                      <td>
                        <a href="/TIP/NJ/pdf/.pdf">Summary</a>{" "}
                        <span class="sm">[0.3 MB pdf]</span>
                      </td>

                      <td>
                        <a href="/TIP/NJ/pdf/.pdf">Details</a>{" "}
                        <span class="sm">[0.8 MB pdf]</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Homepage);
