import { ReactNode } from "react";
import styled from "styled-components";

interface PropsType {
  title: string;
  children: ReactNode;
}

const Wrap = styled.section`
  position: relative;
  z-index: 0;
  top: 0;
  left: 0;
  width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 100px;
  padding-top: 150px;
  .title {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 50px;
    color: var(--pri-color-500);
    font-size: var(--pc-h2-sz);
    font-weight: var(--pc-h2-wt);
    border-left: 2px solid var(--pri-color-500);
  }
  @media (max-width: 1400px) {
    width: 1024px;
  }
  @media (max-width: 1024px) {
    width: 768px;
    gap: 50px;
    padding-top: 100px;
    .title {
      height: 40px;
      font-size: var(--tab-h2-sz);
      font-weight: var(--tab-h2-wt);
      padding-left: 25px;
    }
  }
  @media (max-width: 768px) {
    width: 480px;
    gap: 40px;
    padding-top: 80px;
    .title {
      height: 30px;
      font-size: var(--mo-h2-sz);
      font-weight: var(--mo-h2-wt);
    }
  }
  @media (max-width: 480px) {
    width: 320px;
    gap: 25px;
    padding-top: 50px;
  }
`;

const SectionWrap = ({ title, children }: PropsType) => {
  return (
    <Wrap>
      <h2 className="title">{title}</h2>
      {children}
    </Wrap>
  );
};

export default SectionWrap;
