import footerlogo from "./images/footerbg.svg";
import ficon1 from "./images/ficon1.svg";
import ficon2 from "./images/ficon2.svg";
import ficon3 from "./images/ficon3.svg";
import cards from "./images/cards.svg";
import foottel from "./images/foottel.svg";
import footvk from "./images/footvk.svg";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-logo">
              <img src={footerlogo} alt="logo" />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <div className="footer-sec2">
              <div className="footer-icon-sec">
                <div className="footer-icon">
                  <img src={ficon1} alt="ficon1" />
                </div>
                <div className="footer-icon-text">каталог</div>
              </div>
              <div className="footer-uls">
                <ul>
                  <li>
                    <a href="#">Все товары</a>
                  </li>
                  <li>
                    <a href="#">Брелоки-ленты</a>
                  </li>
                  <li>
                    <a href="#">Акриловые фигурки</a>
                  </li>
                  <li>
                    <a href="#">Акриловые брелоки</a>
                  </li>
                  <li>
                    <a href="#">Карточки</a>
                  </li>
                  <li>
                    <a href="#">Постеры</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <div className="footer-sec2">
              <div className="footer-icon-sec">
                <div className="footer-icon">
                  <img src={ficon2} alt="ficon1" />
                </div>
                <div className="footer-icon-text">для клиента</div>
              </div>
              <div className="footer-uls">
                <ul>
                  <li>
                    <a href="#">О нас</a>
                  </li>
                  <li>
                    <a href="#">Доставка и оплата</a>
                  </li>
                  <li>
                    <a href="#">Ответы на вопросы</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="footer-sec2 last-footsec">
              <div className="footer-icon-sec">
                <div className="footer-icon">
                  <img src={ficon3} alt="ficon1" />
                </div>
                <div className="footer-icon-text">контакты</div>
              </div>
              <div className="footer-uls last-ul">
                <ul>
                  <li>
                    <a href="#">+7 (123) 456 78 90</a>
                  </li>
                  <li>
                    <a href="#">Поможем с выбором</a>
                  </li>
                  <li>
                    <a href="#">info@bankai.market</a>
                  </li>
                </ul>
                <ul className="inn">
                  <p>реквизиты:</p>
                  <li>
                    <a href="#">Малыгина Елизавета Денисовна</a>
                  </li>
                  <li>
                    <a href="#">ИНН 772622335070</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer-row">
          <div className="col-lg-6 col-md-6 col-sm-4 col-12">
            <div className="footer-foot-text">© 2021 BANKAI</div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-4 col-12">
            <div className="cards">
              <img src={cards} alt="cards" />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-4 col-12">
            <div className="footer-media">
              <a href="#">
                <img src={foottel} alt="tele" />
              </a>
              <a href="#">
                <img src={footvk} alt="tele" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
