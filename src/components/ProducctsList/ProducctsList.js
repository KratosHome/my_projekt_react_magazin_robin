import React from "react";
import ProducctsListItem from "./ProducctsListItem";
import productsArray from "./productsArray";

const ProducctsList = () => {
  return (
    <>
      {productsArray.map(({ id, category, name, img, price, content }) => (
        <ProducctsListItem
          key={id}
          category={category}
          name={name}
          img={img}
          price={price}
          content={content}
        />
      ))}
    </>
  );
};

export default ProducctsList;
