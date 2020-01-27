import React from "react";
import { BaseControl } from "react-map-gl";

class LayerControl extends BaseControl {
  _render() {
    return (
      <div className="dropdown-layers">
        <button
          className="btn dropdown-toggle"
          type="button"
          id="layerMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded={this.props.layerList}
          onClick={() => this.props.toggleLayerList(layerList => !layerList)}
        >
          Layers
        </button>
        <div className={"layer-menu " + (this.props.layerList ? "show" : "")}>
          {Object.keys(this.props.dropdownLayers).map(layer => {
            return (
              <p
                key={layer}
                className={
                  "dropdown-item " +
                  (this.props.dropdownLayers[layer] ? "selected" : "")
                }
                onClick={() =>
                  this.props.setDropdownLayers(layers => {
                    Object.keys(layers).forEach(l => {
                      layers[l] = false;
                    });
                    return {
                      ...layers,
                      [layer]: !layers[layer]
                    };
                  })
                }
              >
                {layer}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

export default LayerControl;
