import { React } from "react";
import ProducctsListItem from "./ProducctsListItem";
import productsArray from "./productsArray";

const ProducctsList = () => {
  return (
    <>
      {productsArray.map(
        ({ id, category, name, img, price, content, bestListTrue, pageId }) => (
          <ProducctsListItem
            key={id}
            id={id}
            pageId={pageId}
            category={category}
            name={name}
            img={img}
            price={price}
            content={content}
            bestListTrue={bestListTrue}
          />
        )
      )}
    </>
  );
};
export const ProducctsListBestList = () => {
  return (
    <>
      {productsArray
        .filter((item) => item.bestList === "bestList")
        .map(
          ({
            id,
            category,
            name,
            img,
            price,
            content,
            bestListTrue,
            pageId,
          }) => (
            <ProducctsListItem
              key={id}
              id={id}
              category={category}
              name={name}
              img={img}
              price={price}
              content={content}
              bestListTrue={bestListTrue}
              pageId={pageId}
            />
          )
        )}
    </>
  );
};

export default ProducctsList;
