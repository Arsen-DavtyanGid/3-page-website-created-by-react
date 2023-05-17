import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Pay from "./Components/Pay";
import FAQ from "./Components/FAQ";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="pay" element={<Pay />} />
        <Route
          path="faq"
          element={
            <FAQ
              text1="МОГУ ЛИ Я ОТМЕНИТЬ ЗАКАЗ?"
              text2="МОГУ ЛИ Я ВЕРНУТЬ ТОВАР?"
              text3="ВЫ ДЕЛАЕТЕ СВЕЧИ НА ЗАКАЗ?"
              text4="ЧТО ДЕЛАТЬ, ЕСЛИ МНЕ НЕ ПРИШЕЛ ЗАКАЗ В УКАЗАННЫЙ СРОК?"
              text5="КАК ПРАВИЛЬНО УХАЖИВАТЬ ЗА СВЕЧАМИ?"
              text6="БЕЗОПАСНА ЛИ СВЕЧА?"
              text7="Я ЛЮБЛЮ ЗАЖИГАТЬ СВЕЧИ И МЕДИТИРОВАТЬ, МОГУ ЛИ Я НЕ ПЕРЕЖИВАТЬ ЗА ПОЖАРООПАСНОСТЬ?"
              text8="У МЕНЯ ЕСТЬ ИДЕЯ ДЛЯ ДИЗАЙНА СВЕЧИ — КУДА БЕЖАТЬ, КОМУ ПИСАТЬ?"
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
