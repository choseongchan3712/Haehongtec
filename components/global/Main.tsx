import ChildrenProps from "@/type";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface StyledProps {
  isMainPage: boolean;
}

const GlobalMain = styled.main<StyledProps>`
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
  padding-top: ${(props) => (props.isMainPage ? "0" : "70px")};
  padding-bottom: 150px;

  @media (max-width: 1024px) {
    padding-top: ${(props) => (props.isMainPage ? "0" : "50px")};
    padding-bottom: 100px;
  }
  @media (max-width: 768px) {
    padding-top: ${(props) => (props.isMainPage ? "0" : "40px")};
    padding-bottom: 80px;
  }
  @media (max-width: 480px) {
    padding-top: ${(props) => (props.isMainPage ? "0" : "40px")};
    padding-bottom: 40px;
  }
`;

const Main = ({ children }: ChildrenProps) => {
  const [isMainPage, setIsMainPage] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      setIsMainPage(true);
    } else {
      setIsMainPage(false);
    }
  }, [router.pathname]);

  return <GlobalMain isMainPage={isMainPage}>{children}</GlobalMain>;
};

export default Main;
