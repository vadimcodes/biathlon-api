import React from 'react';
import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
import { addItem, minusItem, removeItem } from '../redux/slices/cartSlice';

const CartItem = ({ id, title, price, totalPrice, count, imageUrl }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      }),
    );
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    dispatch(removeItem(id));
  };

  return (
    <li className="cart-add__item">
      <img className="cart-add__img" src={imageUrl} alt={title} />

      <h3 className="cart-add__title">{title}</h3>
      <div className="cart-add__couter card-couter">
        <button className="card-couter__btn card-couter__minus btn-reset" onClick={onClickMinus}>
          -
        </button>
        <span className="card-couter__value">{count}</span>
        <button className="card-couter__btn card-couter__plus btn-reset" onClick={onClickPlus}>
          +
        </button>
      </div>
      <p className="cart-add__price">{price * count} ₽</p>
      <button className="cart-add__delete btn-reset" onClick={onClickRemove}>
        Удалить
      </button>
    </li>
  );
};

export default CartItem;
