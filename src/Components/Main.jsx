import { Link } from "react-router-dom";
import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";

function Main() {
  return (
    <main>
      <Link to="/"></Link>
      <Header />
      <Section1 />
      <Section2
        text1="МОГУ ЛИ Я ОТМЕНИТЬ ЗАКАЗ?"
        text2="МОГУ ЛИ Я ВЕРНУТЬ ТОВАР?"
        text3="ВЫ ДЕЛАЕТЕ СВЕЧИ НА ЗАКАЗ?"
        text4="ЧТО ДЕЛАТЬ, ЕСЛИ МНЕ НЕ ПРИШЕЛ ЗАКАЗ В УКАЗАННЫЙ СРОК?"
        text5="КАК ПРАВИЛЬНО УХАЖИВАТЬ ЗА СВЕЧАМИ?"
        text6="БЕЗОПАСНА ЛИ СВЕЧА?"
        text7="Я ЛЮБЛЮ ЗАЖИГАТЬ СВЕЧИ И МЕДИТИРОВАТЬ, МОГУ ЛИ Я НЕ ПЕРЕЖИВАТЬ ЗА ПОЖАРООПАСНОСТЬ?"
        text8="У МЕНЯ ЕСТЬ ИДЕЯ ДЛЯ ДИЗАЙНА СВЕЧИ — КУДА БЕЖАТЬ, КОМУ ПИСАТЬ?"
      />
    </main>
  );
}
export default Main;
