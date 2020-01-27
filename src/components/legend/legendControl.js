import React from "react";
import { BaseControl } from "react-map-gl";
import Legend from "./legend";

class LegendControl extends BaseControl {
  _render() {
    return (
      <div className="dropdown-legend">
        <button
          className="btn dropdown-toggle"
          type="button"
          id="legendMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded={this.props.legendList}
          onClick={() => this.props.toggleLegendList(legendList => !legendList)}
        >
          Legend
        </button>
        {this.props.legendList ? <Legend show={"show"} /> : null}
      </div>
    );
  }
}

export default LegendControl;
