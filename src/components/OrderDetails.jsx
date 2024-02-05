import React from 'react';
import { useSelector } from 'react-redux';

const OrderDetails = () => {
  const { totalPrice, items } = useSelector((state) => state.cart);
  // const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  console.log({ items });

  return (
    <div className="order__detail detail">
      <h3 className="detail__title">Ваш заказ</h3>

      <ul className="detail__order list-reset order-block">
        {items.map((obj) => (
          <li className="detail__item">
            <span className="detail__property">
              {obj.title}
              <span className="detail__text-count"> x{obj.count}</span>
            </span>
            <span className="detail__value">{obj.count * obj.price}</span>
          </li>
        ))}
      </ul>
      <div className="detail__method order-block">
        <span className="detail__property">Способ получения</span>
        <span className="detail__value">Доставка</span>
      </div>
      <div className="total order-block">
        <div className="total__price">
          <span className="total__property">Итого:</span>
          <span className="total__value">{totalPrice} ₽</span>
        </div>
        <button type="submit" className="total__send btn-reset">
          Оформить заказ
        </button>
        <span className="total__descr">
          После оформления наш менеджер свяжется с вами для подтверждения заказа
        </span>
      </div>
    </div>
  );
};

export default OrderDetails;
