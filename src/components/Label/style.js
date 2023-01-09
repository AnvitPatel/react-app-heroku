import styled from "styled-components";

const FormWrapper = styled.div`
  & label {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.05em;
    line-height: 15px;
    display: block;
    margin: 0.5rem 0;
  }
  .empty{
    color:red;
  }
`;
export { FormWrapper };
