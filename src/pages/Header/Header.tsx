import '.Header.scss';

export const CappadociaHeader = () =>{
   return (
    <header >

        <div className="narrow-container">

            <div className="nav">

                <nav>

                    <a href="">Маршрут</a>
                    <a href="">Отель</a>
                    <a href="">Стоимость</a>
                </nav>
    
                <div className="phone">
    
                <img src="./assets/img/phone 1.svg" alt=""/>
    
                <span>
                    +38(066)555-777-6
                </span>
                
                </div>
    
                
            </div>

            <h1>Cappadocia</h1>

            <h4>Эксклюзивный тур</h4>
        
        </div>
    
    </header>

   )
}