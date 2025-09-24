import styled from "styled-components";
import ArticleWrap from "./ArticleWrap";

const Wrap = styled.section`
  position: relative;
  z-index: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(var(--pri-color-100), var(--ter-color-100));
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media (max-width: 1024px) {
    height: 600px;
  }
  @media (max-width: 768px) {
    height: 500px;
  }
  @media (max-width: 480px) {
    height: 300px;
  }
`;

const Banner = () => {
  return (
    <Wrap>
      <ArticleWrap></ArticleWrap>
    </Wrap>
  );
};

export default Banner;
