import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import CategoryBlockLink from './CategoryLink';
import { useSelector } from 'react-redux';

function Header() {
  // открытие списка категорий по кнопке Каталог к хэдере
  const [openCatalogList, setOpenCatalogList] = React.useState(false);
  // открытие контактов по кнопке Связаться с нами к хэдере
  const [openContactsList, setOpenContactsList] = React.useState(false);
  // пустой массив для хранения списка категорий
  const [categoryLink, setCategoryLink] = React.useState([]);

  // получаем JSON и передаем категории в пустой массив setCategory
  // React.useEffect(() => {
  //   fetch('https://65304cd26c756603295e855d.mockapi.io/items?')
  //     .then((res) => res.json())
  //     .then((arr) => {
  //       setCategoryLink(arr);
  //     });
  // }, []);

  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="header__content">
          <div className="header__control">
            <Link to="/" className="logo header__logo" aria-label="На главную">
              <img src="img/logo.svg" alt="Логотип компании" />
            </Link>
            <button
              className="header__catalog btn-reset"
              onClick={() => setOpenCatalogList(!openCatalogList)}>
              Каталог
              <svg className="icon header__catalog-icon">
                <use xlinkHref="img/sprite.svg#arrow"></use>
              </svg>
            </button>

            {openCatalogList && (
              <div className="main-categories">
                <div className="main-categories__main">
                  <ul className="main-categories__list list-reset">
                    {/* получаем ссылки на родительские категории */}
                    {categoryLink.map((obj, i) => (
                      <CategoryBlockLink key={i} hierarchicalParent={obj.hierarchicalParent} />
                    ))}
                    {/* <li></li> */}
                  </ul>
                </div>
                <div className="sub-categories">
                  <ul className="sub-categories__list list-reset">
                    <li className="sub-categories__item">
                      <a className="sub-categories__link" href="/">
                        под категория 1
                      </a>
                    </li>
                    <li className="sub-categories__item">
                      <a className="sub-categories__link" href="/">
                        под категория 2
                      </a>
                    </li>
                    <li className="sub-categories__item">
                      <a className="sub-categories__link" href="/">
                        под категория 3
                      </a>
                    </li>
                    <li className="sub-categories__item">
                      <a className="sub-categories__link" href="/">
                        под категория 4
                      </a>
                    </li>
                    <li className="sub-categories__item">
                      <a className="sub-categories__link" href="/">
                        под категория 5
                      </a>
                    </li>
                    <li className="sub-categories__item">
                      <a className="sub-categories__link" href="/">
                        под категория 6
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            <nav className="nav" title="Главная навигация">
              <ul className="nav__list list-reset">
                <li className="nav__item">
                  <NavLink className="nav__link" to="/about">
                    О нас
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink className="nav__link" to="/term">
                    Доставка и оплата
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink className="nav__link" to="/contacts">
                    Контакты
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink className="nav__link" to="/shop">
                    В магазин
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__info">
            <button
              className="header__contacts btn-reset"
              onClick={() => setOpenContactsList(!openContactsList)}>
              <svg className="icon header__contacts-icon">
                <use xlinkHref="img/sprite.svg#phone"></use>
              </svg>
              Связаться с нами
              <svg className="icon header__contacts-small-icon">
                <use xlinkHref="img/sprite.svg#small-arrow"></use>
              </svg>
            </button>
            {openContactsList && (
              <div className="header__contacts__drop contacts-drop">
                <ul className="contacts-drop__list list-reset">
                  <li className="contacts-drop__item">
                    <a className="contacts-drop__link" href="tel:+79999999999">
                      <svg className="icon contacts-drop__icon">
                        <use xlinkHref="img/sprite.svg#phone"></use>
                      </svg>
                      ++79999999999
                    </a>
                  </li>
                  <li className="contacts-drop__item">
                    <a className="contacts-drop__link" href="https://wa.me/+79999999999">
                      <svg className="icon contacts-drop__icon">
                        <use xlinkHref="img/sprite.svg#whatsapp"></use>
                      </svg>
                      Написать в WhatsApp
                    </a>
                  </li>
                  <li className="contacts-drop__item">
                    <a className="contacts-drop__link" href="mailto:biathlon21@yandex.ru">
                      <svg className="icon contacts-drop__icon">
                        <use xlinkHref="img/sprite.svg#mail"></use>
                      </svg>
                      +79999999999@yandex.ru
                    </a>
                  </li>
                </ul>
              </div>
            )}

            <Link className="header__basket" to="/cart" aria-label="В корзину">
              <svg className="icon header__backet-icon">
                <use xlinkHref="img/sprite.svg#basket"></use>
              </svg>
              <span className="header__basket-number">{totalCount}</span>
              <span className="header__basket-money">{totalPrice} ₽</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
