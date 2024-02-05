function Conditions() {
  return (
    <section className="conditions">
      <div className="container conditions__container">
        <div className="conditions__up">
          <h2 className="conditions__title title">Условия получения</h2>
          <p className="conditions__descr descr">
            Дополнительные условия получения можно уточнить у менеджера при согласовании заказа
          </p>
        </div>
        <ul className="conditions__list conditions-list list-reset grid">
          <li className="conditions-list__item">
            <span className="conditions-list__title">
              <svg className="icon conditions__icon">
                <use xlinkHref="img/sprite.svg#box"></use>
              </svg>
              Самовывоз
            </span>
            <p className="conditions-list__descr">Самовывоз доступен по адресу:</p>
            <address className="conditions-list__address">г. Казань</address>
          </li>
          <li className="conditions-list__item">
            <span className="conditions-list__title">
              <svg className="icon conditions__icon">
                <use xlinkHref="img/sprite.svg#map"></use>
              </svg>
              Доставка
            </span>
            <p className="conditions-list__descr">
              Доставка по всей территории России осуществляется транспортными компаниями
            </p>
          </li>
          <li className="conditions-list__item">
            <span className="conditions-list__title">
              <svg className="icon conditions__icon">
                <use xlinkHref="img/sprite.svg#pay"></use>
              </svg>
              Оплата
            </span>
            <p className="conditions-list__descr">
              Оплата возможна: наличным и безналичным расчетом, наложенным платежом
            </p>
          </li>
          <li className="conditions-list__item">
            <span className="conditions-list__title">
              <svg className="icon conditions__icon">
                <use xlinkHref="img/sprite.svg#bag"></use>
              </svg>
              Сроки получения
            </span>
            <p className="conditions-list__descr">
              Самовывоз доступен в день заказа, сроки доставки зависят от расстояния до места
              получения
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Conditions;
