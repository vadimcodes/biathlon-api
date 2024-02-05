import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import OrderDetails from '../components/OrderDetails';

const Order = () => {
  // const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  return (
    <section className="order">
      <div className="container">
        <h2 className="order__title title">Оформление заказа</h2>
        <div className="order__body grid">
          <div className="order__data">
            <form className="form" action="">
              <h3 className="form__title">Контактные данные</h3>
              <ul className="form__list list-reset grid order-block">
                <li className="form__items">
                  <label className="form__items">
                    <input className="form__input input-reset" type="text" placeholder="Имя" />
                  </label>
                </li>
                <li className="form__items">
                  <label className="form__items">
                    <input className="form__input input-reset" type="text" placeholder="Фамилия" />
                  </label>
                </li>
                <li className="form__items">
                  <label className="form__items">
                    <input className="form__input input-reset" type="tel" placeholder="Телефон" />
                  </label>
                </li>
                <li className="form__items">
                  <label className="form__items">
                    <input
                      className="form__input input-reset"
                      type="email"
                      placeholder="Электронная почта"
                    />
                  </label>
                </li>
                <span className="form__text">
                  Данные необходимы для курьера и сообщений об изменениях статуса вашего заказа
                </span>
              </ul>
              <h3 className="form__title">Выберите способ получения</h3>
              <div className="form__method order-block">
                <div className="form__method-selection grid">
                  <div className="form__method-choice">
                    <div className="form__method-btn">
                      <label className="form__method-label">
                        <input
                          className="form__method-input"
                          id="deliveryInput"
                          type="radio"
                          name="delivery"
                          checked
                        />
                        <span>Доставка</span>
                      </label>
                    </div>

                    <p className="form__text">
                      Доставка по всей территории России осуществляется транспортными компаниями
                    </p>
                  </div>
                  <div className="form__method-choice">
                    <div className="form__method-btn">
                      <label className="form__method-label">
                        <input className="form__method-input" type="radio" name="delivery" />
                        <span>Самовывоз</span>
                      </label>
                    </div>
                    <address className="form__text">
                      Чувашская Республика, д. Сятракасы, ул. Придорожная д. 3А, магазин Биатлон
                    </address>
                  </div>
                </div>
              </div>
              <div className="form__delivery" id="deliveryBlock">
                <h3 className="form__title">Адрес доставки</h3>
                <ul className="form__list list-reset grid order-block">
                  <li className="form__items">
                    <label className="form__items">
                      <input
                        className="form__input input-reset"
                        type="number"
                        placeholder="Индекс"
                      />
                    </label>
                  </li>
                  <li className="form__items">
                    <label className="form__items">
                      <input
                        className="form__input input-reset"
                        type="text"
                        placeholder="Область и город"
                      />
                    </label>
                  </li>
                  <li className="form__items">
                    <label className="form__items">
                      <input className="form__input input-reset" type="text" placeholder="Улица" />
                    </label>
                  </li>
                  <li className="form__items">
                    <label className="form__items">
                      <input
                        className="form__input input-reset"
                        type="text"
                        placeholder="Дом, квартира"
                      />
                    </label>
                  </li>
                </ul>
              </div>
              <h3 className="form__title">Примечания к заказу</h3>
              <div className="form__notes order-block">
                <textarea
                  className="form__input form__textarea input-reset"
                  name="textarea"
                  id="comment"
                  rows="5"
                  placeholder="Примечания к вашему заказу, например, особые пожелания отделу доставки"></textarea>
              </div>
            </form>
          </div>

          {/* {items.map((item) => (
            
          ))} */}

          <OrderDetails key={items.id} {...items} />
        </div>
      </div>
    </section>
  );
};

export default Order;
