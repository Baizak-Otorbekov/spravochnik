import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function TerritorialPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div className="territorial-menu">
      <h2>Территориальные подразделения</h2>

      <div className="territorial-buttons">
        <div className="button-row">
          <Link to="/territorial/umchs-bishkek">
            <button className="territorial-button">УМЧС г.Бишкек</button>
          </Link>
          <Link to="/territorial/umchs-osh">
            <button className="territorial-button">УМЧС г.Ош</button>
          </Link>
        </div>
        <div className="button-row">
          <Link to="/territorial/umchs-chui">
            <button className="territorial-button">УМЧС Чуйской обл</button>
          </Link>
          <Link to="/territorial/umchs-issyk-kul">
            <button className="territorial-button">УМЧС Иссык-Кульской обл</button>
          </Link>
        </div>
        <div className="button-row">
          <Link to="/territorial/umchs-naryn">
            <button className="territorial-button">УМЧС Нарынской обл</button>
          </Link>
          <Link to="/territorial/umchs-talas">
            <button className="territorial-button">УМЧС Таласской обл</button>
          </Link>
        </div>
        <div className="button-row">
          <Link to="/territorial/umchs-jalalabad">
            <button className="territorial-button">УМЧС Жалал-Абадской обл</button>
          </Link>
          <Link to="/territorial/umchs-batken">
            <button className="territorial-button">УМЧС Баткенской обл</button>
          </Link>
        </div>
        <div className="button-row">
        <Link to="/territorial/umchs-osh-obl">
            <button className="territorial-button">УМЧС Ошская обл</button>
          </Link>
          <Link to="/territorial/gcps">
            <button className="territorial-button">ГЦПС</button>
          </Link>
        </div>
        <div className="button-row">
        <Link to="/territorial/roso">
            <button className="territorial-button">РОСО</button>
          </Link>
          <Link to="/territorial/gss">
            <button className="territorial-button">ГСС</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TerritorialPage;
