import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface styledProps {
  conNum: number;
}

const Wrap = styled.div<styledProps>`
  position: relative;
  z-index: 0;
  width: 1400px;
  height: 100%;

  .contents {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .container {
      position: relative;
      z-index: 1;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 50px;
      opacity: 0;
      transform: translateX(-50%);
      transition: 0.75s ease-in-out;
      .title {
        position: relative;
        width: 100%;
        font-size: var(--pc-t-sz);
        font-weight: var(--pc-t-wt);
        color: var(--pri-color-500);
      }
      p {
        position: relative;
        width: 60%;
        font-size: var(--pc-sub-sz);
        font-weight: var(--pc-sub-wt);
        color: var(--pri-color-900);
      }
      a {
        position: relative;
        padding: 10px 15px;
        border-radius: 10px;
        background-color: var(--pri-color-500);
        color: var(--neu-color-100);
        font-size: var(--pc-sub-sz);
        font-weight: var(--pc-sub-wt);
        transition: 0.25s ease-in-out;
      }
      a:hover {
        background-color: var(--pri-color-700);
      }
    }
    .img_wrap {
      position: absolute;
      z-index: 0;
      right: 0;
      width: 800px;
      opacity: 0;
      transform: translateY(50%);
      transition: 0.75s ease-in-out;
    }
  }

  .banner_nav {
    position: absolute;
    z-index: 10;
    bottom: 50px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    font-size: 30px;
    svg {
      color: var(--pri-color-900);
      cursor: pointer;
      transition: 0.25s ease-in-out;
    }
    svg:hover {
      color: var(--pri-color-500);
    }
    .dot {
      width: 20px;
      height: 20px;
      border-radius: 50px;
      border: solid 2px var(--pri-color-900);
      cursor: pointer;
      transition: 0.25s ease-in-out;
    }
    .dot_1 {
      background-color: ${(props) =>
        props.conNum === 1 ? "var(--pri-color-900)" : "none"};
    }
    .dot_2 {
      background-color: ${(props) =>
        props.conNum === 2 ? "var(--pri-color-900)" : "none"};
    }
    .dot_3 {
      background-color: ${(props) =>
        props.conNum === 3 ? "var(--pri-color-900)" : "none"};
    }
    .dot_4 {
      background-color: ${(props) =>
        props.conNum === 4 ? "var(--pri-color-900)" : "none"};
    }
    .dot_5 {
      background-color: ${(props) =>
        props.conNum === 5 ? "var(--pri-color-900)" : "none"};
    }
  }

  @media (max-width: 1400px) {
    width: 1024px;
    .contents {
      .img_wrap {
        width: 500px;
      }
    }
  }
  @media (max-width: 1024px) {
    width: 768px;
    .contents {
      .container {
        gap: 30px;
        .title {
          font-size: var(--tab-t-sz);
          font-weight: var(--tab-t-wt);
        }
        p {
          font-size: var(--tab-sub-sz);
          font-weight: var(--tab-sub-wt);
        }
        a {
          padding: 8px 10px;
          border-radius: 8px;
          font-size: var(--tab-sub-sz);
          font-weight: var(--tab-sub-wt);
        }
      }
      .img_wrap {
        width: 350px;
      }
    }

    .banner_nav {
      gap: 20px;
      font-size: 20px;
      .dot {
        width: 15px;
        height: 15px;
      }
    }
  }
  @media (max-width: 768px) {
    width: 480px;
    .contents {
      .container {
        gap: 30px;
        .title {
          font-size: var(--mo-t-sz);
          font-weight: var(--mo-t-wt);
        }
        p {
          font-size: var(--mo-sub-sz);
          font-weight: var(--mo-sub-wt);
        }
        a {
          padding: 5px 8px;
          border-radius: 5px;
          font-size: var(--mo-sub-sz);
          font-weight: var(--mo-sub-wt);
        }
      }
      .img_wrap {
        width: 250px;
      }
    }

    .banner_nav {
      left: 50%;
      transform: translateX(-50%);
      gap: 15px;
      font-size: 18px;
      .dot {
        width: 10px;
        height: 10px;
      }
    }
  }
  @media (max-width: 480px) {
    width: 320px;
    .contents {
      .container {
        .title {
          font-size: var(--mo-h1-sz);
          font-weight: var(--mo-h1-wt);
        }
        p {
          font-size: var(--mo-p-sz);
          font-weight: var(--mo-p-wt);
        }
        a {
          padding: 4px 5px;
          border-radius: 4px;
          font-size: var(--mo-p-sz);
          font-weight: var(--mo-p-wt);
        }
      }
      .img_wrap {
        width: 150px;
      }
    }

    .banner_nav {
      bottom: 30px;
      gap: 10px;
      font-size: 15px;
      .dot {
        width: 8px;
        height: 8px;
      }
    }
  }
`;

