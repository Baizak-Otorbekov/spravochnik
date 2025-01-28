import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './App.css';

function SubordinatePage() {
  const navigate = useNavigate(); 

  const handleBack = () => {
    navigate('/home'); 
  };

  return (
    <div className="subordinate-menu central-office-container"> 
      <h2>Подведомственные подразделения</h2>

      <div className="subordinate-buttons">
        <div className="button-row">
          <Link to="/subordinate/cuks">
            <button className="subordinate-button">ЦУКС</button>
          </Link>
          <Link to="/subordinate/dmps">
            <button className="subordinate-button">ДМПЧС</button>
          </Link>
          <Link to="/subordinate/vodolaznaya-sluzhba">
            <button className="subordinate-button">Водолазная служба</button>
          </Link>
        </div>
        <div className="button-row">
          <Link to="/subordinate/sluzhba-plps">
            <button className="subordinate-button">Служба ПЛПЧС</button>
          </Link>
          <Link to="/subordinate/selvodzashchita">
            <button className="subordinate-button">Сельводзащита</button>
          </Link>
          <Link to="/subordinate/dksplps">
            <button className="subordinate-button">ДКСПЛЧС</button>
          </Link>
        </div>
        <div className="button-row">
          <Link to="/subordinate/spn">
            <button className="subordinate-button">СПН</button>
          </Link>
          <Link to="/subordinate/doh">
            <button className="subordinate-button">ДОХ</button>
          </Link>
          <Link to="/subordinate/gidromed">
            <button className="subordinate-button">Гидромед</button>
          </Link>
        </div>
        <div className="button-row">
          <Link to="/subordinate/severnyj-centr">
            <button className="subordinate-button">Северный центр</button>
          </Link>
          <Link to="/subordinate/mes-tekstil">
            <button className="subordinate-button">Мес текстиль</button>
          </Link>
          <Link to="/subordinate/aviacionnoe-predpriyatie">
            <button className="subordinate-button">Авиационное предприятие</button>
          </Link>
        </div>
        <div className="button-row">
          <Link to="/subordinate/aviacionno-poiskovo-spasatelnaya-sluzhba">
            <button className="subordinate-button">Авиационно-поисково-спасательная служба</button>
          </Link>
          <Link to="/subordinate/medicinskaya-sluzhba">
            <button className="subordinate-button">Медицинская служба</button>
          </Link>
          <Link to="/subordinate/uic">
            <button className="subordinate-button">УИЦ</button>
          </Link>
        </div>
        <div className="button-row">
          <Link to="/subordinate/bishkek-city">
            <button className="subordinate-button">Бишкек-Сити</button>
          </Link>
          <Link to="/subordinate/respublikanskij-speckombinat">
            <button className="subordinate-button">Республиканский спецкомбинат</button>
          </Link>
          <Link to="/subordinate/oshskij-centr-po-reagirovaniyu-na-chs">
            <button className="subordinate-button">Ошский центр по реагированию на ЧС</button>
          </Link>
        </div>
        <div className="button-row">
          <Link to="/subordinate/mezhregionalnyj-centr">
            <button className="subordinate-button">Межрегиональный центр</button>
          </Link>
          <Link to="/subordinate/zhalal-abad-pmo">
            <button className="subordinate-button">Жалал-Абад ПМО</button>
          </Link>
          <Link to="/subordinate/batken-pmo">
            <button className="subordinate-button">Баткен ПМО</button>
          </Link>
        </div>
        <div className="button-row">
          <Link to="/subordinate/talas-pmo">
            <button className="subordinate-button">Талас ПМО</button>
          </Link>
          <Link to="/subordinate/lesnaya-sluzhba">
            <button className="subordinate-button">Лесная служба</button>
          </Link>
          <Link to="/subordinate/naryn-stroj">
            <button className="subordinate-button">Нарын строй</button>
          </Link>
        </div>
      </div>
      <div className="back-button-container">
        <button className="back-button" onClick={handleBack}>
          Назад
        </button>
      </div>
    </div>
  );
}
export default SubordinatePage;