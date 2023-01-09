import styled from "styled-components";
import { size } from "App/device";

const MContainer = styled.div`
  .add-modal {
    .ant-modal-content {
      border-radius: 10px;
      @media ${size["tablet-sm-max"]} {
        margin: 5%;
      }
      .ant-modal-header {
        border-radius: 10px 10px 0 0;
      }
      .ant-modal-body {
        padding: 1rem;
        .btnBottom{
          text-align: end;
        }
        .modalDiv {
          // height: 12em;
          // max-height: 32em;
          // overflow-x: hidden;
        }
        .dtDIV {
          margin: 1em 0;
        }
        .bottomDIV {
          text-align: end;
        }
        .dashb {
          border-bottom: 1px dashed;
        }
      }
    }
  }
`;
export { MContainer };
