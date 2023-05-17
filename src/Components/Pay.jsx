import payCar from "./images/pay-car.svg";
import cdek from "./images/cdek.svg";
import creditCard from "./images/credit-card.svg";
import creditCard2 from "./images/credit-card2.svg";
import secondicon from "./images/secondicon.svg";
import payVariant from "./images/payVariant.svg";

function Pay() {
  function hide() {
    let el1 = document.querySelector(".pay-last-content");
    let el3 = document.querySelector(".pay-right-part-content");
    let el4 = document.querySelector(".second-part-pay");
    let el2 = document.querySelector(".y");
    el1.classList.remove("ground");
    el3.classList.remove("ground");
    el2.classList.remove("ground2");
    el4.classList.remove("ground2");
  }
  function hide2() {
    let el1 = document.querySelector(".pay-last-content");
    let el3 = document.querySelector(".pay-right-part-content");
    let el4 = document.querySelector(".second-part-pay");
    let el2 = document.querySelector(".y");
    el1.classList.add("ground");
    el3.classList.add("ground");
    el2.classList.add("ground2");
    el4.classList.add("ground2");
  }
  return (
    <div className="pay">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="pay-text1">
              Главная /<span>Доставка и оплата</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="pay-text2">ДОСТАВКА И ОПЛАТА</div>
            <div className="pay-text3-flex">
              <div className="pay-text3">
                Здесь можно подробнее ознакомиться с условиями доставки и
                способов оплаты товара
              </div>
            </div>
          </div>
        </div>
        <div className="row pay-row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-6 pay-col">
            <div className="pay-links">
              <button className="pay-btn1" onClick={hide}>
                способ доставки
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-6 pay-col">
            <div className="pay-links">
              <button className="pay-btn2" onClick={hide2}>
                оплата
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="pay-last-content">
              <div className="pay-last-content-variant">
                <div className="pay-last-content-icon">
                  <img src={payCar} alt="car" />
                </div>
                <div className="pay-last-content-text">
                  СПОСОБЫ И СТОИМОСТЬ ДОСТАВКИ
                </div>
              </div>
              <div className="pay-last-content-cdek">
                <div className="pay-last-content-cdek-text">
                  ДОСТАВКА ОСУЩЕСТВЛЯЕТСЯ ИЗ ГОРОДА САНКТ-ПЕТЕРБУРГ КОМПАНИЕЙ
                  CDEK
                </div>
                <div className="pay-last-content-cdek-icon">
                  <img src={cdek} alt="cdek" />
                </div>
              </div>
              <div className="pay-last-content-text1">
                Заказы формируются к отправке в течение 3 рабочих дней после
                оформления на сайте.
              </div>
              <div className="pay-last-content-text1">
                После отправки заказа на указанный электронный адрес поступит
                трек-номер для его отслеживания.
              </div>
              <div className="pay-last-content-text1">
                Товар поставляется в заводской упаковке от производителя. при
                отправке товара клиентам мы дополнительно упаковываем товары в
                пупырку.
              </div>
            </div>
            <div className="y">
              <div className="second-pay-last-content">
                <div className="second-pay-last-content-flex">
                  <div className="second-pay-last-content-icon">
                    <img src={creditCard} alt="cc" />
                  </div>
                  <div className="second-pay-last-content-text">ОПЛАТА</div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="second-pay-last-content-col">
                        <div className="second-pay-last-content-col-icon">
                          <img src={secondicon} alt="si" />
                        </div>
                        <div className="second-pay-last-content-col-text1">
                          С расчетного счета
                        </div>
                        <div className="second-pay-last-content-col-text2">
                          При необходимости мы можем оформить заказ и
                          бухгалтерские документы на Ваше российское юридическое
                          лицо (ООО или АО) и ИП
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="second-pay-last-content-col">
                        <div className="second-pay-last-content-col-icon">
                          <img src={creditCard2} alt="cc2" />
                        </div>
                        <div className="second-pay-last-content-col-text1">
                          банковской карты
                        </div>
                        <div className="second-pay-last-content-col-text2">
                          Оплата банковской картой происходит через защищенный
                          сервис ЮKassa
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="pay-right-part-content">
              <div className="pay-right-part-content-flex">
                <div className="pay-right-part-content-text1">
                  СТОИМОСТЬ ДОСТАВКИ
                </div>
                <div className="pay-right-part-content-ul">
                  <ul>
                    По Санкт-Петербургу
                    <li>Доставка Yandex Go - 500 рублей</li>
                  </ul>
                </div>
                <div className="pay-right-part-content-ul">
                  <ul>
                    В другие города по России
                    <li>CDEK - от 500 рублей</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="second-part-pay">
              <div className="second-part-pay-text1">
                ФОРМИРОВАНИЕ И ОТПРАВКА ЗАКАЗОВ ОСУЩЕСТВЛЯЕТСЯ ТОЛЬКО ПО 100%
                ПРЕДОПЛАТЕ
              </div>
              <div className="second-part-pay-text2">
                Сервис PayAnyWay соответствует международному стандарту PCI DSS
                (Payment Card Industry Data Security Standard) Для защиты
                платежей со счетов банковских карт используются технологии
                3D-Secure от VISA и SecureCode от MasterCard. PayAnyWay не
                передает данные вашей карты магазину и третьим лицам.
              </div>
              <div className="second-part-pay-text3">
                В соответствии с ФЗ от 07.02.1992г. №2300-1 «О защите прав
                потребителей», в случае, если вам оказана услуга или реализован
                товар ненадлежащего качества, платеж может быть возвращен на
                банковскую карту, с которой производилась оплата. Порядок
                возврата денежных средств уточняйте у администратора
                интернет-магазина.
              </div>
              <div className="second-part-pay-text4">
                СПОСОБЫ ПРИЕМА ПЛАТЕЖЕЙ:
              </div>
              <div className="second-part-pay-img">
                <img src={payVariant} alt="variant" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pay;
