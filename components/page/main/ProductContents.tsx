import {
  faAngleLeft,
  faAngleRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useState } from "react";
import styled from "styled-components";

interface WrapProps {
  sortNum: number;
}

const Wrap = styled.div<WrapProps>`
  position: relative;
  z-index: 0;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  .nav {
    position: relative;
    z-index: 0;
    display: flex;
    flex-direction: column;
    width: 500px;
    .sort {
      width: 100%;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 15px;
      font-size: var(--pc-sub-sz);
      font-weight: var(--pc-sub-wt);
      color: var(--neu-color-400);
      border-radius: 10px;
      transition: 0.25s ease-in-out;
      cursor: pointer;
    }
    .sort_1 {
      background-color: ${(props) =>
        props.sortNum === 1 ? "var(--pri-color-500)" : "none"};
      color: ${(props) =>
        props.sortNum === 1 ? "var(--neu-color-100)" : "none"};
      &:hover {
        background-color: ${(props) =>
          props.sortNum === 1
            ? "var(--pri-color-500)"
            : "var(--pri-color-100)"};
        color: ${(props) =>
          props.sortNum === 1
            ? "var(--neu-color-100)"
            : "var(--neu-color-900)"};
      }
    }
    .sort_2 {
      background-color: ${(props) =>
        props.sortNum === 2 ? "var(--pri-color-500)" : "none"};
      color: ${(props) =>
        props.sortNum === 2 ? "var(--neu-color-100)" : "none"};
      &:hover {
        background-color: ${(props) =>
          props.sortNum === 2
            ? "var(--pri-color-500)"
            : "var(--pri-color-100)"};
        color: ${(props) =>
          props.sortNum === 2
            ? "var(--neu-color-100)"
            : "var(--neu-color-900)"};
      }
    }
    .sort_3 {
      background-color: ${(props) =>
        props.sortNum === 3 ? "var(--pri-color-500)" : "none"};
      color: ${(props) =>
        props.sortNum === 3 ? "var(--neu-color-100)" : "none"};
      &:hover {
        background-color: ${(props) =>
          props.sortNum === 3
            ? "var(--pri-color-500)"
            : "var(--pri-color-100)"};
        color: ${(props) =>
          props.sortNum === 3
            ? "var(--neu-color-100)"
            : "var(--neu-color-900)"};
      }
    }
    .sort_4 {
      background-color: ${(props) =>
        props.sortNum === 4 ? "var(--pri-color-500)" : "none"};
      color: ${(props) =>
        props.sortNum === 4 ? "var(--neu-color-100)" : "none"};
      &:hover {
        background-color: ${(props) =>
          props.sortNum === 4
            ? "var(--pri-color-500)"
            : "var(--pri-color-100)"};
        color: ${(props) =>
          props.sortNum === 4
            ? "var(--neu-color-100)"
            : "var(--neu-color-900)"};
      }
    }
    .sort_5 {
      background-color: ${(props) =>
        props.sortNum === 5 ? "var(--pri-color-500)" : "none"};
      color: ${(props) =>
        props.sortNum === 5 ? "var(--neu-color-100)" : "none"};
      &:hover {
        background-color: ${(props) =>
          props.sortNum === 5
            ? "var(--pri-color-500)"
            : "var(--pri-color-100)"};
        color: ${(props) =>
          props.sortNum === 5
            ? "var(--neu-color-100)"
            : "var(--neu-color-900)"};
      }
    }
    .sort_6 {
      background-color: ${(props) =>
        props.sortNum === 6 ? "var(--pri-color-500)" : "none"};
      color: ${(props) =>
        props.sortNum === 6 ? "var(--neu-color-100)" : "none"};
      &:hover {
        background-color: ${(props) =>
          props.sortNum === 6
            ? "var(--pri-color-500)"
            : "var(--pri-color-100)"};
        color: ${(props) =>
          props.sortNum === 6
            ? "var(--neu-color-100)"
            : "var(--neu-color-900)"};
      }
    }
    .sort_7 {
      background-color: ${(props) =>
        props.sortNum === 7 ? "var(--pri-color-500)" : "none"};
      color: ${(props) =>
        props.sortNum === 7 ? "var(--neu-color-100)" : "none"};
      &:hover {
        background-color: ${(props) =>
          props.sortNum === 7
            ? "var(--pri-color-500)"
            : "var(--pri-color-100)"};
        color: ${(props) =>
          props.sortNum === 7
            ? "var(--neu-color-100)"
            : "var(--neu-color-900)"};
      }
    }
    .sort_8 {
      background-color: ${(props) =>
        props.sortNum === 8 ? "var(--pri-color-500)" : "none"};
      color: ${(props) =>
        props.sortNum === 8 ? "var(--neu-color-100)" : "none"};
      &:hover {
        background-color: ${(props) =>
          props.sortNum === 8
            ? "var(--pri-color-500)"
            : "var(--pri-color-100)"};
        color: ${(props) =>
          props.sortNum === 8
            ? "var(--neu-color-100)"
            : "var(--neu-color-900)"};
      }
    }
  }
  .contents {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
    width: 860px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
    transition: 0.5s ease-in-out;
    .sort_title {
      font-size: var(--pc-h3-sz);
      font-weight: var(--pc-h3-wt);
      color: var(--neu-color-900);
    }
    .category_wrap {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      a {
        padding: 10px 8px;
        border-radius: 50px;
        border: 1px solid var(--pri-color-500);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5px;
        font-size: var(--pc-p-sz);
        font-weight: var(--pc-p-wt);
        color: var(--pri-color-500);
        transition: 0.25s ease-in-out;
        &:hover {
          color: var(--neu-color-100);
          background-color: var(--pri-color-500);
        }
      }
    }
    .sort_page {
      padding: 10px 15px;
      border-radius: 10px;
      background-color: var(--pri-color-500);
      color: var(--neu-color-100);
      font-size: var(--pc-sub-sz);
      font-weight: var(--pc-sub-wt);
      transition: 0.25s ease-in-out;
      &:hover {
        background-color: var(--pri-color-700);
      }
    }
    .img_box {
      width: 100%;
      height: 400px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(var(--pri-color-100), var(--ter-color-100));
      .img {
        width: 400px;
        height: 400px;
      }
    }
  }
  .contents_1 {
    z-index: ${(props) => (props.sortNum === 1 ? "5" : "0")};
    opacity: ${(props) => (props.sortNum === 1 ? "1" : "0")};
    transform: ${(props) =>
      props.sortNum === 1 ? "translateX(0)" : "translateX(50%)"};
  }
  .contents_2 {
    z-index: ${(props) => (props.sortNum === 2 ? "5" : "0")};
    opacity: ${(props) => (props.sortNum === 2 ? "1" : "0")};
    transform: ${(props) =>
      props.sortNum === 2 ? "translateX(0)" : "translateX(50%)"};
  }
  .contents_3 {
    z-index: ${(props) => (props.sortNum === 3 ? "5" : "0")};
    opacity: ${(props) => (props.sortNum === 3 ? "1" : "0")};
    transform: ${(props) =>
      props.sortNum === 3 ? "translateX(0)" : "translateX(50%)"};
  }
  .contents_4 {
    z-index: ${(props) => (props.sortNum === 4 ? "5" : "0")};
    opacity: ${(props) => (props.sortNum === 4 ? "1" : "0")};
    transform: ${(props) =>
      props.sortNum === 4 ? "translateX(0)" : "translateX(50%)"};
  }
  .contents_5 {
    z-index: ${(props) => (props.sortNum === 5 ? "5" : "0")};
    opacity: ${(props) => (props.sortNum === 5 ? "1" : "0")};
    transform: ${(props) =>
      props.sortNum === 5 ? "translateX(0)" : "translateX(50%)"};
  }
  .contents_6 {
    z-index: ${(props) => (props.sortNum === 6 ? "5" : "0")};
    opacity: ${(props) => (props.sortNum === 6 ? "1" : "0")};
    transform: ${(props) =>
      props.sortNum === 6 ? "translateX(0)" : "translateX(50%)"};
  }
  .contents_7 {
    z-index: ${(props) => (props.sortNum === 7 ? "5" : "0")};
    opacity: ${(props) => (props.sortNum === 7 ? "1" : "0")};
    transform: ${(props) =>
      props.sortNum === 7 ? "translateX(0)" : "translateX(50%)"};
  }
  .contents_8 {
    z-index: ${(props) => (props.sortNum === 8 ? "5" : "0")};
    opacity: ${(props) => (props.sortNum === 8 ? "1" : "0")};
    transform: ${(props) =>
      props.sortNum === 8 ? "translateX(0)" : "translateX(50%)"};
  }

  .before_arrow {
    display: none;
  }

  .after_arrow {
    display: none;
  }

  .nav_dot_wrap {
    display: none;
  }

  @media (max-width: 1400px) {
    .nav {
      width: 365px;
    }
    .contents {
      width: 629px;
      .img_box {
        height: 350px;
        .img {
          width: 350px;
          height: 350px;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    .nav {
      width: 243px;
      .sort {
        height: 60px;
        font-size: var(--tab-p-sz);
        font-weight: var(--tab-p-wt);
      }
    }
    .contents {
      width: 505px;
      .sort_title {
        font-size: var(--tab-h3-sz);
        font-weight: var(--tab-h3-wt);
      }
      .category_wrap {
        a {
          padding: 5px 8px;
          gap: 3px;
          font-size: var(--tab-p-sz);
          font-weight: var(--tab-p-wt);
        }
      }
      .sort_page {
        padding: 8px 10px;
        border-radius: 8px;
        font-size: var(--tab-sub-sz);
        font-weight: var(--tab-sub-wt);
      }
      .img_box {
        height: 250px;
        .img {
          width: 250px;
          height: 250px;
        }
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 600px;
    background: linear-gradient(var(--pri-color-200), var(--ter-color-200));
    .nav {
      display: none;
    }
    .contents {
      padding: 15px;
      width: 100%;
      height: 100%;
      .sort_title {
        position: relative;
        font-size: var(--mo-h3-sz);
        font-weight: var(--mo-h3-wt);
        color: var(--pri-color-500);
        z-index: 1;
      }
      .category_wrap {
        position: absolute;
        z-index: 1;
        left: 15;
        width: calc(100% - 30px);
        bottom: 121px;
        a {
          padding: 5px 8px;
          background-color: var(--pri-color-500);
          color: var(--neu-color-100);
          font-size: var(--mo-sub-sz);
          font-weight: var(--mo-sub-wt);
        }
      }
      .sort_page {
        position: absolute;
        left: 15px;
        bottom: 70px;
        z-index: 1;
        padding: 5px 8px;
        border-radius: 5px;
        font-size: var(--mo-sub-sz);
        font-weight: var(--mo-sub-wt);
      }
      .img_box {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        background: none;
        .img {
          width: 300px;
          height: 300px;
        }
      }
    }
    .before_arrow {
      position: absolute;
      z-index: 20;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 35px;
      height: 35px;
      border-radius: 35px;
      background-color: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(5px);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      color: var(--pri-color-500);
      cursor: pointer;
    }
    .after_arrow {
      position: absolute;
      z-index: 20;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 35px;
      height: 35px;
      border-radius: 35px;
      background-color: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(5px);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      color: var(--pri-color-500);
      cursor: pointer;
    }
    .nav_dot_wrap {
      position: absolute;
      z-index: 0;
      left: 50%;
      transform: translateX(-50%);
      bottom: 15px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      .dot {
        width: 10px;
        height: 10px;
        border-radius: 10px;
        border: 1px solid var(--pri-color-500);
      }
      .dot_1 {
        background-color: ${(props) =>
          props.sortNum === 1 ? "var(--pri-color-500)" : "none"};
      }
      .dot_2 {
        background-color: ${(props) =>
          props.sortNum === 2 ? "var(--pri-color-500)" : "none"};
      }
      .dot_3 {
        background-color: ${(props) =>
          props.sortNum === 3 ? "var(--pri-color-500)" : "none"};
      }
      .dot_4 {
        background-color: ${(props) =>
          props.sortNum === 4 ? "var(--pri-color-500)" : "none"};
      }
      .dot_5 {
        background-color: ${(props) =>
          props.sortNum === 5 ? "var(--pri-color-500)" : "none"};
      }
      .dot_6 {
        background-color: ${(props) =>
          props.sortNum === 6 ? "var(--pri-color-500)" : "none"};
      }
      .dot_7 {
        background-color: ${(props) =>
          props.sortNum === 7 ? "var(--pri-color-500)" : "none"};
      }
      .dot_8 {
        background-color: ${(props) =>
          props.sortNum === 8 ? "var(--pri-color-500)" : "none"};
      }
    }
  }
`;

