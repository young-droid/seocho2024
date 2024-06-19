// 다음 코드가 오류가 나지 않도록 수정하시오.
// 단, itemPrices의 item에는 재고(stock)에 있는 item들만 가능합니다.

type Item = { item: string; price: number };
type ItemPrice<ITEM, STOCK> = {
  [k in keyof ITEM]: k extends 'item' ? keyof STOCK : ITEM[k];
};

// type ItemPriceX<T, U> = {
//   item: keyof typeof T;
//   price: number;
// };

const stock = { X: 1, Y: 2, Z: 30 };

const itemPrices: ItemPrice<Item, typeof stock>[] = [
  { item: 'X', price: 1000 },
  { item: 'Y', price: 2000 },
  { item: 'Z', price: 3000 },
];

const total = itemPrices.reduce(
  (curr, itemPrice) => curr + stock[itemPrice.item] * itemPrice.price,
  0
);
console.log('🚀 ~ total:', total);
