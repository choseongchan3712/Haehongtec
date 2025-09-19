import {
  faSquareFacebook,
  faSquareInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Wrap = styled.footer`
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  padding: 50px;
  background-color: var(--pri-color-900);

  .top_wrap {
    position: relative;
    z-index: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 50px;
    border-bottom: 1px solid var(--neu-color-100);
  }

  .top_left_wrap {
    position: relative;
    z-index: 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 50px;
  }

  .logo {
    position: relative;
    z-index: 0;
    width: 150px;
    height: auto;
  }

  .top_left_wrap address {
    position: relative;
    z-index: 0;
    display: flex;
    flex-direction: column;
  }

  .top_left_wrap address p {
    position: relative;
    z-index: 0;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .top_left_wrap address p span {
    position: relative;
    z-index: 0;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: var(--neu-color-100);
    font-size: var(--pc-sub-sz);
    font-weight: var(--pc-sub-wt);
  }

  .address_name {
    width: 90px;
    border-right: 1px solid var(--neu-color-100);
  }

  .address_detail {
    padding-left: 40px;
  }

  .top_right_wrap {
    position: relative;
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
  }

  .links ul {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  .links ul li a {
    font-size: 35px;
    color: var(--neu-color-100);
    transition: 0.25s ease-in-out;
  }

  .links ul li a:hover {
    color: var(--pri-color-500);
  }

  .naver {
    width: 34px;
    height: 34px;
    padding-bottom: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--neu-color-100);
    border-radius: 10px;
    color: var(--pri-color-900);
    font-size: 25px;
    font-weight: 900;
    transition: 0.25s ease-in-out;
  }

  .naver:hover {
    background-color: var(--pri-color-500);
  }

  .copy_right {
    font-size: var(--pc-p-sz);
    font-weight: var(--pc-p-wt);
    color: var(--neu-color-100);
  }

  .page_nav {
    position: relative;
    z-index: 0;
    width: 100%;
  }

  .sort_wrap {
    position: relative;
    z-index: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
  }

  .sort {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 300px;
  }

  .sort > a {
    font-size: var(--pc-sub-sz);
    font-weight: var(--pc-sub-wt);
    color: var(--pri-color-500);
    transition: 0.25s ease-in-out;
  }

  .sort > a:hover {
    color: var(--pri-color-700);
  }

  .category_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .category > a {
    font-size: var(--pc-p-sz);
    font-weight: var(--pc-p-wt);
    color: var(--neu-color-100);
    transition: 0.25s ease-in-out;
  }

  .category > a:hover {
    color: var(--pri-color-500);
  }

  @media (max-width: 1024px) {
    padding: 25px 30px;
    gap: 25px;

    .top_wrap {
      padding-bottom: 25px;
    }

    .top_left_wrap {
      gap: 25px;
    }

    .logo {
      width: 100px;
    }

    .top_left_wrap address p {
      height: 40px;
    }

    .top_left_wrap address p span {
      font-size: var(--tab-p-sz);
      font-weight: var(--tab-p-wt);
    }

    .address_name {
      width: 80px;
    }

    .address_detail {
      padding-left: 15px;
    }

    .links ul {
      gap: 20px;
    }

    .links ul li a {
      font-size: 25px;
    }

    .naver {
      width: 24px;
      height: 24px;
      border-radius: 6px;
      font-size: 20px;
      padding-bottom: 1px;
    }

    .copy_right {
      font-size: var(--tab-p-sz);
      font-weight: var(--tab-p-wt);
    }

    .sort_wrap {
      gap: 25px;
    }

    .sort {
      width: 250px;
      gap: 20px;
    }

    .sort > a {
      font-size: var(--tab-sub-sz);
      font-weight: var(--tab-sub-wt);
    }

    .category_wrap {
      gap: 10px;
    }

    .category > a {
      font-size: var(--tab-p-sz);
      font-weight: var(--tab-p-wt);
    }

    @media (max-width: 768px) {
      padding: 10px;
      gap: 15px;
      .top_wrap {
        padding-bottom: 10px;
        flex-direction: column;
        gap: 15px;
      }

      .top_left_wrap {
        flex-direction: column;
        gap: 15px;
      }

      .logo {
        width: 80px;
      }
      .top_left_wrap address p {
        height: 30px;
      }

      .top_left_wrap address p span {
        height: 20px;
        font-size: var(--mo-p-sz);
        font-weight: var(--mo-p-wt);
      }

      .address_name {
        width: 50px;
      }

      .address_detail {
        padding-left: 25px;
      }

      .top_right_wrap {
        align-items: flex-start;
        gap: 20px;
      }

      .links ul {
        gap: 20px;
      }

      .links ul li a {
        font-size: 20px;
      }

      .naver {
        font-size: 15px;
        width: 20px;
        height: 20px;
        border-radius: 5px;
        padding-right: 1px;
      }

      .copy_right {
        font-size: var(--mo-p-sz);
        font-weight: var(--mo-p-wt);
      }

      .sort_wrap {
        gap: 15px;
      }

      .sort {
        width: 220px;
        gap: 15px;
      }

      .sort > a {
        font-size: var(--mo-sub-sz);
        font-weight: var(--mo-sub-wt);
      }

      .category > a {
        font-size: var(--mo-p-sz);
        font-weight: var(--mo-p-wt);
      }
    }

    @media (max-width: 480px) {
        .top_wrap {
            border: none;
        }

        .page_nav {
            display: none;
        }
    }
  }
`;

const Footer = () => {
  interface CategoryProps {
    name: string;
    url_name: string;
  }

  interface FooterDataProps {
    sort: string;
    sort_url: string;
    category: CategoryProps[];
  }
  const footer_data: FooterDataProps[] = [
    {
      sort: "자동차/산업 통신 네트워크",
      sort_url: "/products/automotive_industrial",
      category: [
        {
          name: "CAN 버스",
          url_name: "/products/automotive_industrial/can_bus",
        },
        {
          name: "LIN 버스",
          url_name: "/products/automotive_industrial/lin_bus",
        },
        {
          name: "TSN/HSR/PRP",
          url_name: "/products/automotive_industrial/tsn-hsr-prp",
        },
        {
          name: "엣지 컴퓨팅/게이트웨이",
          url_name: "/products/automotive_industrial/edge_computing-gateway",
        },
        {
          name: "차량용 이더넷",
          url_name: "/products/automotive_industrial/automotive_ethernet",
        },
        {
          name: "휴머노이드 로봇",
          url_name: "/products/automotive_industrial/humanoid_robot",
        },
      ],
    },
    {
      sort: "전자 테스트/측정 장비",
      sort_url: "/products/test_measurement",
      category: [
        {
          name: "반도체 테스트",
          url_name: "/products/test_measurement/semiconductor_test",
        },
        {
          name: "무선통신 안테나",
          url_name: "/products/test_measurement/rf_antenna",
        },
        {
          name: "GNSS 시뮬레이션 테스트",
          url_name: "/products/test_measurement/gnss_simulation_testing",
        },
        {
          name: "테스트 소프트웨어",
          url_name: "/products/test_measurement/test_software",
        },
      ],
    },
    {
      sort: "머신 비전 및 광학 검사",
      sort_url: "/products/machine_vision_optical",
      category: [
        {
          name: "OCT 이미징",
          url_name: "/products/machine_vision_optical/oct_imaging",
        },
        {
          name: "차량용 비전",
          url_name: "/products/machine_vision_optical/automotive_vision",
        },
        {
          name: "반도체 광원(UV 광원)",
          url_name:
            "/products/machine_vision_optical/semiconductor_light_source",
        },
      ],
    },
    {
      sort: "자율주행 데이터 수집 및 시뮬레이션",
      sort_url: "/products/autonomous_driving",
      category: [
        {
          name: "시뮬레이션 테스트",
          url_name: "/products/autonomous_driving/simulation_test",
        },
        {
          name: "데이터 수집",
          url_name: "/products/autonomous_driving/data_collection",
        },
        {
          name: "데이터 처리",
          url_name: "/products/autonomous_driving/data_processing",
        },
      ],
    },
    {
      sort: "산업 IoT/산업 측정 장비",
      sort_url: "/products/iiot_measurement",
      category: [
        {
          name: "SCADA/MES 시스템",
          url_name: "/products/iiot_measurement/scada_mes_systems",
        },
        {
          name: "자동화 제어 장비/HMI",
          url_name:
            "/products/iiot_measurement/automation_comtrol_equipment_hml",
        },
        {
          name: "릴레이",
          url_name: "/products/iiot_measurement/relays",
        },
        {
          name: "산업용 트랜스미터 및 센서",
          url_name:
            "/products/iiot_measurement/industrial_transmitters_and_sensors",
        },
        {
          name: "온습도 기록계",
          url_name:
            "/products/iiot_measurement/temperature_and_humidity_data_loggers",
        },
        {
          name: "운송 충격 및 진동 기록계",
          url_name:
            "/products/iiot_measurement/transportation_shock_and_vibration_data_loggers",
        },
        {
          name: "다기능 데이터 로거",
          url_name: "/products/iiot_measurement/multi_function_data_loggers",
        },
        {
          name: "산업용 통신 장비/소프트웨어 솔루션",
          url_name:
            "/products/iiot_measurement/industrial_communication_equipment_software_solutions",
        },
      ],
    },
    {
      sort: "바이오메디컬 기기/장비",
      sort_url: "/products/biomedical",
      category: [
        {
          name: "마이크로플루이딕스",
          url_name: "/products/biomedical/microfluidics",
        },
        {
          name: "환경 모니터링 시스템",
          url_name: "/products/biomedical/environmental_monitoring_system",
        },
        {
          name: "실험실 장비",
          url_name: "/products/biomedical/laboratory_equipment",
        },
      ],
    },
    {
      sort: "네트워크 보안",
      sort_url: "/products/network_security",
      category: [
        {
          name: "보안 및 컴플라이언스",
          url_name: "/products/network_security/security_and_compliance",
        },
        {
          name: "비즈니스 인텔리전스",
          url_name: "/products/network_security/business_intelligence",
        },
        {
          name: "데이터 저장소",
          url_name: "/products/network_security/data_storage",
        },
        {
          name: "소프트웨어 개발",
          url_name: "/products/network_security/software_development",
        },
        {
          name: "DevSecOps",
          url_name: "/products/network_security/devsecops",
        },
      ],
    },
    {
      sort: "산업용 AR",
      sort_url: "/products/industrial_ar",
      category: [
        {
          name: "스마트 AR 안경",
          url_name: "/products/industrial_ar/smart_ar_glasses",
        },
      ],
    },
  ];

  return (
    <Wrap>
      <div className="top_wrap">
        <div className="top_left_wrap">
          <Link href={"/"} className="logo">
            <Image
              src="/logo_2.png"
              alt="로고"
              width={150}
              height={100}
              layout="responsive"
            />
          </Link>
          <address>
            <p>
              <span className="address_name">E-mail</span>
              <span className="address_detail">info@haehongtec.com</span>
            </p>
            <p>
              <span className="address_name">Tel</span>
              <span className="address_detail">02-6287-8556</span>
            </p>
            <p>
              <span className="address_name">Fax</span>
              <span className="address_detail">02-6287-8557</span>
            </p>
            <p>
              <span className="address_name">Address</span>
              <span className="address_detail">
                서울 강동구 고덕비즈밸리로 26, B동, 1013호
              </span>
            </p>
          </address>
        </div>
        <div className="top_right_wrap">
          <nav className="links">
            <ul>
              <li>
                <Link href={"#"}>
                  <FontAwesomeIcon icon={faYoutube} aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <div className="naver" aria-hidden="true">
                    N
                  </div>
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <FontAwesomeIcon icon={faSquareInstagram} />
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <FontAwesomeIcon icon={faSquareFacebook} />
                </Link>
              </li>
            </ul>
          </nav>
          <small className="copy_right">
            ©2025. HaeHong. All Rights Reserved.
          </small>
        </div>
      </div>
      <nav className="page_nav">
        <ul className="sort_wrap">
          {footer_data.map((sort, index) => (
            <li key={index} className="sort">
              <Link href={sort.sort_url}>{sort.sort}</Link>
              <ul className="category_wrap">
                {sort.category.map((cat, index) => (
                  <li key={index} className="category">
                    <Link href={cat.url_name}>{cat.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </Wrap>
  );
};

export default Footer;
