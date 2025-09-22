import TestWrap from "@/components/TestWrap";
import { product_data } from "@/data/product_data";
import { GetStaticPropsContext } from "next";

interface SortPorps {
  sortName: string | null;
}

export async function getStaticPaths() {
  const paths = product_data.map((data) => ({
    params: { sort: data.url_name },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { sort } = context.params as { sort: string };

  const foundProduct = product_data.find((data) => data.url_name === sort);
  const sortName = foundProduct ? foundProduct.name : null;

  return {
    props: {
      sortName,
    },
  };
}

const Sort = ({ sortName }: SortPorps) => {
  return <TestWrap>{sortName}</TestWrap>;
};

export default Sort;
