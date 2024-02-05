import React from 'react';
import { useParams } from 'react-router-dom';
import ShopProduct from '../components/ShopProduct';
import Sort from '../components/Sort';
import { useSelector } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
import Skeleton from '../components/Skeleton';
import Pagination from '../Pagination';
import axios from 'axios';

const ShopCategory = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);
  const { category } = useParams();
  const [items, setItems] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);

  // токен для сбис
  // 'X-SBISAccessToken':
  //         'WFZzNS0uUjoSVVwMiRbKENGXlZIZy9AWkIxKVg2RXNiaTBLcH5oPVRCeWNHSFM2QzAsXXZoUT5UbDJIaSQoMzIwMjMtMTEtMDggMTI6NTY6NTguMjE0MDE3',

  React.useEffect(() => {
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.replace('-', '');

    axios
      .get(
        `https://65304cd26c756603295e855d.mockapi.io/items?page=${currentPage}&limit=9&hierarchicalParent=${category}&sortBy=${sortBy}&order=${order}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [category, sortType, currentPage]);

  return (
    <main className="main">
      <section className="shop">
        <div className="container">
          <ul className="breadcrumbs list-reset">
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link" href="/test">
                Главная
              </a>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link" href="/test">
                тайл
              </a>
            </li>
          </ul>
          <h2 className="shop__title">{category} - категория товаров</h2>

          <Sort />

          <div className="shop__content grid">
            <div className="shop__chars">тут-будут-характеристики-товара</div>
            <div className="shop__products products grid">
              {isLoading
                ? [...new Array(9)].map((_, index) => <Skeleton key={index} />)
                : items.map((obj, i) => (
                    // <ShopProduct
                    //   key={i}
                    //   id={obj.id}
                    //   link={obj.id}
                    //   title={obj.title}
                    //   price={obj.price}
                    //   hierarchicalParent={obj.hierarchicalParent}
                    //   imageUrl={obj.imageUrl}
                    //   article={obj.article}
                    // />
                    <ShopProduct key={obj.i} {...obj} link={obj.id} />
                  ))}
            </div>
          </div>
          <Pagination onChangePage={(number) => setCurrentPage(number)} />
        </div>
      </section>
    </main>
  );
};

export default ShopCategory;
