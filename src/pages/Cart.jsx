import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/CartItem';
import { clearItems } from '../redux/slices/cartSlice';
import CardEmpty from '../components/CardEmpty';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const onClickClear = () => {
    dispatch(clearItems());
  };

  if (!totalPrice) {
    return <CardEmpty />;
  }

  return (
    <section className="cart">
      <div className="container">
        <h2 className="cart__title title">Корзина</h2>
        <div className="cart__content grid">
          <div className="cart__info cart-add">
            <ul className="cart-add__list list-reset">
              {/* {items.map((item) => (
                <CartItem key={item.id} {...item} />
              ))} */}
              {items.map((item) => item.count > 0 && <CartItem key={item.id} {...item} />)}
            </ul>
          </div>
          <div className="cart__order cart-order">
            <h3 className="cart-order__title">Детали заказа:</h3>

            <div className="cart-order__total">
              <ul className="cart-order__list list-reset">
                <li className="cart-order__item">
                  <span className="cart-order__property">Cумма заказа:</span>
                  <span className="cart-order__value">{totalPrice} ₽</span>
                </li>
                <li className="cart-order__item">
                  <span className="cart-order__property">Количество:</span>
                  <span className="cart-order__value">{totalCount} шт.</span>
                </li>
              </ul>
            </div>
            <Link to="/order" className="cart-order__order">
              Перейти к оформлению
            </Link>
          </div>
        </div>
        <button to="/cart" className="cart-clear btn-reset" onClick={onClickClear}>
          Очистить всю корзину
        </button>
      </div>
    </section>
  );
};

export default Cart;
