import React, { Component } from "react";

import "./ContentContainer.css";

import Project from "../project/Project.js";
import Results from "../results/Results.js";
import Footer from "../footer/Footer.js";

class ContentContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isProject: false,
      params: this.props.match.params,
      id: null
    };
  }

  componentDidMount() {
    let { type, value } = this.state.params;
    type = type.toLowerCase();

    // determine if a project or results should be rendered
    if (type === "project") {
      this.setState({
        isProject: true,
        id: value
      });
    } else {
      this.setState({ isProject: false });
    }
  }

  render() {
    return (
      <div className="contentContainer">
        {this.state.isProject ? (
          <Project id={this.state.id} history={this.props.history} />
        ) : (
          <Results />
        )}
        <Footer />
      </div>
    );
  }
}

export default ContentContainer;
