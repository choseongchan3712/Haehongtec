import Link from "next/link";
import styled from "styled-components";

interface PropsType {
  title: string;
  url: string;
  link: string;
  background: string;
}

interface StyledProps {
  background: string;
}

const Wrap = styled.article<StyledProps>`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 50px;
  background: linear-gradient(${(props) => props.background});
  border-radius: 20px;
  .contents_title {
    font-size: var(--pc-h3-sz);
    font-weight: var(--pc-h3-wt);
    color: var(--pri-color-500);
  }
  .contents_link {
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
  @media (max-width: 1024px) {
    height: 250px;
    padding: 25px;
    .contents_title {
      font-size: var(--tab-h3-sz);
      font-weight: var(--tab-h3-wt);
    }
    .contents_link {
      padding: 8px 10px;
      border-radius: 8px;
      font-size: var(--tab-sub-sz);
      font-weight: var(--tab-sub-wt);
    }
  }
  @media (max-width: 768px) {
    border-radius: 0px;
    .contents_title {
      font-size: var(--mo-h3-sz);
      font-weight: var(--mo-h3-wt);
    }
    .contents_link {
      padding: 5px 8px;
      border-radius: 5px;
      font-size: var(--mo-sub-sz);
      font-weight: var(--mo-sub-wt);
    }
  }
  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const LongContents = ({ title, url, link, background }: PropsType) => {
  return (
    <Wrap background={background}>
      <h3 className="contents_title">{title}</h3>
      <Link href={url} className="contents_link">
        {link}
      </Link>
    </Wrap>
  );
};

export default LongContents;