const ProductContents = () => {
  const [sortNum, setSortNum] = useState<number>(1);

  interface CategoryType {
    name: string;
    url: string;
  }

  interface DataType {
    sort: string;
    url: string;
    img: string;
    category: CategoryType[];
  }

  const data: DataType[] = [
    {
      sort: "자동차/산업 통신 네트워크",
      url: "/products/automotive_industrial",
      img: "/test.jpg",
      category: [
        {
          name: "CAN 버스",
          url: "/products/automotive_industrial/can_bus",
        },
        {
          name: "LIN 버스",
          url: "/products/automotive_industrial/can_bus",
        },
        {
          name: "TSN/HSR/PRP",
          url: "/products/automotive_industrial/can_bus",
        },
        {
          name: "엣지 컴퓨팅/게이트웨이",
          url: "/products/automotive_industrial/can_bus",
        },
        {
          name: "차량용 이더넷",
          url: "/products/automotive_industrial/can_bus",
        },
        {
          name: "휴머노이드 로봇",
          url: "/products/automotive_industrial/can_bus",
        },
      ],
    },
    {
      sort: "전자 테스트/측정 장비",
      url: "/products/test_measurement",
      img: "/test.jpg",
      category: [
        {
          name: "반도체 테스트",
          url: "/products/test_measurement/semiconductor_test",
        },
        {
          name: "무선통신 안테나",
          url: "/products/test_measurement/rf_antenna",
        },
        {
          name: "GNSS 시뮬레이션 테스트",
          url: "/products/test_measurement/gnss_simulation_testing",
        },
        {
          name: "테스트 소프트웨어",
          url: "/products/test_measurement/test_software",
        },
      ],
    },
    {
      sort: "머신 비전 및 광학 검사",
      url: "/products/machine_vision_optical",
      img: "/test.jpg",
      category: [
        {
          name: "OCT 이미징",
          url: "/products/machine_vision_optical/oct_imaging",
        },
        {
          name: "차량용 비전",
          url: "/products/machine_vision_optical/automotive_vision",
        },
        {
          name: "반도체 광원(UV 광원)",
          url: "/products/machine_vision_optical/semiconductor_light_source",
        },
      ],
    },
    {
      sort: "자율주행 데이터 수집 및 시뮬레이션",
      url: "/products/autonomous_driving",
      img: "/test.jpg",
      category: [
        {
          name: "시뮬레이션 테스트",
          url: "/products/autonomous_driving/simulation_test",
        },
        {
          name: "데이터 수집",
          url: "/products/autonomous_driving/data_collection",
        },
        {
          name: "데이터 처리",
          url: "/products/autonomous_driving/data_processing",
        },
      ],
    },
    {
      sort: "산업 IoT/산업 측정 장비",
      url: "/products/iiot_measurement",
      img: "/test.jpg",
      category: [
        {
          name: "SCADA/MES 시스템",
          url: "/products/iiot_measurement/scada_mes_systems",
        },
        {
          name: "자동화 제어 장비/HMI",
          url: "/products/iiot_measurement/automation_comtrol_equipment_hml",
        },
        {
          name: "릴레이",
          url: "/products/iiot_measurement/relays",
        },
        {
          name: "산업용 트랜스미터 및 센서",
          url: "/products/iiot_measurement/industrial_transmitters_and_sensors",
        },
        {
          name: "온습도 기록계",
          url: "/products/iiot_measurement/temperature_and_humidity_data_loggers",
        },
        {
          name: "운송 충격 및 진동 기록계",
          url: "/products/iiot_measurement/transportation_shock_and_vibration_data_loggers",
        },
        {
          name: "다기능 데이터 로거",
          url: "/products/iiot_measurement/multi_function_data_loggers",
        },
        {
          name: "산업용 통신 장비/소프트웨어 솔루션",
          url: "/products/iiot_measurement/industrial_communication_equipment_software_solutions",
        },
      ],
    },
    {
      sort: "바이오메디컬 기기/장비",
      url: "/products/biomedical",
      img: "/test.jpg",
      category: [
        {
          name: "마이크로플루이딕스",
          url: "/products/biomedical/microfluidics",
        },
        {
          name: "환경 모니터링 시스템",
          url: "/products/biomedical/environmental_monitoring_system",
        },
        {
          name: "실험실 장비",
          url: "/products/biomedical/laboratory_equipment",
        },
      ],
    },
    {
      sort: "네트워크 보안",
      url: "/products/network_security",
      img: "/test.jpg",
      category: [
        {
          name: "보안 및 컴플라이언스",
          url: "/products/network_security/security_and_compliance",
        },
        {
          name: "비즈니스 인텔리전스",
          url: "/products/network_security/business_intelligence",
        },
        {
          name: "데이터 저장소",
          url: "/products/network_security/data_storage",
        },
        {
          name: "소프트웨어 개발",
          url: "/products/network_security/software_development",
        },
        {
          name: "DevSecOps",
          url: "/products/network_security/devsecops",
        },
      ],
    },
    {
      sort: "산업용 AR",
      url: "/products/industrial_ar",
      img: "/test.jpg",
      category: [
        {
          name: "스마트 AR 안경",
          url: "/products/industrial_ar/smart_ar_glasses",
        },
      ],
    },
  ];

  const clickHandler = (event: MouseEvent<HTMLLIElement>) => {
    if (event.currentTarget.classList.contains("sort_1")) {
      setSortNum(1);
    } else if (event.currentTarget.classList.contains("sort_2")) {
      setSortNum(2);
    } else if (event.currentTarget.classList.contains("sort_3")) {
      setSortNum(3);
    } else if (event.currentTarget.classList.contains("sort_4")) {
      setSortNum(4);
    } else if (event.currentTarget.classList.contains("sort_5")) {
      setSortNum(5);
    } else if (event.currentTarget.classList.contains("sort_6")) {
      setSortNum(6);
    } else if (event.currentTarget.classList.contains("sort_7")) {
      setSortNum(7);
    } else if (event.currentTarget.classList.contains("sort_8")) {
      setSortNum(8);
    }
  };

  const beforeClickHandler = () => {
    if (sortNum > 1) {
      setSortNum(sortNum - 1);
    } else {
      setSortNum(8);
    }
  };

  const afterClickHandler = () => {
    if (sortNum < 8) {
      setSortNum(sortNum + 1);
    } else {
      setSortNum(1);
    }
  };

  return (
    <Wrap sortNum={sortNum}>
      <ul className="nav" aria-hidden="true">
        {data.map((dt, index) => (
          <li
            key={index}
            className={`sort sort_${index + 1}`}
            aria-hidden="true"
            onClick={clickHandler}
          >
            <div className="sort_name" aria-hidden="true">
              {dt.sort}
            </div>
            <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
          </li>
        ))}
      </ul>
      {data.map((dt, index) => (
        <article key={index} className={`contents contents_${index + 1}`}>
          <h3 className="sort_title">{dt.sort}</h3>
          <div className="category_wrap">
            {dt.category.map((d, index) => (
              <Link href={d.url} key={index}>
                <h4>{d.name}</h4>
                <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
              </Link>
            ))}
          </div>
          <Link href={dt.url} className="sort_page">
            자세히 보기
          </Link>
          <div className="img_box">
            <div className="img">
              <Image
                src={dt.img}
                alt={dt.sort}
                width={500}
                height={500}
                layout="responsive"
              />
            </div>
          </div>
        </article>
      ))}
      <div
        className="before_arrow"
        aria-hidden="true"
        onClick={beforeClickHandler}
      >
        <FontAwesomeIcon icon={faAngleLeft} aria-hidden="true" />
      </div>
      <div
        className="after_arrow"
        aria-hidden="true"
        onClick={afterClickHandler}
      >
        <FontAwesomeIcon icon={faAngleRight} aria-hidden="true" />
      </div>
      <div className="nav_dot_wrap" aria-hidden="true">
        <div className="dot dot_1" aria-hidden="true"></div>
        <div className="dot dot_2" aria-hidden="true"></div>
        <div className="dot dot_3" aria-hidden="true"></div>
        <div className="dot dot_4" aria-hidden="true"></div>
        <div className="dot dot_5" aria-hidden="true"></div>
        <div className="dot dot_6" aria-hidden="true"></div>
        <div className="dot dot_7" aria-hidden="true"></div>
        <div className="dot dot_8" aria-hidden="true"></div>
      </div>
    </Wrap>
  );
};

export default ProductContents;
