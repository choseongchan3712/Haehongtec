import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface StyledProps {
  isWrapHoverd: boolean;
  isMenuHoverd: boolean;
  isMainPage: boolean;
  isTop: boolean;
  isMenuOpen: boolean;
}

const Wrap = styled.header<StyledProps>`
  position: fixed;
  z-index: 990;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  background-color: ${(props) =>
    props.isTop && props.isMainPage ? "unset" : "rgba(245, 245, 245, 0.6)"};
  backdrop-filter: blur(5px);
  box-shadow: ${(props) =>
    props.isTop && props.isMainPage
      ? "unset"
      : "0px 3px 10px rgba(26, 31, 43, 0.1)"};
  transition: 0.25s ease-in-out;
  &::before {
    content: "";
    position: absolute;
    z-index: 991;
    width: 100%;
    height: 440px;
    left: 0;
    top: 70px;
    background: linear-gradient(
      158deg,
      rgba(208, 238, 250, 0.6) 0%,
      rgba(230, 223, 242, 0.6) 50%,
      rgba(230, 242, 230, 0.6) 100%
    );
    transition: 0.25s ease-in-out;
    transform: ${(props) => (props.isMenuHoverd ? "scaleY(1)" : "scaleY(0)")};
    transform-origin: top;
  }

  &:hover {
    background-color: rgba(245, 245, 245, 0.6);
    box-shadow: 0px 3px 10px rgba(26, 31, 43, 0.1);
  }

  .logo {
    width: 150px;
    height: 100%;
    position: relative;
    z-index: 990;
  }

  nav {
    height: 100%;
    position: relative;
    z-index: 991;
  }

  .silde_top {
    display: none;
  }

  .menu_wrap {
    position: relative;
    z-index: 992;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .menu_contact {
    display: none;
  }

  .menu {
    position: relative;
    z-index: 992;
    height: 100%;
    width: ${(props) => (props.isWrapHoverd ? "300px" : "200px")};
    transition: 0.25s ease-in-out;
  }

  .menu > a {
    position: relative;
    z-index: 992;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--pc-sub-sz);
    font-weight: var(--pc-sub-wt);
    color: var(--neu-color-900);
    transition: 0.25s ease-in-out;
  }

  .menu > a::after {
    content: "";
    position: absolute;
    z-index: 992;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: var(--pri-color-500);
    transition: 0.25s ease-in-out;
    transform: scaleX(0);
    transform-origin: center;
  }

  .menu > a:hover {
    color: var(--pri-color-500);
  }

  .menu > a:hover::after {
    transform: scaleX(1);
  }

  .sub_menu_wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    overflow: hidden;
    transition: 0.25s ease-in-out;
    transform: ${(props) => (props.isMenuHoverd ? "scaleY(1)" : "scaleY(0)")};
    transform-origin: top;
  }

  .sub_menu {
    position: relative;
    z-index: 992;
    width: 100%;
    height: 50px;
  }

  .sub_menu > a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--pc-p-sz);
    font-weight: var(--pc-p-wt);
    color: var(--pri-color-900);
    transition: 0.25s ease-in-out;
  }

  .sub_menu > a:hover {
    color: var(--pri-color-500);
  }

  .contact {
    position: relative;
    z-index: 990;
    height: 100%;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .contact > a {
    padding: 10px 15px;
    border-radius: 10px;
    background-color: var(--pri-color-500);
    font-size: var(--pc-sub-sz);
    font-weight: var(--pc-sub-wt);
    color: var(--neu-color-100);
    transition: 0.25s ease-in-out;
  }
  .contact > a:hover {
    background-color: var(--pri-color-700);
  }

  .hamberger {
    display: none;
  }

  @media (max-width: 1400px) {
    padding: 0 30px;
    .logo {
      width: 120px;
    }

    .menu {
      position: relative;
      width: ${(props) => (props.isWrapHoverd ? "220px" : "150px")};
    }

    .contact {
      width: 120px;
    }
  }

  @media (max-width: 1024px) {
    body {
      overflow-x: hidden;
    }

    height: 50px;
    &::before {
      display: none;
    }

    .logo {
      width: 100px;
    }

    .contact {
      display: none;
    }

    nav {
      all: unset;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 995;
      width: 100%;
      height: 100vh;
      background: linear-gradient(
        90deg,
        var(--pri-color-500),
        var(--pri-color-700)
      );
      display: flex;
      flex-direction: column;
      padding: 0 30px;
      transform: ${(props) =>
        props.isMenuOpen ? "translateX(0)" : "translateX(100%)"};
      transition: 0.25s ease-in-out;
    }

    .silde_top {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      height: 50px;
      border-bottom: 1px solid var(--neu-color-100);
    }

    .silde_top > svg {
      font-size: 25px;
      color: var(--neu-color-100);
      cursor: pointer;
    }

    .menu_wrap {
      all: unset;
      box-sizing: border-box;
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .menu_contact {
      display: flex;
    }

    .menu {
      all: unset;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 30px 0;
      min-height: 160px;
      color: var(--neu-color-100);
    }

    .menu > a {
      all: unset;
      cursor: pointer;
      text-decoration: none;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 150px;
      font-size: var(--tab-sub-sz);
      font-weight: var(--tab-sub-wt);
      border-right: 1px solid var(--neu-color-100);
      transition: 0.25s ease-in-out;
    }

    .menu > a::after {
      display: none;
    }

    .menu > a:hover {
      all: unset;
      cursor: pointer;
      text-decoration: none;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 150px;
      font-size: var(--tab-sub-sz);
      font-weight: var(--tab-sub-wt);
      border-right: 1px solid var(--neu-color-100);
      transition: 0.25s ease-in-out;
      color: var(--pri-color-900);
    }

    .sub_menu_wrap {
      all: unset;
      box-sizing: border-box;
      width: calc(100% - 150px);
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 35px;
      align-items: center;
      padding: 0 50px;
    }

    .sub_menu {
      all: unset;
      box-sizing: border-box;
    }

    .sub_menu > a {
      all: unset;
      box-sizing: border-box;
      cursor: pointer;
      font-size: var(--tab-p-sz);
      font-weight: var(--tab-p-wt);
      transition: 0.25s ease-in-out;
    }

    .sub_menu > a:hover {
      all: unset;
      box-sizing: border-box;
      cursor: pointer;
      color: var(--pri-color-900);
      font-size: var(--tab-p-sz);
      font-weight: var(--tab-p-wt);
      transition: 0.25s ease-in-out;
    }

    .hamberger {
      display: block;
      z-index: 990;
      cursor: pointer;
      font-size: 25px;
      color: var(--neu-color-900);
    }
  }

  @media (max-width: 768px) {
    height: 40px;
    padding: 0 10px;

    .logo {
      width: 80px;
    }

    nav {
      padding: 0 10px;
    }

    .silde_top {
      height: 40px;
    }

    .silde_top > svg {
      font-size: 20px;
    }

    .menu {
      padding: 15px 0;
      min-height: 80px;
    }

    .menu > a {
      width: 100px;
      font-size: var(--mo-sub-sz);
      font-weight: var(--mo-sub-wt);
    }

    .menu > a:hover {
      width: 100px;
      font-size: var(--mo-sub-sz);
      font-weight: var(--mo-sub-wt);
    }

    .sub_menu_wrap {
      width: calc(100% - 100px);
      padding: 0 25px;
    }

    .sub_menu > a {
      font-size: var(--mo-p-sz);
      font-weight: var(--mo-p-wt);
    }

    .sub_menu > a:hover {
      font-size: var(--mo-p-sz);
      font-weight: var(--mo-p-wt);
    }

    .hamberger {
      font-size: 20px;
    }
  }
`;

