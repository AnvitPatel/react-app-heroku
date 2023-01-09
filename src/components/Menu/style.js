import styled from "styled-components";
import { Theme } from "App/theme";
import { size } from "App/device";

const MenuStyle = styled.div`
  width: 18%;
  height: 100vh;
  background-color: ${Theme.mainColor};
  .dDiv {
    display: none;
  }
  @media (min-width: 1900px) {
    width: 10%;
  }
  @media ${size["laptop-sm-max"]} {
    width: 24%;
  }
  @media ${size["tablet-max"]} {
    padding: 0;
    width: 0;
    .mDiv {
      display: none;
      width: 0;
    }
    .dDiv {
      display: block;
    }
  }
  .menuTop {
    display: flex;
    padding: 0 1.5em;
    align-items: center;
    margin: 5px 0;
    .anticon {
      font-size: 14px;
      color: #acb4ba;
    }
    h1 {
      color: ${Theme.baseColor};
      margin-left: 10px;
      margin-bottom: 0;
    }
  }
  .ant-menu-inline {
    border-right: none;
  }
  .ant-menu {
    max-height: 91vh;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .ant-menu,
  .ant-menu-vertical-left {
    background-color: ${Theme.mainColor};
    color: #fcdab7;
    border-right: none;
    .ant-menu-submenu:hover .ant-menu-submenu-arrow,
    .ant-menu-submenu-arrow,
    .ant-menu-title-content {
      color: #fcdab7;
      font-weight: 600;
      font-size: 16px;
    }
    .ant-menu-item {
      :hover {
        background: #fcdab7;
        color: black;
        .ant-menu-title-content {
          color: ${Theme.mainColor};
        }
      }
    }
    .active {
      color: ${Theme.mainColor};
      background: #fcdab7;
      border-radius: 1px;
      .ant-menu-title-content {
        color: ${Theme.mainColor};
      }
    }
    .ant-menu-sub .ant-menu-item {
      padding-left: 35px !important;
      .ant-menu-title-content {
        font-size: 15px;
      }
    }
  }
  .active,
  .ant-menu-item-selected {
    background: #fcdab7;
    border-radius: 1px;
  }
  .ant-menu-submenu:hover {
    background: #fcdab7;
   .ant-menu-submenu-title .ant-menu-title-content,.ant-menu-submenu-arrow {
      color: ${Theme.mainColor}!important;
    }
  }
  .ant-menu-item:hover,
  .ant-menu-item-active,
  .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
  .ant-menu-submenu-active,
  .ant-menu-submenu-title:hover {
    color: #9fa4a6;
  }
  .ant-drawer-content-wrapper {
    width: 300px;
    .ant-drawer-body {
      background: ${Theme.mainColor};
      padding: 0;
      > div {
        box-shadow: none;
      }
      .ant-menu-item {
        padding-top: 0;
      }
    }
  }
`;
export { MenuStyle };
