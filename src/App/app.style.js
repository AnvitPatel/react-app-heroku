import styled, { createGlobalStyle } from "styled-components";
import { Theme } from "./theme";
import { size } from "./device";

const AppContainer = styled.div`
  height: 100vh;
  .form-error,
  .text-danger {
    color: red;
  }
  .pointer {
    cursor: pointer;
  }
  .flex {
    display: flex;
  }
  .center {
    text-align: center;
  }
  .txtWrap {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  a,
  a:hover {
    color: #000;
  }
  .allDiv {
    background-color: #fafafa;
    width: 85%;
    @media (min-width: 1900px) {
      width: 90%;
    }
    @media ${size["laptop-sm-max"]} {
      width: 76%;
    }
    @media ${size["tablet-max"]} {
      width: 100%;
    }
  }
  .actDiv span {
    margin-left: 8px;
    cursor: pointer;
  }
  .nTable {
    background-color: #fff;
    overflow-x: auto;
  }
  .main,
  .nTable,
  #mDiv .modalDiv,
  .mudiv .ant-menu {
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 2px;
      height: 2px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
      background: #f4f5f6;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #777;
      border-radius: 10px;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
  .nTable {
    ::-webkit-scrollbar {
      height: 8px;
    }
  }
  .main {
    padding: 1em;
    height: 87.5vh;
    ::-webkit-scrollbar {
      width: 10px;
    }
    .display {
      padding: 1em;
      margin-top: 1em;
      border-radius: 11px;
      border: 1px solid #e2e8f0;
      box-shadow: 0 0 2px rgb(0 0 0 / 45%);
      .toptl {
        border-bottom: 1px dashed #cdc7c7;
      }
      .title {
        padding: 0.25rem;
        font-weight: 600;
        font-size: 16px;
        color: #717479;
        border-radius: 0 !important;
        box-shadow: none;
      }
      .upbtn {
        margin-top: 1.7em;
        .uploadbtn {
          border: 1px solid #c5c5c5;
          color: #898989;
          height: 35px;
          line-height: 35px;
          font-size: 12px;
          :hover {
            color: #fff;
          }
        }
      }
      .sameLine {
        display: flex;
        margin: 0 5em;
        > :first-child {
          width: 30%;
        }
        .cloDiv {
          display: flex;
          margin: 5px 0;
          width: -webkit-fill-available;
          @media ${size["tablet-md-max"]} {
            display: block;
          }
          > div {
            margin-right: 5px;
          }
          button {
            padding: 0 5px;
            + button {
              margin-left: 5px;
            }
          }
        }
        @media ${size["tablet-max"]} {
          display: block;
          margin: 0;
          > :first-child {
            width: 100%;
          }
        }
      }
      .formsDownDIV {
        padding-top: 20px;
        padding-bottom: 20px;
        .downloadTag {
          padding: 10px 15px;
          border: 1px solid ${Theme.mainColor}; //#e4e4e4;
          border-radius: 5px;
          box-shadow: rgb(0 0 0 / 45%) 0px 0px 2px;
          cursor: pointer;
          .anticon-download {
            margin-right: 0.5em;
          }
          @media ${size["mobile-md-max"]} {
            font-size: 10px;
          }
          :hover,
          :focus {
            background: ${Theme.mainColor};
            color: #fff;
            border: none; // border: 1px solid ${Theme.mainColor};
            outline: none;
            .txt,
            .anticon {
              color: #fff;
            }
          }
          @media ${size["mobile-md-max"]} {
            padding: 5px 10px;
            .anticon-download {
              margin-right: 0.2em;
            }
          }
        }
      }
    }
    .head {
      display: flex;
      justify-content: space-between;
      .title {
        margin-bottom: 0 !important;
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        color: #8d8686;
      }
      button {
        margin-left: auto;
        padding: 0 5px;
        min-width: 70px;
      }
      &.todiv {
        @media ${size["laptop-sm-max"]} {
          display: block;
          .btnDiv {
            margin-left: 1px;
          }
        }
        .btnDiv {
          @media ${size["tablet-max"]} {
            display: block;
          }
        }
      }
    }
    .timeLineMain {
      margin-top: 1em;
      padding: 1em;
      .ant-timeline-item-head {
        background-color: #fafafa;
      }
      .ant-timeline-item-content {
        margin: 0 0 0 40px;
      }
      .icon {
        height: 2.1em;
        width: 2.1em;
        border: 1px solid rgba(0, 0, 0, 0.25);
        border-radius: 50%;
        color: rgba(0, 0, 0, 0.25);
        display: flex;
        align-items: center;
        justify-content: center;
        .anticon {
          font-size: 15px;
          color:${Theme.mainColor}
        }
      }
    }
  }
  .pDiv {
    box-shadow: 0 0 10px rgb(0 0 0 / 20%);
    background-color: #fff;
    border-radius: 1em;
    padding: 1em;
    margin-bottom: 1em;
    .header {
      font-weight: 700;
    }
    .label {
      font-weight: 400;
      padding-top: 10px;
    }
    .check {
      display: flex;
    }
  }
  .cardDiv {
    display: flex;
    max-width: 18em;
    text-align: center;
    @media ${size["laptop-sm-max"]} {
      display: block;
    }
    .ant-card {
      border-radius: 10px;
      margin-bottom: 5px;
      + .ant-card {
        margin-left: 1em;
        @media ${size["laptop-sm-max"]} {
          margin-left: 0;
        }
      }
      .ant-card-body {
        width: max-content;
      }
      .text {
        cursor: pointer;
        font-size: larger;
        font-weight: 600;
        color: ${Theme.mainColor};
      }
      :hover {
        background-color: ${Theme.mainColor};
        .text {
          color: #fff;
        }
      }
    }
  }
  .bottomDiv {
    display: flex;
    .btn {
      margin-left: auto;
      button + button {
        margin-left: 2em;
      }
    }
  }
  .btmDiv {
    display: flex;
    justify-content: space-between;
  }
  .imgupload {
    border: 1px solid #c7bdbd;
    height: 151px;
    display: block;
    margin: 20px 30px;
    border-radius: 12px;
    .d-flex {
      text-align: center;
      margin-top: 1em;
    }
    i {
      font-size: 8em;
    }
  }
  .btnDiv {
    margin: 5px 0;
    margin-left: auto;
    padding-left: 5px;
    width: fit-content;
    display: flex;
    input {
      margin-right: 8px;
    }
    button {
      margin-right: 1em !important;
    }
    #form-select {
      margin: 0 5px;
    }
    .ant-select {
      max-width: 20em;
    }
  }
  .ant-btn {
    box-shadow: rgba(0, 0, 0, 0.45) 0px 0px 2px;
  }
  .optionui .anticon {
    margin-left: 5px;
    color: ${Theme.mainColor};
  }
  .ml-auto {
    margin-left: auto;
  }
  .tempDiv textarea {
    height: 10rem;
  }
  .exclebtn {
    margin-right: 5px;
  }
  .mt-1 {
    margin-top: 1em;
  }
  .mt-2 {
    margin-top: 2em;
  }
`;

