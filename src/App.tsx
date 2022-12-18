import React from 'react';
import logo from './logo.svg';
import './App.css';
import kartinkaimg from './assets/img/слайдер 1  картинка 2.png';
import img1 from './assets/img/Rectangle 19.png';
import img2 from './assets/img/Rectangle 24.png';
import img3 from './assets/img/kisspng-flight-hot-air-balloon-computerФІМП-icons-aerostat-5afe08ad4b2f92 1.png';

function App() {
  return (
    <main>

        <section>
            <div className="fairytale">


                <h1>Fairy tail</h1>
                <h4>Сказочная страна чудес</h4>

                <div className="fairytale-slider">
                    <div className="slider">
                        <div className="slide">
                            <img
                              src={kartinkaimg}
                              alt=""
                            />
                          </div>
                    
                          <div className="slide">
                            <img src={img1} alt="" />
                          </div>
                    
                          
                    
                    
                          <button className="btn btn-next"><i className="fa-solid fa-chevron-right"></i></button>
                          <button className="btn btn-prev"><i className="fa-solid fa-angle-left"></i></button>
                    </div>
    
                    <div className="fairytale-text">
                        <p>Каппадокия - сказочная страна воздушных шаров, сырных домиков, разноцветных долин и волшебных рассветов! 
                            Сюда приезжают, чтобы увидеть природные чудеса, полетать на воздушном шаре и конечно же сделать миллион красивых фотографий! </p>
        
                            <p>Участников тура ждёт профессиональная фотосессия от лучших фотографов Каппадокии!
                                Ведь именно за волшебными фото на рассвете на фоне воздушных шаров сюда приезжают люди со всего мира! 
                                </p>
        
                                <b>Также Вы увидите:</b>
                                <p>Музей на открытом воздухе в Гёреме
                                    Ущелье Ыхлара и монастырь Селиме
                                    Подземные города
                                    Крепость Учхисар
                                    Зельве и Пашабаг</p>
        
                                    <p>и многие другие достпримечательности.</p>
                                    <p>Местная кухня — один из поводов посетить Каппадокию, здесь есть рестораны на любой бюджет.</p>
                    </div>
                </div>

              
            </div>

           
        </section>
    
        <section>
            <div className="ourtrip">


                <h1>Our trip</h1>
                <h4>Маршрут</h4>

                <div className="ourtrip-slider">
                   
    
                    <div className="ourtrip-text">
                       <b>День 1 </b>
                       <p>Прилёт в Анкару
                        Трансфер в Каппадокию
                        Солёное озеро
                        Приезд в Гёреме 
                        Ужин
                        </p>

                        <b>День 1 </b>
                        <p>Прилёт в Анкару
                         Трансфер в Каппадокию
                         Солёное озеро
                         Приезд в Гёреме 
                         Ужин
                         </p>

                         <b>День 1 </b>
                         <p>Прилёт в Анкару
                          Трансфер в Каппадокию
                          Солёное озеро
                          Приезд в Гёреме 
                          Ужин
                          </p>

                          <b>День 1 </b>
                          <p>Прилёт в Анкару
                           Трансфер в Каппадокию
                           Солёное озеро
                           Приезд в Гёреме 
                           Ужин
                           </p>
   
                        <button>ЗАБРОНИРОВАТЬ</button>
                    </div>


                    <div className="slider-2">
                        <div className="slide-2">
                            <img
                              src={kartinkaimg}
                              alt=""
                            />
                          </div>
                    
                          <div className="slide-2">
                            <img src={img1} alt="" />
                          </div>
                    
                          
                    
                    
                          <button className="btn btn-next"><i className="fa-solid fa-chevron-right"></i></button>
                          <button className="btn btn-prev"><i className="fa-solid fa-angle-left"></i></button>
                    </div>
                </div>

              
            </div>

           
        </section>

<section className="hotel-sec">
    <div className="narrow-container">
        <h1>Hotel</h1>
        <h4>Sultan Cave Suites</h4>

        <div className="hotel">
            <div className="hotel-img">
                <img src={img2} alt=""/>

            </div>

            <div className="hotel-text">
                <p>В этом уникальном отеле, расположенном на вершине холма Айдынлы, вы можете забронировать высеченные в скале номера, обставленные антикварной мебелью со всей Турции. С солнечной террасы отеля открывается прекрасный панорамный вид на Национальный парк Гереме.
                </p>
                <p>Большинство номеров отеля Sultan Cave Suites высечены в скале, что обеспечивает прохладу и покой. Все номера оборудованы гостиной зоной и современной ванной комнатой. В большинстве из них есть собственная терраса или балкон.
                </p>
                <p>Отель Cave Suites Sultan располагает изысканным рестораном, где подают фирменные блюда региона Каппадокии. После ужина, пройдя на террасу, вы сможете заказать напиток и полюбоваться закатом солнца над деревней.
                </p>


                <div className="hotel-pics">
                    <div className="hotel-pics-1">

                    </div>
        
                </div>
                
            </div>

          
        </div>
    

    </div>
   
</section>


<section className="price-sec">
<div className="narrow-container">
    <h1>Price</h1>
    <h4>Стоимость услуг</h4>

    <div className="price">
        <div className="price-text-1">
            <h3>Включено</h3>
            <p>Проживание в двухместном номере в отеле с завтраками
            </p>
            <p>Индивидуальный трансфер для нашей группы из Анкары и обратно
            </p>
            <p>Экскурсия на Солёное озеро
            </p>
            <p>Индивидуальная дневная экскурсия по лучшим местам Каппадокии с личным транспортом
            </p>
            <p>Фотосессия с профессиональным фотографом для каждой участницы
                (Несколько локаций, 5 лучших фото в обработке фотографа и весь материал (до 100 фотографий)
                </p>

        </div>

        <div className="price-text-2">
            <h3>Не включено</h3>
            <p>Авиа Киев-Анкара-Киев (140-170$)</p>
            <p>Обеды и ужины (150$ на поездку)
            </p>
            <p>Воздушный шар 200$</p>
            <p>Дополнительные экскурсии (по желанию) от 30$
            </p>
        </div>

        <div className="parachute">
            <div className="parachute-1">
                <img src={img3} alt=""/>
            </div>
            <div className="parachute-2">
                <img src={img3} alt=""/>
                
            </div>
            <div className="parachute-3">
                <img src={img3} alt=""/>
                
            </div>
        </div>
    </div>
</div>
</section>

<section>
    <div className="narrow-container">

        <div className="form">
            <div className="left-part">
                <h1>1.07.2020</h1>
                <h4>Ближайшая дата тура </h4>
    
                <h2>490$</h2>
                <h4>Стоимость</h4>
    
                <h3>Оставить заявку или задать вопрос</h3>
    
                <form action="">
                    <input className="input" type="text" id="name" name="phone" placeholder="Имя" />
                    <input className="input" type="number" id="phone" name="phone" placeholder="Телефон" />

                    <button>ОСТАВИТЬ ЗАЯВКУ</button>
    
    
                  </form>
    
            </div>
    
            <div className="right-part">
    
            </div>
        </div>

       
    </div>
</section>

    </main>
  );
}

export default App;
