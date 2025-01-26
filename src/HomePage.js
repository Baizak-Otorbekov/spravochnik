import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function HomePage() {
  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
    }
  }, []);

  return (
    <div className="menu">
      <h1>Справочник</h1>
      <h2>сотрудников МЧС КР</h2>
      <Link to="/guide">
        <button>Руководство</button>
      </Link>
      <Link to="/CentralOffice">
        <button>Центральный аппарат</button>
      </Link>
      <Link to="/subordinate">
        <button>Подведомственные подразделения</button>
      </Link>
      <Link to="/territorial">
        <button>Территориальные подразделения</button>
      </Link>
      <Link to="/Search">
        <button>ПОИСК</button>
      </Link>
    </div>
  );
}

export default HomePage;