import { ReactNode } from "react";
import styled from "styled-components";

const GlobalMain = styled.main`
  position: relative;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: var(--neu-color-100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 70px;
  padding-bottom: 150px;

  @media (max-width: 1024px) {
    padding-top: 50px;
    padding-bottom: 100px;
  }
  @media (max-width: 768px) {
    padding-top: 40px;
    padding-bottom: 80px;
  }
  @media (max-width: 480px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return <GlobalMain>{children}</GlobalMain>;
};

export default Main;
