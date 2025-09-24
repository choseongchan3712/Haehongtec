import Banner from "@/components/page/main/Banner";
import ProductContents from "@/components/page/main/ProductContents";
import SectionWrap from "@/components/page/main/SectionWrap";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <SectionWrap title="해홍 제품소개">
        <ProductContents></ProductContents>
      </SectionWrap>
      <SectionWrap title="해홍 회사소식">
        <></>
      </SectionWrap>
      <SectionWrap title="해홍 소개">
        <></>
      </SectionWrap>
    </>
  );
}
