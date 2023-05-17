import vk from "./images/vk.svg";
import tel from "./images/telegram.svg";

function FAQ(props) {
  function x() {
    let el = document.querySelector(".p2");
    let ic = document.getElementById("iconn");
    ic.classList.toggle("ccc");
    el.classList.toggle("bbb");
  }
  return (
    <section className="Section2">
      <div className="container">
        <div className="row">
          <div className="faq-text">Назад / FAQ</div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="section2-text1">Ответы на вопросы</div>
            <div className="section2-text2-flex">
              <div className="section2-text2">
                Если Вы не нашли ответ на интересующий Вас вопрос, то обратитесь
                к нам на прямую
              </div>
            </div>
            <div className="media">
              <div className="media-icons">
                <a href="#">
                  <img src={tel} alt="telegram" />
                </a>
                <a href="#">
                  <img src={vk} alt="vk" />
                </a>
              </div>
              <div className="meadia-text">или</div>
              <div className="media-gmail">
                <a href="#">info@stickers.one</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="section2-content">
              <p className="p1">{props.text3}</p>
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="iconn"
                onClick={x}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 0.75C12.5178 0.75 12.9375 1.16973 12.9375 1.6875V11.0625H22.3125C22.8303 11.0625 23.25 11.4822 23.25 12C23.25 12.5178 22.8303 12.9375 22.3125 12.9375H12.9375V22.3125C12.9375 22.8303 12.5178 23.25 12 23.25C11.4822 23.25 11.0625 22.8303 11.0625 22.3125V12.9375H1.6875C1.16973 12.9375 0.75 12.5178 0.75 12C0.75 11.4822 1.16973 11.0625 1.6875 11.0625H11.0625V1.6875C11.0625 1.16973 11.4822 0.75 12 0.75Z"
                  fill="#F78C54"
                />
              </svg>
              <p className="p2 first-p1">
                Да, от 10 штук. День рождения, корпоратив, свадьба или другое
                мероприятие? Сделаем индивидуальный дизайн под твое событие.
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="section2-content">
              <p className="p1">{props.text2}</p>
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 0.75C12.5178 0.75 12.9375 1.16973 12.9375 1.6875V11.0625H22.3125C22.8303 11.0625 23.25 11.4822 23.25 12C23.25 12.5178 22.8303 12.9375 22.3125 12.9375H12.9375V22.3125C12.9375 22.8303 12.5178 23.25 12 23.25C11.4822 23.25 11.0625 22.8303 11.0625 22.3125V12.9375H1.6875C1.16973 12.9375 0.75 12.5178 0.75 12C0.75 11.4822 1.16973 11.0625 1.6875 11.0625H11.0625V1.6875C11.0625 1.16973 11.4822 0.75 12 0.75Z"
                  fill="#F78C54"
                />
              </svg>
              <p className="p2"></p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="section2-content">
              <p className="p1">{props.text1}</p>
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 0.75C12.5178 0.75 12.9375 1.16973 12.9375 1.6875V11.0625H22.3125C22.8303 11.0625 23.25 11.4822 23.25 12C23.25 12.5178 22.8303 12.9375 22.3125 12.9375H12.9375V22.3125C12.9375 22.8303 12.5178 23.25 12 23.25C11.4822 23.25 11.0625 22.8303 11.0625 22.3125V12.9375H1.6875C1.16973 12.9375 0.75 12.5178 0.75 12C0.75 11.4822 1.16973 11.0625 1.6875 11.0625H11.0625V1.6875C11.0625 1.16973 11.4822 0.75 12 0.75Z"
                  fill="#F78C54"
                />
              </svg>
              <p className="p2"></p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="section2-content">
              <p className="p1">{props.text4}</p>
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 0.75C12.5178 0.75 12.9375 1.16973 12.9375 1.6875V11.0625H22.3125C22.8303 11.0625 23.25 11.4822 23.25 12C23.25 12.5178 22.8303 12.9375 22.3125 12.9375H12.9375V22.3125C12.9375 22.8303 12.5178 23.25 12 23.25C11.4822 23.25 11.0625 22.8303 11.0625 22.3125V12.9375H1.6875C1.16973 12.9375 0.75 12.5178 0.75 12C0.75 11.4822 1.16973 11.0625 1.6875 11.0625H11.0625V1.6875C11.0625 1.16973 11.4822 0.75 12 0.75Z"
                  fill="#F78C54"
                />
              </svg>
              <p className="p2"></p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="section2-content">
              <p className="p1">{props.text5}</p>
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 0.75C12.5178 0.75 12.9375 1.16973 12.9375 1.6875V11.0625H22.3125C22.8303 11.0625 23.25 11.4822 23.25 12C23.25 12.5178 22.8303 12.9375 22.3125 12.9375H12.9375V22.3125C12.9375 22.8303 12.5178 23.25 12 23.25C11.4822 23.25 11.0625 22.8303 11.0625 22.3125V12.9375H1.6875C1.16973 12.9375 0.75 12.5178 0.75 12C0.75 11.4822 1.16973 11.0625 1.6875 11.0625H11.0625V1.6875C11.0625 1.16973 11.4822 0.75 12 0.75Z"
                  fill="#F78C54"
                />
              </svg>
              <p className="p2"></p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="section2-content">
              <p className="p1">{props.text6}</p>
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 0.75C12.5178 0.75 12.9375 1.16973 12.9375 1.6875V11.0625H22.3125C22.8303 11.0625 23.25 11.4822 23.25 12C23.25 12.5178 22.8303 12.9375 22.3125 12.9375H12.9375V22.3125C12.9375 22.8303 12.5178 23.25 12 23.25C11.4822 23.25 11.0625 22.8303 11.0625 22.3125V12.9375H1.6875C1.16973 12.9375 0.75 12.5178 0.75 12C0.75 11.4822 1.16973 11.0625 1.6875 11.0625H11.0625V1.6875C11.0625 1.16973 11.4822 0.75 12 0.75Z"
                  fill="#F78C54"
                />
              </svg>
              <p className="p2"></p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="section2-content">
              <p className="p1">{props.text7}</p>
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 0.75C12.5178 0.75 12.9375 1.16973 12.9375 1.6875V11.0625H22.3125C22.8303 11.0625 23.25 11.4822 23.25 12C23.25 12.5178 22.8303 12.9375 22.3125 12.9375H12.9375V22.3125C12.9375 22.8303 12.5178 23.25 12 23.25C11.4822 23.25 11.0625 22.8303 11.0625 22.3125V12.9375H1.6875C1.16973 12.9375 0.75 12.5178 0.75 12C0.75 11.4822 1.16973 11.0625 1.6875 11.0625H11.0625V1.6875C11.0625 1.16973 11.4822 0.75 12 0.75Z"
                  fill="#F78C54"
                />
              </svg>
              <p className="p2"></p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="section2-content">
              <p className="p1">{props.text8}</p>
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 0.75C12.5178 0.75 12.9375 1.16973 12.9375 1.6875V11.0625H22.3125C22.8303 11.0625 23.25 11.4822 23.25 12C23.25 12.5178 22.8303 12.9375 22.3125 12.9375H12.9375V22.3125C12.9375 22.8303 12.5178 23.25 12 23.25C11.4822 23.25 11.0625 22.8303 11.0625 22.3125V12.9375H1.6875C1.16973 12.9375 0.75 12.5178 0.75 12C0.75 11.4822 1.16973 11.0625 1.6875 11.0625H11.0625V1.6875C11.0625 1.16973 11.4822 0.75 12 0.75Z"
                  fill="#F78C54"
                />
              </svg>
              <p className="p2"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default FAQ;
