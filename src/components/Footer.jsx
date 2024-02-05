function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content grid">
          <div className="footer__info">
            <a href="/" className="logo footer__logo">
              <img src="img/logo.svg" alt="Логотип компании" />
            </a>
            <p className="footer__descr">Снаряжение и экипировка для зимних видов спорта</p>
          </div>
          <ul className="footer__list footer-control grid list-reset">
            <li className="footer-control__item">
              <p className="footer-control__title">О нас</p>
              <ul className="footer-control__list-links list-reset">
                <li className="footer-control__list-item list-reset">
                  <a className="footer-control__list-link" href="/">
                    О нас
                  </a>
                </li>
                <li className="footer-control__list-item list-reset">
                  <a className="footer-control__list-link" href="/">
                    Доставка и оплата
                  </a>
                </li>
                <li className="footer-control__list-item list-reset">
                  <a className="footer-control__list-link" href="/">
                    Наши контакты
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer-control__item">
              <p className="footer-control__title">Покупателям</p>
              <ul className="footer-control__list-links list-reset">
                <li className="footer-control__list-item list-reset">
                  <a className="footer-control__list-link" href="/">
                    Политика конфеденциальности
                  </a>
                </li>
                <li className="footer-control__list-item list-reset">
                  <a className="footer-control__list-link" href="/">
                    Перейти в каталог товаров
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer-control__item">
              <p className="footer-control__title">Контакты</p>
              <ul className="footer-control__list-links list-reset">
                <li className="footer-control__list-item list-reset">
                  <a className="footer-control__list-link" href="tel:++79999999999">
                    +7 999 999 99 99
                  </a>
                </li>
                <li className="footer-control__list-item list-reset">
                  <a
                    className="footer-control__list-link"
                    target="_blank"
                    href="https://wa.me/+79999999999"
                    rel="noreferrer">
                    WhatsApp
                  </a>
                </li>
                <li className="footer-control__list-item list-reset">
                  <a className="footer-control__list-link" href="mailto:biathlon21@yandex.ru">
                    +79999999999@yandex.ru
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <small className="footer__copyright-text">© 2023 «Биатлон21»</small>
      </div>
    </footer>
  );
}

export default Footer;
