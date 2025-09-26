import ChildrenProps from "@/type";
import styled from "styled-components";

const Wrap = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  gap: 40px;
  @media (max-width: 1400px) {
    gap: 30px;
  }
  @media (max-width: 1024px) {
    gap: 20px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0px;
  }
`;

const OtherContents = ({ children }: ChildrenProps) => {
  return <Wrap>{children}</Wrap>;
};

export default OtherContents;
