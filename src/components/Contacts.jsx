function Contacts() {
  return (
    <section className="contacts">
      <div className="container">
        <div className="contacts__up">
          <h2 className="contacts__title title">Наши контакты</h2>
          <p className="contacts__descr descr">
            Наши менеджеры ответят на любые интересующие вас вопросы
          </p>
        </div>
        <div className="contacts__content grid">
          <div className="contacts__info">
            <ul className="contacts__list list-reset">
              <li className="contacts__item">
                <span className="contacts__condition">
                  <svg className="icon">
                    <use xlinkHref="img/sprite.svg#map"></use>
                  </svg>
                  Адрес магазина:
                </span>
                <address className="contacts__value">г. Казань</address>
              </li>
              <li className="contacts__item">
                <span className="contacts__condition">
                  <svg className="icon">
                    <use xlinkHref="img/sprite.svg#clock"></use>
                  </svg>
                  График работы:
                </span>
                <p className="contacts__value">Ежедневно с 8:00 до 20:00</p>
              </li>
              <li className="contacts__item">
                <span className="contacts__condition">
                  <svg className="icon">
                    <use xlinkHref="img/sprite.svg#phone"></use>
                  </svg>
                  Телефон:
                </span>
                <ul className="contacts__choice contacts-choice list-reset">
                  <li className="contacts-choice">
                    <a className="contacts-choice__link" href="tel:+79999999999">
                      +7 999 999 99 99
                    </a>
                  </li>
                  <li className="contacts-choice">
                    <a
                      className="contacts-choice__whatsapp"
                      target="_blank"
                      href="https://wa.me/+79999999999"
                      rel="noreferrer">
                      <svg className="icon">
                        <use xlinkHref="img/sprite.svg#whatsapp"></use>
                      </svg>
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </li>
              <li className="contacts__item">
                <span className="contacts__condition">
                  <svg className="icon">
                    <use xlinkHref="img/sprite.svg#mail"></use>
                  </svg>
                  Электронная почта:
                </span>
                <a className="contacts__value" href="mailto:+79999999999@yandex.ru">
                  +79999999999@yandex.ru
                </a>
              </li>
            </ul>
          </div>
          <div className="maps" id="map"></div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
