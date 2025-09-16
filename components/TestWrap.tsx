import ChildrenProps from "@/type";
import styled from "styled-components";

const Wrap = styled.div`
  position: relative;
  z-index: 0;
  left: 0;
  top: 0;
  width: 1400px;
  max-width: 100%;
  height: 150vh;
  background-color: lightsalmon;

  @media (max-width: 1400px) {
    width: 1024px;
  }
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 480px;
  }
  @media (max-width: 480px) {
    width: 320px;
  }
`;

const TestWrap = ({ children }: ChildrenProps) => {
  return <Wrap>{children}</Wrap>;
};

export default TestWrap;
