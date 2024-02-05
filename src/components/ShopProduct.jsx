//
// СТРАНИЦА ОДНОГО ТОВАРА ДЛЯ МАГАЗИНА
//

import React from 'react';
import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';

function ShopProduct({ id, title, price, imageUrl, article, link, hierarchicalParent }) {
  const dispatch = useDispatch();

  // что передаем в корзину
  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
    };
    dispatch(addItem(item));
  };

  return (
    <div className="products__items">
      <div className="products__block">
        <Link to={`/product/${link}`}>
          <picture className="products__img">
            <source srcSet={imageUrl} type="image/webp" />
            <img src={imageUrl} className="image" width="259" height="194.25" alt={title} />
          </picture>
        </Link>
        <small>артикул: {article}</small>
        <Link className="products__link" to={`/product/${link}`}>
          <h4 className="products__title">{title}</h4>
        </Link>
        <p>категория - {hierarchicalParent}</p>
        <div className="products__bottom">
          <p className="products__price">
            {price} <span>руб.</span>
          </p>
          <button className="products__add btn-reset" onClick={onClickAdd}>
            В корзину
            <svg className="icon products__add-icon">
              <use xlinkHref="img/sprite.svg#basket"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopProduct;
