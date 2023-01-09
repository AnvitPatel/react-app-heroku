import styled from "styled-components";
import { arrowDown } from "components/Images";
import { Theme } from "App/theme";

const SelectContainer = styled.div`
  height: 2.4em;
  width: 100%;
  .ant-select {
    height: 24px;
    width: inherit;
    .ant-select-selection-search {
      height: 24px;
    }
    .ant-select-selection-search-input {
      height: 24px !important;
    }
    .ant-select-selector {
      box-shadow: 0 0 2px rgb(0 0 0 / 45%);
      width: -webkit-fill-available;
      border: 1px solid #e2e8f0;
      background-color: #fafafa;
      border-radius: 5px;
      height: 2.5em;
      :before {
        border: 0;
        background-size: 100% auto;
        width: 15px;
        height: 15px;
        position: absolute;
        content: "";
        top: 35%;
        z-index: 1;
      }
      :after {
        background: url(${arrowDown}) no-repeat center;
        visibility: visible;
        border: 0;
        background-size: 100% auto;
        width: 9px;
        height: 8px;
        position: absolute;
        content: "";
        right: 5px;
        top: 50%;
        z-index: 1;
        transform: translate(0, -50%);
      }
    }
  }
  &.empty .ant-select-selector {
    border: 1px solid #e81c1c;
    box-shadow: red 0 0 10px !important;
  }
  &.default {
    .ant-select .ant-select-selector {
      height: 30px;
      background: ${Theme.baseColor};
      border-radius: 5px;
      color: #c1c1c1;
    }
  }
`;
export { SelectContainer };
