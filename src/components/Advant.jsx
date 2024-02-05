function Advant() {
  return (
    <div className="advant">
      <div className="container">
        <ul className="advant__content list-reset grid">
          <li className="advant__item">
            <span className="advant__title">
              <svg className="icon">
                <use xlinkHref="img/sprite.svg#list"></use>
              </svg>
              Широкий ассортимент товаров
            </span>
            <p className="advant__descr">
              Наш интернет-магазин предлагает товары для всех видов зимнего спорта, включая лыжи,
              сноуборды, коньки, снегоступы, одежду и аксессуары
            </p>
          </li>
          <li className="advant__item">
            <span className="advant__title">
              <svg className="icon">
                <use xlinkHref="img/sprite.svg#mess"></use>
              </svg>
              Профессиональная консультация
            </span>
            <p className="advant__descr">
              Наши менеджеры всегда готовы помочь вам с выбором товара и ответить на все
              интересующие вас вопросы
            </p>
          </li>
          <li className="advant__item">
            <span className="advant__title">
              <svg className="icon">
                <use xlinkHref="img/sprite.svg#box"></use>
              </svg>
              Быстрая доставка
            </span>
            <p className="advant__descr">
              Мы предлагаем быструю и надежную доставку по всей стране, а также возможность
              самовывоза из наших пунктов выдачи.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Advant;
