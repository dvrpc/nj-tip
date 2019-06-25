import Inferno, { Component } from "inferno";
import { connect } from "inferno-redux";
import { withRouter } from "inferno-router";

import Search from "../search/Search";

import {
  getTIPByKeywords,
  setMapCenter,
  setMapState
} from "../reducers/getTIPInfo";
import "./Navbar.css";
import logo from "./logo.png";
import TIP_logo from "./TIP_logo.png";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      selectedButton: "Location"
    };
  }

  render() {
    return (
      <nav className="navBar" style={this.props.backgroundGradient}>
        <a className="navbar-link-to-home" href="/TIP/Draft/">
          <img
            id="TIPlogo"
            className="navbar-logo"
            src={TIP_logo}
            alt="TIP logo"
          />

          <div class="nav-text">
            <a href="https://www.dvrpc.org/" rel="external">
              <img src={logo} alt="DVRPC logo" />
            </a>

            <h2 id="draft-text">
              <strong>Draft FY2020 TIP for NJ</strong>
            </h2>
          </div>
        </a>

        <div id="nav-search-form">
          <Search />
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTIPByKeywords: address => dispatch(getTIPByKeywords(address)),
    setMapCenter: latlng => dispatch(setMapCenter(latlng)),
    setMapState: position => dispatch(setMapState(position))
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Navbar)
);
