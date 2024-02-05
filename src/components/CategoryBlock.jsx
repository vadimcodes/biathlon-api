import React from 'react';
import axios from 'axios';
import CategoryBlockLink from './CategoryLink';

function CategoryBlock() {
  // пустой массив для хранения списка категорий
  const [items, setItems] = React.useState([]);

  // получение JSON со всеми объектами и передача данных в массив setCategory
  React.useEffect(() => {
    axios.get(`https://65304cd26c756603295e855d.mockapi.io/items?`).then((res) => {
      setItems(res.data);
      console.log(res.data);
    });
  }, []);

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
