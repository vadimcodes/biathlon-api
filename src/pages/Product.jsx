import React from 'react';
import { useParams } from 'react-router-dom';
import ProductData from '../components/ProductData';

const Product = () => {
  const { id } = useParams();
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://65304cd26c756603295e855d.mockapi.io/items?id=${id}`)
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
      });
  }, [id]);

  return (
    <section className="product-cart">
      <div className="container">
        <h2>{id}</h2>
        <ul className="breadcrumbs list-reset">
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link" href="/test">
              Главная
            </a>
          </li>
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link" href="/test">
              тайтл
            </a>
          </li>
        </ul>
        {items.map((obj, i) => (
          <ProductData key={i} {...obj} />
        ))}
      </div>
    </section>
  );
};

export default Product;

// const chars = [
//   {
//     attributes: {
//       'Количество процессоров': '4',
//       'Архитектура, ARM': 'ARM',
//       'Монитор, дюймов': '14 дюймов',
//       'Диагональ монитора': '17 дюймов',
//     },
//   },
// ];

// наименование характеристики
// const nameChars = Object.keys(chars[0].attributes);
// console.log('наим характеритики', nameChars);
// значение характеристики
// const valueChars = Object.values(chars[0].attributes);
// console.log('значение характеритики', valueChars);
// // массив пар характеристик
// const arrChars = Object.entries(chars[0].attributes);
// console.log('массив пар', arrChars);
