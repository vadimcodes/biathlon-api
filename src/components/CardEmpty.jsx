import React from 'react';
import { Link } from 'react-router-dom';
import cartEmpty from '../assets/img/empty-cart.png';

export const CardEmpty = () => {
  return (
    <>
      <section className="card-empty">
        <div className="container">
          <div className="card-empty__body">
            <h2 className="card-empty__title title">В вашей корзине пока пусто!</h2>
            <p className="card-empty__descr">
              Вы еще не добавили ничего в корзину, перейдите на главную страницу и познакомьтесь с
              нашим ассортиментом
            </p>
            <img src={cartEmpty} alt="Изображение пустой корзины" />
            <Link className="card-empty__link" to="/">
              Перейти к покупкам!
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardEmpty;
