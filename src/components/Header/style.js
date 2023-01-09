import styled from "styled-components";
import { size } from "App/device";
import { Theme } from "App/theme";

const StyleComponent = styled.div`
  display: flex;
  width: 100%;
  z-index: 99;
  background: transparent;
  height: 5em;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover {
    color: ${Theme.mainColor};
  }
  .btn1Div {
    margin: 1em;
    .anticon {
      margin: 15px 5px;
    }
    .txt,
    .anticon {
      font-weight: 600;
      color: ${Theme.mainColor};
    }
    input {
      height: 40px;
      line-height: 40px;
      font-size: 14px;
    }
  }
  .uDiv {
    margin-left: 5px;
    font-weight: 700;
  }
  .log {
    padding: 1em;
    margin-left: auto;
    font-size: large;
    font-weight: 700;
    border-left: 1px solid #e2e8f0;
    span {
      margin: 5px 10px;
    }
  }
  .hamburger {
    display: none;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    cursor: pointer;
    text-align: center;
    font-size: 1.4rem;
    box-sizing: border-box;
    outline: none;
    padding: 20px 5px;
    margin-right: 1em;
    width: 1.625rem;
    z-index: 999;
    transition: all 0.3s ease-in-out 0s;
    @media ${size["tablet-max"]} {
      display: block;
    }
    .line {
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      cursor: pointer;
      text-align: center;
      font-size: 1.4rem;
      box-sizing: border-box;
      outline: none;
      padding: 0;
      background: #000;
      display: block;
      height: 0.1875rem;
      border-radius: 1em;
      margin: 0.4rem;
      margin-right: auto;
      transition: all 0.3s ease-in-out;
      width: 1.625rem;
    }
    .line:nth-child(2) {
      width: 1.425rem;
    }
    .line:nth-child(3) {
      width: 0.9375rem;
    }
    :hover .line {
      width: 1.625rem;
    }
  }
  .ant-menu {
    margin-left: auto;
    background: #f39d90;
    height: 4.5em;
    .ant-menu-submenu-selected {
      color: #000;
    }
    .title {
      padding-left: 1rem !important;
    }
    .anticon-unordered-list {
      font-size: 1.4rem;
    }
    .ant-menu-item,
    .ant-menu-item-active,
    .ant-menu-item:hover,
    .ant-menu-item-selected,
    .ant-menu-submenu-selected,
    &.ant-menu-horizontal {
      :after {
        border-bottom: none !important;
        color: #fff;
      }
      a,
      .ant-menu-submenu-open {
        font-weight: 700;
        color: ${Theme.mainColor};
      }
    }
    .ant-menu-item {
      padding: 15px 0 0 20px;
      height: 3em;
      line-height: 25px;
      a:hover {
        color: #000;
      }
    }
    .title {
      padding-left: 2rem;
      margin-right: 1rem;
      font-size: 1.125rem;
      white-space: nowrap;
    }
    .contact {
      margin-left: auto;
      padding: 20px 20px 0;
      .setting {
        font-size: 20px;
      }
    }
    .left {
      padding: 0.5rem;
      margin-right: 2em;
    }
    .marLeft {
      margin-left: auto;
    }
    .first {
      opacity: 0 !important;
      @media ${size["tablet-max"]} {
        opacity: 1 !important;
        color: ${Theme.mainColor};
        font-size: large;
      }
    }
    .ant-menu-submenu:after {
      display: none;
    }
  }
  #render-form {
    padding: 1.5em 1em;
  }
`;

export { StyleComponent };
