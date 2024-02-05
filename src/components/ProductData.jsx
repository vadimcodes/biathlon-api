import React from 'react';

function ProductData({
  id,
  title,
  hierarchicalParent,
  imageUrl,
  article,
  price,
  descr,
  attributes,
}) {
  const attrs = Object.entries(attributes);

  return (
    <>
      <h2 className="title product-cart__title">{title}</h2>
      <p>Категория товара: {hierarchicalParent}</p>
      <div className="product-cart__main grid">
        <div className="product-cart__slider">
          <div className="swiper product-cart__swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <picture>
                  <source srcSet={imageUrl} type="image/webp" />
                  <img
                    loading="lazy"
                    src={imageUrl}
                    className="image"
                    width="640"
                    height="480"
                    alt={imageUrl}
                  />
                </picture>
              </div>
              <div className="swiper-slide">
                <picture>
                  <source srcSet={imageUrl} type="image/webp" />
                  <img
                    loading="lazy"
                    src={imageUrl}
                    className="image"
                    width="640"
                    height="480"
                    alt={imageUrl}
                  />
                </picture>
              </div>
            </div>
          </div>
          <div className="swiper product-cart__mini">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <picture>
                  <source srcSet={imageUrl} type="image/webp" />
                  <img
                    loading="lazy"
                    src={imageUrl}
                    className="image"
                    width=""
                    height=""
                    alt="Изображение товара"
                  />
                </picture>
              </div>
              <div className="swiper-slide">
                <picture>
                  <source srcSet={imageUrl} type="image/webp" />
                  <img
                    loading="lazy"
                    src={imageUrl}
                    className="image"
                    width=""
                    height=""
                    alt="Изображение товара"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
        <div className="product-cart__info">
          <p className="product-cart__vendor">
            Артикул: <span> {article}</span>
          </p>
          <div className="product-cart__control">
            <p className="product-cart__price">
              {price}
              <span> руб.</span>
            </p>
            <button className="product-cart__add add-cart btn-reset">
              В корзину
              <svg className="icon product-cart-icon">
                <use xlinkHref="img/sprite.svg#basket"></use>
              </svg>
            </button>
          </div>
          <div className="accordion">
            <ul className="accordion__list list-reset">
              <li className="accordion__item">
                <button className="accordion__control btn-reset" aria-expanded="false">
                  <span className="accordion__title">Наши преимущества</span>
                  <svg className="icon accordion__icon">
                    <use xlinkHref="img/sprite.svg#plus"></use>
                  </svg>
                </button>
                <div className="accordion__content" aria-hidden="true">
                  Приятно, граждане, наблюдать, как базовые сценарии поведения пользователей
                  призывают нас к новым свершениям, которые, в свою очередь, должны быть указаны как
                  претенденты на роль ключевых факторов.
                </div>
              </li>
              <li className="accordion__item">
                <button className="accordion__control btn-reset" aria-expanded="false">
                  <span className="accordion__title">Условия доставки и самовывоза</span>
                  <svg className="icon accordion__icon">
                    <use xlinkHref="img/sprite.svg#plus"></use>
                  </svg>
                </button>
                <div className="accordion__content" aria-hidden="true">
                  Современные технологии достигли такого уровня, что постоянное
                  информационно-пропагандистское обеспечение нашей деятельности прекрасно подходит
                  для реализации форм воздействия.
                </div>
              </li>
              <li className="accordion__item">
                <button className="accordion__control btn-reset" aria-expanded="false">
                  <span className="accordion__title">Варианты оплаты</span>
                  <svg className="icon accordion__icon">
                    <use xlinkHref="img/sprite.svg#plus"></use>
                  </svg>
                </button>
                <div className="accordion__content" aria-hidden="true">
                  ответ
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="product-cart__specif">
        <h3 className="product-cart__descr">Информация о товаре</h3>
        <h3 className="product-cart__text">Характеристики</h3>
        <dl className="chars">
          {attrs.length > 0 ? (
            attrs.map((attr, idx) => (
              <div className="chars__item" key={idx}>
                <dt className="chars__term">{attr[0]}</dt>
                <dd className="chars__value">{attr[1]}</dd>
              </div>
            ))
          ) : (
            <div>Загрузка ...</div>
          )}
        </dl>
        <h3 className="product-cart__text">Описание</h3>
        <p className="product-cart__depiction">{descr}</p>
      </div>
    </>
  );
}

export default ProductData;