const Header = () => {
  const [wrapIsHover, setWrapIsHover] = useState<boolean>(false);
  const [menuIsHover, setMenuIsHover] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isMainPage, setIsMainPage] = useState<boolean>(false);
  const [isTop, setIsTop] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const topHandler = () => {
      if (window.scrollY === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };

    window.addEventListener("scroll", topHandler);

    return () => {
      window.removeEventListener("scroll", topHandler);
    };
  }, []);

  useEffect(() => {
    if (router.pathname === "/") {
      setIsMainPage(true);
    } else {
      setIsMainPage(false);
    }
  }, [router.pathname]);

  interface SubMenuProps {
    name: string;
    sub_menu_url: string;
  }

  interface HeaderDataProps {
    menu: string;
    menu_url: string;
    sub_menu: SubMenuProps[];
  }

  const header_data: HeaderDataProps[] = [
    {
      menu: "회사소개",
      menu_url: "/about",
      sub_menu: [
        {
          name: "회사개요",
          sub_menu_url: "/about",
        },
        {
          name: "사업안내",
          sub_menu_url: "/location",
        },
        {
          name: "CEO 인사말",
          sub_menu_url: "/ceo_message",
        },
      ],
    },
    {
      menu: "제품소개",
      menu_url: "/products",
      sub_menu: [
        {
          name: "자동차/산업 통신 네트워크",
          sub_menu_url: "/products/automotive_industrial",
        },
        {
          name: "전자 테스트/측정 장비",
          sub_menu_url: "/products/test_measurement",
        },
        {
          name: "머신 비전 및 광학 검사",
          sub_menu_url: "/products/machine_vision_optical",
        },
        {
          name: "자율주행 데이터 수집 및 시뮬레이션",
          sub_menu_url: "/products/autonomous_driving",
        },
        {
          name: "산업 IoT/산업 측정 장비",
          sub_menu_url: "/products/iiot_measurement",
        },
        {
          name: "바이오메디컬 기기/장비",
          sub_menu_url: "/products/biomedical",
        },
        {
          name: "네트워크 보안",
          sub_menu_url: "/products/network_security",
        },
        {
          name: "산업용 AR",
          sub_menu_url: "/products/industrial_ar",
        },
      ],
    },
    {
      menu: "회사소식",
      menu_url: "/news",
      sub_menu: [
        {
          name: "해홍뉴스",
          sub_menu_url: "/news",
        },
        {
          name: "채용안내",
          sub_menu_url: "/careers",
        },
      ],
    },
  ];

  const wrapOnHandler = () => {
    setWrapIsHover(true);
  };

  const wrapLeaveHandler = () => {
    setWrapIsHover(false);
    setMenuIsHover(false);
  };

  const menuOnHandler = () => {
    setMenuIsHover(true);
  };

  const clickHandler = () => {
    setWrapIsHover(false);
    setMenuIsHover(false);
  };

  const menuOpenHandler = () => {
    setMenuOpen(true);
  };

  const menuCloseHandler = () => {
    setMenuOpen(false);
  };

  return (
    <Wrap
      onMouseEnter={wrapOnHandler}
      onMouseLeave={wrapLeaveHandler}
      onClick={clickHandler}
      isWrapHoverd={wrapIsHover}
      isMenuHoverd={menuIsHover}
      isMainPage={isMainPage}
      isTop={isTop}
      isMenuOpen={menuOpen}
    >
      <Link href={"/"} className="logo">
        <Image src="/logo.png" alt="로고" layout="fill" objectFit="contain" />
      </Link>

      <nav>
        <div className="silde_top" aria-hidden="true">
          <FontAwesomeIcon
            icon={faXmark}
            aria-hidden="true"
            onClick={menuCloseHandler}
          />
        </div>
        <ul className="menu_wrap" onMouseEnter={menuOnHandler}>
          {header_data.map((data, index) => (
            <li key={index} className="menu">
              <Link href={data.menu_url}>{data.menu}</Link>
              <ul className="sub_menu_wrap">
                {data.sub_menu.map((data, index) => (
                  <li key={index} className="sub_menu">
                    <Link href={data.sub_menu_url}>{data.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li className="menu menu_contact" aria-hidden="true">
            <Link href={"/contact"} aria-hidden="true">
              문의하기
            </Link>
            <ul className="sub_menu_wrap" aria-hidden="true">
              <li className="sub_menu" aria-hidden="true">
                <Link href={"/contact"} aria-hidden="true">
                  문의하기
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className="contact">
        <Link href={"/contact"}>문의하기</Link>
      </div>

      <div className="hamberger" aria-hidden="true">
        <FontAwesomeIcon
          icon={faBars}
          aria-hidden="true"
          onClick={menuOpenHandler}
        />
      </div>
    </Wrap>
  );
};

export default Header;