export { AppContainer };
const GlobalStyle = createGlobalStyle`
  body {
    ::-webkit-scrollbar {
      width: 8px;
      height: 2px;
    }
    /* Track */
    ::-webkit-scrollbar-track { 
      background: #f4f5f6;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #777;
      border-radius: 10px;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
  .anime{
    opacity: 0;
    position: relative;
    animation: anime-animation 0.4s ease-in-out 0.33333s;
    animation-fill-mode: forwards;
    transform: translateX(50px);     
  }
  @-webkit-keyframes anime-animation {
    to {
      opacity: 1;
      transform: translatex(0);
    }
  }
  @keyframes anime-animation {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  .anime:first-child{
    animation-delay: .1s;
    z-index: 31;
  }
  .anime:nth-child(2){
    animation-delay: .2s;
    z-index: 30;
  }
  .anime:nth-child(3){
    animation-delay: .3s;
    z-index: 29;
  }
  .anime:nth-child(4){
    animation-delay: .4s;
    z-index: 28;
  }
  .anime:nth-child(5){
    animation-delay: .5s;
    z-index: 27;
  }
  .anime:nth-child(6){
    animation-delay: .6s;
    z-index: 26;
  }
  .anime:nth-child(7){
    animation-delay: .7s;
    z-index: 25;
  }
  .anime:nth-child(8){
    animation-delay: .8s;
    z-index: 24;
  }
  .anime:nth-child(9){
    animation-delay: .9s;
    z-index: 23;
  }
  .anime:nth-child(10){
    animation-delay: .91s;
    z-index: 22;
  }
  .anime:nth-child(11){
    animation-delay: .92s;
    z-index: 21;
  }
  .anime:nth-child(12){
    animation-delay: .93s;
    z-index: 20;
  }
  .anime:nth-child(13){
    animation-delay: .94s;
    z-index: 19;
  }
  .anime:nth-child(14){
    animation-delay: .95s;
    z-index: 18;
  }
  .anime:nth-child(15){
    animation-delay: .96s;
    z-index: 17;
  }
  .anime:nth-child(16){
    animation-delay: .97s;
    z-index: 16;
  }
  .anime:nth-child(17){
    animation-delay: .98s;
    z-index: 15;
  }
  .anime:nth-child(18){
    animation-delay: .99s;
    z-index: 14;
  }
  .anime:nth-child(19){
    animation-delay: .991s;
    z-index: 13;
  }
  .anime:nth-child(20){ 
    animation-delay: .992s;
    z-index: 12;
  }
  .anime:nth-child(21){ 
    animation-delay: .992s;
    z-index: 11;
  }
  .anime:nth-child(22){ 
    animation-delay: .992s;
    z-index: 10;
  }
  .anime:nth-child(23){ 
    animation-delay: .992s;
    z-index: 9;
  }
  .anime:nth-child(24){ 
    animation-delay: .992s;
    z-index: 8;
  }
  .anime:nth-child(25){ 
    animation-delay: .992s;
    z-index: 7;
  }
  .anime:nth-child(26){ 
    animation-delay: .992s;
    z-index: 6;
  }
  .anime:nth-child(27){ 
    animation-delay: .992s;
    z-index: 5;
  }
  .anime:nth-child(28){ 
    animation-delay: .992s;
    z-index: 4;
  }
  .anime:nth-child(29){ 
    animation-delay: .992s;
    z-index: 3;
  }
  .anime:nth-child(30){ 
    animation-delay: .992s;
    z-index: 2;
  }
  .highZ{z-index: 54!important;}
  .highZ1{z-index: 55!important;}
  .highZ2{z-index: 56!important;}
  .highZ3{z-index: 57!important;}
`;

export default GlobalStyle;
