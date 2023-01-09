import styled from "styled-components";
import { size } from "App/device";

const FormWrapper = styled.div`
  padding: 0;
  margin: 2px 0 .5em;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  .ant-input-affix-wrapper {
    padding: 0;
    box-shadow: none;
    border-radius: 5px;
    border: 1px solid #e4e4e4;
    input.ant-input {
      max-height: 33px;
      padding: 2px 10px;
      border-radius: 5px 0 0 5px;
    }
  }
  .ant-input-prefix {
    margin-right: 5px;
  }
  input,
  textarea {
    background: #fbfbfb;
    display: block;
    width: 100%;
    line-height: 1.5;
    height: 2.2rem;
    margin: 0;
    font-size: 18px;
    font-weight: 400;
    padding: 2px 10px;
    color: #505050;
    border-radius: 5px;
    border: 1px solid #e4e4e4;
    box-shadow: 0 0 2px rgb(0 0 0 / 45%);    
    -webkit-appearance: none;
    ::placeholder {
      color: gray;
    }
    :-ms-input-placeholder {
      color: gray;
    }
    ::-ms-input-placeholder {
      color: gray;
    }
    :hover,
    :focus {
      outline: none;
    }
    @media ${size["desktop-sm-max"]} {
      font-size: 14px;
    }
  }
  textarea {
    height: 4rem;
  }
  .ant-input-suffix {
    border-radius: 0 5px 5px 0;
    background: #f2f2f2;
    margin-left: 0;
    padding:0 5px;
    .anticon {
      color: #000;
    }
  }
  .empty {
    border: 1px solid #e81c1c;
    box-shadow: red 0 0 10px !important;  
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="password"] {
    border-radius: 5px 0 0 5px;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  .ant-input-affix-wrapper-disabled .ant-input-suffix {
    background: transparent; // #f1f1f1;
  }
`;

export { FormWrapper };
