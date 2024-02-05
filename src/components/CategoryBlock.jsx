import React from 'react';
import axios from 'axios';
import CategoryBlockLink from './CategoryLink';

function CategoryBlock() {
  // пустой массив для хранения списка категорий
  const [items, setItems] = React.useState([]);

  // получение JSON со всеми объектами и передача данных в массив setCategory
  // React.useEffect(() => {
  //   axios.get(`https://65304cd26c756603295e855d.mockapi.io/items?`).then((res) => {
  //     setItems(res.data);
  //   });
  // }, []);

  // myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    app_client_id: '9262062619424724',
    app_secret: '160W0MGUMHCPCGRHLWRDJTXT',
    secret_key:
      '3FkpADtf3hRjlaxN47c2mXJcCQGbjB4TVFUGxZoPfxJeP75LrlfqoWJ5e4yEY9xYaj6dwY43srzwmE2WnsvprTltgcmAyiPtVyvMSxgEbYCoy0zWWahYDV',
    // Access-Control-Allow-Methods: GET, POST
    // Access-Control-Allow-Methods: *
  });

  var requestOptions = {
    method: 'POST',
    body: raw,
    redirect: 'follow',
  };
  React.useEffect(() => {
    fetch('https://online.sbis.ru/oauth/service/', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  });

  return (
    <section className="categories">
      <div className="container">
        <div className="categories__up">
          <h2 className="categories__title title">Категории товаров</h2>
          <p className="categories__descr descr">
            Мы предлагаем широкий ассортимент товаров для зимнего спорта и активного отдыха. В нашем
            магазине вы найдете все, что нужно для покорения снежных склонов, ледяных катков
            и морозных просторов
          </p>
        </div>
        <ul className="categories__list list-reset grid">
          {items.map((obj, i) => (
            <CategoryBlockLink key={i} hierarchicalParent={obj.hierarchicalParent} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CategoryBlock;
