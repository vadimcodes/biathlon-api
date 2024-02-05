function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <h1 className="visually-hidden">
          Интернет-магазин снаряжения и экипировки для зимних видов спорта
        </h1>
        <picture>
          <source srcSet="img/hero.webp" type="image/webp" />
          <img
            loading="lazy"
            src="img/hero.png"
            className="image"
            width="1200"
            height="327"
            alt="Баннер со сноубордистом"
          />
        </picture>
      </div>
    </div>
  );
}

export default Hero;
