import Image from "next/image";
import styled from "styled-components";

const Wrap = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  overflow: hidden;
  padding-top: 200px;
  .logo_container {
    position: relative;
    z-index: 0;
    width: 100%;
    height: 100px;
    overflow: hidden;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    background: linear-gradient(
      90deg,
      var(--sec-color-200),
      var(--pri-color-200),
      var(--ter-color-200)
    );
    .move_wrap {
      position: relative;
      z-index: 0;
      display: flex;
      align-items: center;
      height: 50px;
      animation: slide 100s linear infinite;

      &:hover {
        animation-play-state: paused;
      }
      .logo {
        height: 100%;
        width: auto;
        padding: 0 50px;
        img {
            height: 50px;
            width: auto;
        }
      }
    }
  }

  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  @media (max-width: 1024px) {
    padding-top: 150px;
  }
  @media (max-width: 768px) {
    padding-top: 120px;
    .logo_container{
        height: 50px;
        .move_wrap {
            height: 25px;
            .logo {
                padding: 0 25px;
                img {
                    height: 25px;
                    width: auto;
                }
            }
        }
    }
  }
  @media (max-width: 480px) {
    padding-top: 100px;
  }
`;

const LogosWrap = () => {
  const logos: number[] = Array.from({ length: 47 }, (_, i) => i + 1);

  return (
    <Wrap aria-hidden="true">
      <div className="logo_container" aria-hidden="true">
        <div className="move_wrap" aria-hidden="true">
          {logos.map((num) => (
            <div className="logo" key={`first-${num}`}>
              <Image
                src={`/logos/${num}.png`}
                height={50}
                width={0}
                sizes="100vw"
                alt="logos"
              />
            </div>
          ))}
          {logos.map((num) => (
            <div className="logo" key={`second-${num}`}>
              <Image
                src={`/logos/${num}.png`}
                height={50}
                width={0}
                sizes="100vw"
                alt="logos"
              />
            </div>
          ))}
        </div>
      </div>
    </Wrap>
  );
};

export default LogosWrap;
