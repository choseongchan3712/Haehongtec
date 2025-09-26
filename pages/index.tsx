import Banner from "@/components/page/main/Banner";
import LongContents from "@/components/page/main/LongContents";
import OtherContents from "@/components/page/main/OtherContents";
import ProductContents from "@/components/page/main/ProductContents";
import SectionWrap from "@/components/page/main/SectionWrap";
import ShortContents from "@/components/page/main/ShortContents";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <SectionWrap title="해홍 제품소개">
        <ProductContents></ProductContents>
      </SectionWrap>
      <SectionWrap title="해홍 회사소식">
        <OtherContents>
          <ShortContents
            title="해홍 뉴스"
            url="/news"
            link="뉴스보기"
            background="var(--pri-color-100), var(--ter-color-100)"
          ></ShortContents>
          <ShortContents
            title="해홍 채용"
            url="/careers"
            link="채용보기"
            background="var(--sec-color-100), var(--pri-color-100)"
          ></ShortContents>
        </OtherContents>
      </SectionWrap>
      <SectionWrap title="해홍 소개">
        <OtherContents>
          <LongContents
            title="회사개요"
            url="/about"
            link="개요보기"
            background="var(--ter-color-100), var(--sec-color-100)"
          ></LongContents>
          <ShortContents
            title="사업장 안내"
            url="/location"
            link="안내보기"
            background="var(--pri-color-100), var(--ter-color-100)"
          ></ShortContents>
          <ShortContents
            title="CEO 인사말"
            url="/ceo_message"
            link="인사말 보기"
            background="var(--sec-color-100), var(--pri-color-100)"
          ></ShortContents>
        </OtherContents>
      </SectionWrap>
    </>
  );
}
