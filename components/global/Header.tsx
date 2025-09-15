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
  background-color: ${(props)=>(props.isTop&&props.isMainPage ? 'unset':'rgba(245, 245, 245, 0.6)')};
  backdrop-filter: blur(5px);
  box-shadow: ${(props)=>(props.isTop&&props.isMainPage ? 'unset':'0px 3px 10px rgba(26, 31, 43, 0.1)')};
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

  .menu_wrap {
    position: relative;
    z-index: 992;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
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
`;

const Header = () => {
  const [wrapIsHover, setWrapIsHover] = useState<boolean>(false);
  const [menuIsHover, setMenuIsHover] = useState<boolean>(false);
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

  return (
    <Wrap
      onMouseEnter={wrapOnHandler}
      onMouseLeave={wrapLeaveHandler}
      onClick={clickHandler}
      isWrapHoverd={wrapIsHover}
      isMenuHoverd={menuIsHover}
      isMainPage={isMainPage}
      isTop={isTop}
    >
      <Link href={"/"} className="logo">
        <Image src="/logo.png" alt="로고" layout="fill" objectFit="contain" />
      </Link>

      <nav>
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
        </ul>
      </nav>

      <div className="contact">
        <Link href={"/contact"}>문의하기</Link>
      </div>
    </Wrap>
  );
};

export default Header;
