import TestWrap from "@/components/TestWrap";
import { product_data } from "@/data/product_data";
import { GetStaticPropsContext } from "next";

interface CategoryProps {
  categoryName: string | null;
}

export async function getStaticPaths() {
  const paths: { params: { sort: string; category: string } }[] = [];

  product_data.map((product_sort) =>
    product_sort.category.map((product_category) =>
      paths.push({
        params: {
          sort: product_sort.url_name,
          category: product_category.url_name,
        },
      })
    )
  );

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { sort, category } = context.params as {
    sort: string;
    category: string;
  };

  const foundSort = product_data.find((data) => data.url_name === sort);
  const founCategory = foundSort?.category.find(
    (data) => data.url_name === category
  );
  const categoryName = founCategory?.name;

  return {
    props: {
      categoryName,
    },
  };
}

const Category = ({ categoryName }: CategoryProps) => {
  return <TestWrap>{categoryName}</TestWrap>;
};

export default Category;
