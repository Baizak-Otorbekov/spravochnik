import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './App.css';

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState(''); 
  const [searchResults, setSearchResults] = useState([]); 

  const navigate = useNavigate(); 

  const departments = [
    'gss',
    'gcps',
    'roso',
    'umchs-bishkek',
    'umchs-batken',
    'umchs-chui',
    'umchs-issyk-kul',
    'umchs-jalalabad',
    'umchs-naryn',
    'umchs-osh-obl',
    'umchs-osh',
    'umchs-talas',
    'CentralOffice',
    'guide',
    'cuks',
    'dmpchs',
    'vodolaznaya-sluzhba',
    'sluzhba-plps',
    'selvodzashchita',
    'dksplps',
    'spn',
    'doh',
    'gidromed',
    'severnyj-centr',
    'mes-tekstil',
    'aviacionnoe-predpriyatie',
    'aviacionno-poiskovo-spasatelnaya-sluzhba',
    'medicinskaya-sluzhba',
    'uic',
    'bishkek-city',
    'respublikanskij-speckombinat',
    'oshskij-centr-po-reagirovaniyu-na-chs',
    'mezhregionalnyj-centr',
    'zhalal-abad-pmo',
    'batken-pmo',
    'talas-pmo',
    'lesnaya-sluzhba',
    'naryn-stroj',
  ];

  const handleSearch = (e) => {
    const query = e.target.value.trim().toLowerCase(); 
    setSearchQuery(query);

    if (query === '') {
      setSearchResults([]); 
      return;
    }

    const allData = departments.flatMap((departmentKey) => {
      const data = localStorage.getItem(departmentKey);
      return data ? JSON.parse(data) : [];
    });

    const filtered = allData.filter((row) => {
      return (
        row.name.toLowerCase().includes(query) ||
        row.rank.toLowerCase().includes(query) ||
        row.position.toLowerCase().includes(query) ||
        row.phone.includes(query)
      );
    });

    setSearchResults(filtered); 
  };

  const handleBack = () => {
    navigate('/home'); 
  };

  return (
    <div>
      <h1>Поиск</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Поиск по ФИО, званию, должности или телефону"
          style={{ padding: '5px', width: '300px' }}
        />
      </div>

      <div className="back-button-container">
        <button className="back-button" onClick={handleBack}>
          Назад
        </button>
      </div>

      {searchResults.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>ФИО</th>
              <th>Звание</th>
              <th>Должность</th>
              <th>Номер телефона</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((row, index) => (
              <tr key={row.id}>
                <td>{index + 1}</td>
                <td>{row.name}</td>
                <td>{row.rank}</td>
                <td>{row.position}</td>
                <td>
                  <a href={`tel:${row.phone}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {row.phone}
                  </a>
                </td>
                <td>{row.department}</td> 
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Нет результатов</p>
      )}
    </div>
  );
}
export default SearchPage;