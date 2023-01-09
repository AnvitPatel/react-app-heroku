import React, { Component } from "react";

import { Menu ,Header } from "components/Form";

class LayOut extends Component {
    render() {
      const { children, link } = this.props;
      return (
        <div className="flex">
          <Menu />
          <div className="allDiv">
            <Header link={link} />
            {children}
          </div>
        </div>
      );
    }
  }
  export default LayOut;