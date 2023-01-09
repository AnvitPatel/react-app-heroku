import React, { Component } from "react";
import { Menu, Drawer } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { MenuStyle } from "./style";
import { MenuItem } from "./constant";
import { menuCol } from "redux/app/actions";
// import { getAuthRole } from "modules/helper";
const { SubMenu } = Menu;
// var role = getAuthRole();
class MenuComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { titlekey: 0, path: "", active: "", openKey: ["0"] };
  }
  async componentDidMount() {
    try {
      const { location } = this.props;
    //   role = role ? role : getAuthRole();
      let path = location.pathname.slice(1).toLowerCase();
      let url = path.replace(/-/g, " ");
      url !== "" ? this.setDefault(url) : this.setState({ path: "" });
      // url !== "" && this.setOpen(UserMenu, 1, url);
      // url !== "" && this.setOpen(ConfMenu, 2, url);
    } catch (error) {
      console.log(error);
    }
  }
  setOpen = (ar, i, url) => {
    try {
      let count = ar.findIndex((a) => a.toLowerCase().includes(url.toLowerCase()) || url.toLowerCase().includes(a.toLowerCase()));
      if (count > -1) this.setState({ openKey: ["0", "sub" + i] });
    } catch (error) {
      console.log(error);
    }
  };
  setDefault = (url) => {
    try {
      let words = url.split(" ");
      let capWords = [];
      words?.forEach((a) => {
        capWords.push(a[0]?.toUpperCase() + a.slice(1, a.length));
      });
      this.setState({ path: capWords.join(" ") });
    } catch (error) {
      console.log(error);
    }
  };
  setOpenKeys = (e) => {
    try {
      const { history } = this.props;
      if (e.key === "Log-out") this.props.logoutWarn();
      else if (e.key === "Change Password")
        this.props.history.push("/change-password");
      else {
        let url = e.key.toLowerCase();
        url = url.replace(/ /g, "-");
        url = url.replace(/\//g, "-");
        url = url.replace(/& /g, "");
        history.push("/" + url);
      }
    } catch (error) {
      console.log(error);
    }
  };
  onOpenChange = (keys) => {
    const { openKey } = this.state;
    keys = ["0", keys[keys.length - 1]];
    this.setState({ titlekey: keys[0] ? keys[0] : "" });
    const latestOpenKey = keys.find((key) => openKey.indexOf(key) === -1);
    if (["1", "9"].indexOf(latestOpenKey) === -1)
      this.setState({ openKey: keys });
    else this.setState({ openKey: latestOpenKey ? [latestOpenKey] : [] });
  };
  menuUI = (path) => {
    try {
      let auth = localStorage?.auth;
      let men =  MenuItem;
      let url = path.toLowerCase();
      url = url.replace(/-/g, " ");
      return men.map((a, i) => {
        // if (a.name === "User" || a.name === "Configurations") {
        //   let nextMenu = a.name === "User" ? UserMenu : ConfMenu;
        //   return this.SubMenuUI(a.name, url, nextMenu, a.icon);
        // } else
          return (
            <Menu.Item
              key={a.name}
              icon={a.icon}
              className={path.toLowerCase().includes(a.name.toLowerCase()) || (path === "" && i === 0) ? "anime active" : "anime"}
            >
              {a.name}
            </Menu.Item>
          );
      });
    } catch (error) {
      console.log(error);
    }
  };
  SubMenuUI = (name, url, nextMenu, icon) => {
    try {
    //   if (!role || (role === 67 && name === "Configurations")) return null;
      let mitem =  [];
      let key = name !== "Configurations" ? "sub1" : "sub2";
      return (
        <SubMenu key={key} title={name} className="anime" icon={icon}>
          {mitem.map((b, j) => {
            let cls = url.match(b.toLowerCase()) ? "anime active" : "anime";
            // if (b === "Users") return this.SubMenuUI(j + 3, b, url, UserMenu);
            // else if (b === "Configurations")
            return (
              <Menu.Item key={b} className={cls}>
                {b}
              </Menu.Item>
            );
          })}
        </SubMenu>
      );
    } catch (error) {
      console.log(error);
    }
  };
  closeCol = (a) => this.props.menuCol(a);
  render() {
    const { collapsed } = this.props;
    const { openKey, path } = this.state;
    return (
      <MenuStyle className="mudiv">
        <div className="mDiv">
          <div className="menuTop">
            <h1>Notes</h1>
            {/* <Image width={collapsed ? 60 : 123}src={collapsed ? coffee : logo}height={60}preview={false}/> */}
          </div>
          <Menu
            title="menu"
            mode="inline"
            openKeys={openKey}
            defaultSelectedKeys={path}
            onClick={this.setOpenKeys}
            onOpenChange={this.onOpenChange}
          >
            {this.menuUI(path)}
          </Menu>
        </div>
        <div className="dDiv" id="draw">
          <Drawer
            // title={<Image src={logo} width={100} height={60} preview={false} />}
            title={<h3>UPSI</h3>}
            placement="left"
            width={250}
            open={collapsed}
            onClose={() => this.closeCol(!collapsed)}
            getContainer={() => document.getElementById("draw")}
          >
            <Menu
              mode="inline"
              onClick={(e) => {
                // this.closeCol(!collapsed);
                this.setOpenKeys(e);
              }}
            >
              {this.menuUI(path)}
            </Menu>
          </Drawer>
        </div>
      </MenuStyle>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  menuCol: (payload) => dispatch(menuCol(payload)),
});
const mapStateToProps = (state) => ({ 
    collapsed: state.app.collapsed 
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MenuComponent)
);