const ArticleWrap = () => {
  const [conNum, setConNum] = useState<number>(1);
  const contents1Ref = useRef<HTMLElement>(null);
  const contents2Ref = useRef<HTMLElement>(null);
  const contents3Ref = useRef<HTMLElement>(null);
  const contents4Ref = useRef<HTMLElement>(null);
  const contents5Ref = useRef<HTMLElement>(null);
  const container1Ref = useRef<HTMLDivElement>(null);
  const container2Ref = useRef<HTMLDivElement>(null);
  const container3Ref = useRef<HTMLDivElement>(null);
  const container4Ref = useRef<HTMLDivElement>(null);
  const container5Ref = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const image3Ref = useRef<HTMLDivElement>(null);
  const image4Ref = useRef<HTMLDivElement>(null);
  const image5Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setConNum((num) => (num < 5 ? num + 1 : 1));
    }, 7000);
    return () => clearInterval(interval);
  }, [conNum]);

  useEffect(() => {
    if (
      contents1Ref.current &&
      contents2Ref.current &&
      contents3Ref.current &&
      contents4Ref.current &&
      contents5Ref.current &&
      container1Ref.current &&
      container2Ref.current &&
      container3Ref.current &&
      container4Ref.current &&
      container5Ref.current &&
      image1Ref.current &&
      image2Ref.current &&
      image3Ref.current &&
      image4Ref.current &&
      image5Ref.current
    ) {
      if (conNum === 1) {
        contents1Ref.current.style.zIndex = "5";
        container1Ref.current.style.opacity = "1";
        container1Ref.current.style.transform = "translateX(0)";
        image1Ref.current.style.opacity = "1";
        image1Ref.current.style.transform = "translateY(0)";
        contents2Ref.current.style.zIndex = "0";
        container2Ref.current.style.opacity = "0";
        container2Ref.current.style.transform = "translateX(-50%)";
        image2Ref.current.style.opacity = "0";
        image2Ref.current.style.transform = "translateY(50%)";
        contents3Ref.current.style.zIndex = "0";
        container3Ref.current.style.opacity = "0";
        container3Ref.current.style.transform = "translateX(-50%)";
        image3Ref.current.style.opacity = "0";
        image3Ref.current.style.transform = "translateY(50%)";
        contents4Ref.current.style.zIndex = "0";
        container4Ref.current.style.opacity = "0";
        container4Ref.current.style.transform = "translateX(-50%)";
        image4Ref.current.style.opacity = "0";
        image4Ref.current.style.transform = "translateY(50%)";
        contents5Ref.current.style.zIndex = "0";
        container5Ref.current.style.opacity = "0";
        container5Ref.current.style.transform = "translateX(-50%)";
        image5Ref.current.style.opacity = "0";
        image5Ref.current.style.transform = "translateY(50%)";
      } else if (conNum === 2) {
        contents1Ref.current.style.zIndex = "0";
        container1Ref.current.style.opacity = "0";
        container1Ref.current.style.transform = "translateX(-50%)";
        image1Ref.current.style.opacity = "0";
        image1Ref.current.style.transform = "translateY(50%)";
        contents2Ref.current.style.zIndex = "5";
        container2Ref.current.style.opacity = "1";
        container2Ref.current.style.transform = "translateX(0)";
        image2Ref.current.style.opacity = "1";
        image2Ref.current.style.transform = "translateY(0)";
        contents3Ref.current.style.zIndex = "0";
        container3Ref.current.style.opacity = "0";
        container3Ref.current.style.transform = "translateX(-50%)";
        image3Ref.current.style.opacity = "0";
        image3Ref.current.style.transform = "translateY(50%)";
        contents4Ref.current.style.zIndex = "0";
        container4Ref.current.style.opacity = "0";
        container4Ref.current.style.transform = "translateX(-50%)";
        image4Ref.current.style.opacity = "0";
        image4Ref.current.style.transform = "translateY(50%)";
        contents5Ref.current.style.zIndex = "0";
        container5Ref.current.style.opacity = "0";
        container5Ref.current.style.transform = "translateX(-50%)";
        image5Ref.current.style.opacity = "0";
        image5Ref.current.style.transform = "translateY(50%)";
      } else if (conNum === 3) {
        contents1Ref.current.style.zIndex = "0";
        container1Ref.current.style.opacity = "0";
        container1Ref.current.style.transform = "translateX(-50%)";
        image1Ref.current.style.opacity = "0";
        image1Ref.current.style.transform = "translateY(50%)";
        contents2Ref.current.style.zIndex = "0";
        container2Ref.current.style.opacity = "0";
        container2Ref.current.style.transform = "translateX(-50%)";
        image2Ref.current.style.opacity = "0";
        image2Ref.current.style.transform = "translateY(50%)";
        contents3Ref.current.style.zIndex = "5";
        container3Ref.current.style.opacity = "1";
        container3Ref.current.style.transform = "translateX(0)";
        image3Ref.current.style.opacity = "1";
        image3Ref.current.style.transform = "translateY(0)";
        contents4Ref.current.style.zIndex = "0";
        container4Ref.current.style.opacity = "0";
        container4Ref.current.style.transform = "translateX(-50%)";
        image4Ref.current.style.opacity = "0";
        image4Ref.current.style.transform = "translateY(50%)";
        contents5Ref.current.style.zIndex = "0";
        container5Ref.current.style.opacity = "0";
        container5Ref.current.style.transform = "translateX(-50%)";
        image5Ref.current.style.opacity = "0";
        image5Ref.current.style.transform = "translateY(50%)";
      } else if (conNum === 4) {
        contents1Ref.current.style.zIndex = "0";
        container1Ref.current.style.opacity = "0";
        container1Ref.current.style.transform = "translateX(-50%)";
        image1Ref.current.style.opacity = "0";
        image1Ref.current.style.transform = "translateY(50%)";
        contents2Ref.current.style.zIndex = "0";
        container2Ref.current.style.opacity = "0";
        container2Ref.current.style.transform = "translateX(-50%)";
        image2Ref.current.style.opacity = "0";
        image2Ref.current.style.transform = "translateY(50%)";
        contents3Ref.current.style.zIndex = "0";
        container3Ref.current.style.opacity = "0";
        container3Ref.current.style.transform = "translateX(-50%)";
        image3Ref.current.style.opacity = "0";
        image3Ref.current.style.transform = "translateY(50%)";
        contents4Ref.current.style.zIndex = "5";
        container4Ref.current.style.opacity = "1";
        container4Ref.current.style.transform = "translateX(0)";
        image4Ref.current.style.opacity = "1";
        image4Ref.current.style.transform = "translateY(0)";
        contents5Ref.current.style.zIndex = "0";
        container5Ref.current.style.opacity = "0";
        container5Ref.current.style.transform = "translateX(-50%)";
        image5Ref.current.style.opacity = "0";
        image5Ref.current.style.transform = "translateY(50%)";
      } else if (conNum === 5) {
        contents1Ref.current.style.zIndex = "0";
        container1Ref.current.style.opacity = "0";
        container1Ref.current.style.transform = "translateX(-50%)";
        image1Ref.current.style.opacity = "0";
        image1Ref.current.style.transform = "translateY(50%)";
        contents2Ref.current.style.zIndex = "0";
        container2Ref.current.style.opacity = "0";
        container2Ref.current.style.transform = "translateX(-50%)";
        image2Ref.current.style.opacity = "0";
        image2Ref.current.style.transform = "translateY(50%)";
        contents3Ref.current.style.zIndex = "0";
        container3Ref.current.style.opacity = "0";
        container3Ref.current.style.transform = "translateX(-50%)";
        image3Ref.current.style.opacity = "0";
        image3Ref.current.style.transform = "translateY(50%)";
        contents4Ref.current.style.zIndex = "0";
        container4Ref.current.style.opacity = "0";
        container4Ref.current.style.transform = "translateX(-50%)";
        image4Ref.current.style.opacity = "0";
        image4Ref.current.style.transform = "translateY(50%)";
        contents5Ref.current.style.zIndex = "5";
        container5Ref.current.style.opacity = "1";
        container5Ref.current.style.transform = "translateX(0)";
        image5Ref.current.style.opacity = "1";
        image5Ref.current.style.transform = "translateY(0)";
      }
    }
  }, [conNum]);

  const dot_1_handler = () => {
    setConNum(1);
  };
  const dot_2_handler = () => {
    setConNum(2);
  };
  const dot_3_handler = () => {
    setConNum(3);
  };
  const dot_4_handler = () => {
    setConNum(4);
  };
  const dot_5_handler = () => {
    setConNum(5);
  };

  const beforeHandler = () => {
    if (conNum !== 1) {
      setConNum(conNum - 1);
    } else {
      setConNum(5);
    }
  };

  const afterHandler = () => {
    if (conNum !== 5) {
      setConNum(conNum + 1);
    } else {
      setConNum(1);
    }
  };

  return (
    <Wrap conNum={conNum}>
      <article className="contents contents_1" ref={contents1Ref}>
        <div className="container" ref={container1Ref}>
          <h1 className="title">해홍 주식회사</h1>
          <p>전문 산업 표준 제품 및 원스톱 솔루션 공급업체</p>
          <Link href={"/"}>자세히 보기</Link>
        </div>
        <div className="img_wrap" ref={image1Ref}>
          <Image
            src="/test.jpg"
            alt="test"
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
      </article>
      <article className="contents contents_2" ref={contents2Ref}>
        <div className="container" ref={container2Ref}>
          <h1 className="title">Kvaser CAN 버스</h1>
          <p>
            CAN/LIN-USB 변환기 | CAN-Wi-Fi 변환기 | Memorator | 다중 채널
            CAN-USB 변환기 | 단일 채널 CAN-USB 변환기 | Leaf 단일 채널 CAN-USB
            변환기 | 임베디드 확장 카드 | DIN RAIL
          </p>
          <Link href={"/"}>자세히 보기</Link>
        </div>
        <div className="img_wrap" ref={image2Ref}>
          <Image
            src="/test.jpg"
            alt="test"
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
      </article>
      <article className="contents contents_3" ref={contents3Ref}>
        <div className="container" ref={container3Ref}>
          <h1 className="title">ASPION 충격 기록계</h1>
          <p>
            logistics and transportation shock recorder | IoT real-time tracker
          </p>
          <Link href={"/"}>자세히 보기</Link>
        </div>
        <div className="img_wrap" ref={image3Ref}>
          <Image
            src="/test.jpg"
            alt="test"
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
      </article>
      <article className="contents contents_4" ref={contents4Ref}>
        <div className="container" ref={container4Ref}>
          <h1 className="title">Codra SCADA/MES</h1>
          <p>
            SCADA 소프트웨어 | BI 소프트웨어—히스토리 데이터 분석 및 리포트 |
            데이터 수집 소프트웨어 게이트웨이 | SCADA 솔루션 | MES 소프트웨어
          </p>
          <Link href={"/"}>자세히 보기</Link>
        </div>
        <div className="img_wrap" ref={image4Ref}>
          <Image
            src="/test.jpg"
            alt="test"
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
      </article>
      <article className="contents contents_5" ref={contents5Ref}>
        <div className="container" ref={container5Ref}>
          <h1 className="title">Tele 릴레이</h1>
          <p>
            Timing Relays | Switching Relays | Monitoring Relays | Power
            Monitors | grid and system protection | Measuring Technology |
            Complimentary Products
          </p>
          <Link href={"/"}>자세히 보기</Link>
        </div>
        <div className="img_wrap" ref={image5Ref}>
          <Image
            src="/test.jpg"
            alt="test"
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
      </article>
      <div className="banner_nav" aria-hidden="true">
        <FontAwesomeIcon
          icon={faAngleLeft}
          aria-hidden="true"
          onClick={beforeHandler}
        />
        <div
          className="dot dot_1"
          aria-hidden="true"
          onClick={dot_1_handler}
        ></div>
        <div
          className="dot dot_2"
          aria-hidden="true"
          onClick={dot_2_handler}
        ></div>
        <div
          className="dot dot_3"
          aria-hidden="true"
          onClick={dot_3_handler}
        ></div>
        <div
          className="dot dot_4"
          aria-hidden="true"
          onClick={dot_4_handler}
        ></div>
        <div
          className="dot dot_5"
          aria-hidden="true"
          onClick={dot_5_handler}
        ></div>
        <FontAwesomeIcon
          icon={faAngleRight}
          aria-hidden="true"
          onClick={afterHandler}
        />
      </div>
    </Wrap>
  );
};

export default ArticleWrap;
