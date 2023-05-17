import abouticon from "./images/about-icon.svg";

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="about-text1">
              Назад /<span>О нас</span>
            </div>
            <div className="about-text2">о нас</div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="about-left-part">
              <div className="about-left-part-chatgpt">
                <div className="about-left-part-icon">
                  <img src={abouticon} alt="icon" />
                </div>
                <div className="about-left-part-text">
                  К сожалению, мы не смогли придумать описание для нашего
                  магазина, поэтому решили поручить эту миссию ChatGPT, которая
                  сгенерировала нашу историю.
                </div>
              </div>
              <div className="about-div"></div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-right-part">
              <div className="about-right-part-text">
                Однажды, в маленьком городке по имени Акихабара, жил молодой
                парень по имени Юки. Он был большим поклонником аниме и мечтал
                открыть свой собственный магазин, где можно было бы купить все,
                что касается аниме.
              </div>
              <div className="about-right-part-text">
                Юки очень увлекался этой идеей и решил, что это будет его
                основной целью в жизни. Он начал изучать все о продаже и
                распространении аниме-товаров. Он собирал информацию, читал
                книги и смотрел видео о том, как создаются аниме-фильмы и манга.
              </div>
              <div className="about-right-part-text">
                Однажды Юки решил, что настало время открыть свой магазин. Он
                начал искать подходящее место и нашел небольшое помещение в
                центре города. Он назвал свой магазин "Bankai Anime Store" и
                начал заполнять его аниме-товарами.
              </div>
              <div className="about-right-part-text">
                Юки был очень счастлив, когда его магазин начал приносить ему
                прибыль. Он продавал все, что связано с аниме: фигурки, постеры,
                косплей-предметы и многое другое. Юки стал известен в городе как
                аниме-эксперт, и его магазин стал популярным среди
                аниме-фанатов.
              </div>
              <div className="about-right-part-text">
                Сегодня "Bankai Anime Store" является одним из самых популярных
                аниме-магазинов в городе. Он привлекает покупателей со всей
                страны, которые приходят, чтобы купить свои любимые
                аниме-товары. Юки счастлив, что его мечта стала реальностью, и
                он может делиться своей любовью к аниме со всем миром.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
