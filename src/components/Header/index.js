import React, { Component } from "react";
import { Modal } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  QuestionCircleOutlined,
  LogoutOutlined,
  BellOutlined,
} from "@ant-design/icons";

import { PageConst } from "./constant";
import { StyleComponent } from "./style";
import { menuCol } from "redux/app/actions";
import { RenderDrop } from "components/Form";


class Header extends Component {
  render() {
    const { collapsed } = this.props;
    return <StyleComponent id="menu-form">
         <div className="hamburger" onClick={() => this.props.menuCol(!collapsed)}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="ml-auto flex">
        <RenderDrop
            item={
              <div className="pointer">
                <i className={"fas fa-user"}></i>
                <span className="uDiv">{"Name"}</span>
              </div>
            }
            data={[
              <div 
            //   onClick={() => history.push( localStorage.auth && JSON.parse(localStorage.auth).isDP ? "/profile" : "/userProfile")}
              >
                <div className="title">{PageConst.pf}</div>
              </div>,
              <div 
            //   onClick={() => history.push("/change-password")}
              >
                <div className="title">{PageConst.cp}</div>
              </div>,
              <div 
            //   onClick={() => this.logoutWarn()}
              >
                <div className="title">{PageConst.lg}</div>
              </div>,
            ]}
          />
          <div className="log">
          <BellOutlined />
          <LogoutOutlined className="pointer" 
        //   onClick={() => this.logoutWarn()}
          />

          </div>
        </div>
    </StyleComponent>;
  }
}
const mapStateToProps = (state) => ({
    collapsed: state.app.collapsed,
  });
  const mapDispatchToProps = (dispatch) => ({
    menuCol: (payload) => dispatch(menuCol(payload)),
  });
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
