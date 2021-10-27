const productsArray = [
  {
    id: 1,
    category: "вафля соленая",
    name: "сэндвич с салями",
    img: "/images/wafl_colbasl.png",
    price: 69,
    content: "салями, сыр Голландский, огурец, помидор, лист салата",
    bestList: "bestList",
  },
  {
    id: 2,
    category: "вафля соленая",
    name: "WAFFLE CHEESE",
    img: "/images/WAFFLE-CHEESE.png",
    price: 99,
    content: "камамбер, куриное филе, крем сыр, помидор, груша, листья салата",
    bestList: "bestList",
  },
  {
    id: 3,
    category: "вафля соленая",
    name: "4 Сыра",
    img: "/images/four_cheeses.png",
    price: 59,
    content: "Сыр горгонзола, Моцарелла, Сир Голландський",
  },
  {
    id: 4,
    category: "вафля соленая",
    name: "Вафля с Лососем",
    img: "/images/Waffle_with_Salmon.png",
    price: 97,
    content: "Лосось, Огірок, Кунжут, Сырный соус, Соус унаги",
  },
  {
    id: 5,
    category: "вафля соленая",
    name: "Вафля с балыком",
    img: "/images/Waffle_balyk.png",
    price: 68,
    content: "Балык, Лист салату, Помидор, Огурец, Сир Голландський",
  },
  {
    id: 6,
    category: "вафля соленая",
    name: "Чизбургер",
    img: "/images/Cheeseburger.png",
    price: 79,
    content:
      "Котлета, Сир Голландський, Лист салату, Помидо, Маринованый оргурец, Сметанный соус ",
  },
  {
    id: 7,
    category: "вафля соленая",
    name: "Дабл-Чизбургер",
    img: "/images/Cheeseburger.png",
    price: 94,
    content:
      "Котлета, Сир Голландський, Лист салату, Помидо, Маринованый оргурец, Сметанный соус ",
  },
  {
    id: 8,
    category: "вафля соленая",
    name: "Сэндвич с куркой",
    img: "/images/Chicken_sandwich.png",
    price: 69,
    content:
      "Куриное филе, Сир Голландський, Лист салату, Ананас консервированый",
  },
  {
    id: 9,
    category: "вафля соленая",
    name: "Сендвич з куркою и баликом",
    img: "/images/sandwy_hammer_balik.png",
    price: 87,
    content:
      "Куриное филе, Балик, Сир Голландський, Лист салату, Ананас консервированый",
  },
  {
    id: 10,
    category: "вафля соленая",
    name: "Вафл-Дог",
    img: "/images/Waffle_Dog.png",
    price: 65,
    content:
      "Охотничья колбаска, Лист салата, Помидор, сир Голландський, Маринованный огурец, BBQ соус ",
  },
  {
    id: 11,
    category: "вафля сладкая",
    name: "Banana-Waffle",
    img: "/images/Banana-Waffle.png",
    price: 69,
    content: "Nutella, банан, сахарная пудра",
    bestList: "bestList",
  },
  {
    id: 12,
    category: "вафля сладкая",
    name: "Snickers-Waffle",
    img: "/images/Snickers-Waffle.png",
    price: 89,
    content: "Nutella, Snickers, Лесной орех, Печенька OREO",
    bestList: "bestList",
  },
  {
    id: 13,
    category: "вафля сладкая",
    name: "Вафля с пудрой",
    img: "/images/Waffl_ powdered_sugar.png",
    price: 29,
    content: "вафля, сахарная пудра",
  },
];

export const getProductsObject = (array) =>
  array.reduce(
    (objekt, product) => ({
      ...objekt,
      [product.id]: product,
      [product.price]: product,
    }),
    {}
  );

export default productsArray;
