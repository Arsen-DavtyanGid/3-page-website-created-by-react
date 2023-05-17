import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import logobg from "./images/logo-burger.png";
import icon from "./images/icon-bg.svg";

function Nav() {
  function hiddenManu() {
    let el = document.querySelector(".manu-bar-mobile");
    el.classList.add("add");
  }
  function hidden() {
    let el = document.querySelector(".manu-bar-mobile");
    el.classList.remove("add");
  }
  return (
    <nav>
      <div className="manu-bar-mobile">
        <ul>
          <li>
            <a href="#">
              <img src={logobg} alt="logoburger" />
            </a>
          </li>
          <li>
            <a href="#">
              <div className="burger-icon">
                <div className="burger-text">Каталог</div>
                <div className="burger-ic">
                  <img src={icon} alt="icon-bg" />
                </div>
              </div>
            </a>
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
        <ul>
          <li className="about-us">О НАС</li>
          <li>
            <a href="#">
              <div className="burger-icon">
                <div className="burger-text-2">для клиента</div>
                <div className="burger-ic">
                  <img src={icon} alt="icon-bg" />
                </div>
              </div>
            </a>
          </li>
          <li>КОНТАКТЫ</li>
        </ul>
        <div className="manu-bar-x">
          <a href="#" onClick={hidden}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="24"
              viewBox="0 0 256 256"
            >
              <path
                fill="black"
                d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="nav-bg">
        <div className="container">
          <div className="row nav-row">
            <div className="col-lg-1 col-md-1 col-sm-1 col-4">
              <div className="nav-katalog">
                <div className="nav-katalog-icon">
                  <a href="#" onClick={hiddenManu}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.125 2.8125C1.125 1.88052 1.88052 1.125 2.8125 1.125L6.1875 1.125C7.11948 1.125 7.875 1.88052 7.875 2.8125V6.1875C7.875 7.11948 7.11948 7.875 6.1875 7.875H2.8125C1.88052 7.875 1.125 7.11948 1.125 6.1875L1.125 2.8125ZM10.125 2.8125C10.125 1.88052 10.8805 1.125 11.8125 1.125L15.1875 1.125C16.1195 1.125 16.875 1.88052 16.875 2.8125V6.1875C16.875 7.11948 16.1195 7.875 15.1875 7.875H11.8125C10.8805 7.875 10.125 7.11948 10.125 6.1875V2.8125ZM1.125 11.8125C1.125 10.8805 1.88052 10.125 2.8125 10.125H6.1875C7.11948 10.125 7.875 10.8805 7.875 11.8125V15.1875C7.875 16.1195 7.11948 16.875 6.1875 16.875H2.8125C1.88052 16.875 1.125 16.1195 1.125 15.1875L1.125 11.8125ZM10.125 11.8125C10.125 10.8805 10.8805 10.125 11.8125 10.125H15.1875C16.1195 10.125 16.875 10.8805 16.875 11.8125V15.1875C16.875 16.1195 16.1195 16.875 15.1875 16.875H11.8125C10.8805 16.875 10.125 16.1195 10.125 15.1875V11.8125Z"
                        fill="#F78C54"
                      />
                    </svg>
                  </a>
                </div>
                <div className="nav-katalog-text">каталог</div>
                <div id="hover-nav">
                  <ul>
                    <li>
                      <a href="/">все товары</a>
                    </li>
                    <li>
                      <a href="/">Брелоки-ленты</a>
                    </li>
                    <li>
                      <a href="/">акриловые фигурки</a>
                    </li>
                    <li>
                      <a href="/">акриловые брелоки</a>
                    </li>
                    <li>
                      <a href="/">Карточки</a>
                    </li>
                    <li>
                      <a href="/">постеры</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-1 col-sm-1 col-1">
              <div className="nav-links">
                <Link to="about">о нас</Link>
                <Link to="pay">ДОСТАВКА И ОПЛАТА</Link>
                <Link to="faq">f.a.q</Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-5 col-4">
              <nav className="nav-logo">
                <img src={logo} alt="logo" />
              </nav>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-5 col-0 last-col">
              <div className="nav-divs">
                <div className="nav-block"></div>
                <div className="nav-block"></div>
                <div className="nav-block" id="third"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
