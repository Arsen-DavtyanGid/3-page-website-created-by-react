import S1Section from "./S1Section";
import S1Box from "./S1Box";
import icon1 from "./images/s1icon1.svg";
import icon2 from "./images/s1icon2.svg";
import icon3 from "./images/s1icon3.svg";
import icon4 from "./images/s1icon4.svg";

function Section1() {
  return (
    <section className="Section1">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <S1Section
              icon={icon1}
              text="РЕАЛИЗУЕМ ПРОДУКЦИЮ В РОЗНИЦУ
И НА МАРКЕТПЛЕЙСАХ"
            />
          </div>
          <div className="col-lg-4">
            <S1Section
              icon={icon2}
              text="ДЛЯ ОПТОВОГО КАТАЛОГА ОТОБРАЛИ ТОВАРЫ,
ПОЛЬЗУЮЩИЕСЯ НАИБОЛЬШИМ УСПЕХОМ"
            />
          </div>
          <div className="col-lg-4">
            <S1Section
              icon={icon3}
              text="МАРЖИНАЛЬНЫЙ ПРОДУКТ .
ВАША НАЦЕНКА СОСТАВЛЯЕТ
ОТ 200% до 400% "
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="section1-left-part">
              <div className="section1-left-part-texts">
                <div className="section1-left-part-text1">Брелоки - ленты</div>
                <div className="section1-left-part-text2">
                  Свечи с ароматными сюжетами!
                </div>
              </div>
              <div className="section1-left-part-icon">
                <img src={icon4} alt="icon" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="container s1con">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <S1Box
                    text1="Акриловые фигурки"
                    text2="Зажигай, чтоб горело ясно!"
                  />
                </div>
                <div className="col-lg-6 col-md-6">
                  <S1Box
                    text1="Акриловые брелоки"
                    text2="Зажигай, чтоб горело ясно!"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <S1Box
                    text1="Карточки"
                    text2="Всего, да побольше для тех, кто не смог определиться."
                  />
                </div>
                <div className="col-lg-6 col-md-6">
                  <S1Box text1="Постеры" text2="Для самых любимых!" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section1;
