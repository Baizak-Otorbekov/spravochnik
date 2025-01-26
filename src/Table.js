import React, { useState, useEffect } from 'react';

const Table = ({ isAdmin, departmentKey }) => {
  const [data, setData] = useState([]); 
  const [newRow, setNewRow] = useState({ name: '', rank: '', position: '', phone: '' }); 
  const [isAdding, setIsAdding] = useState(false); 
  const [searchQuery, setSearchQuery] = useState(''); 
  const [editingId, setEditingId] = useState(null); 
  const [searchResults, setSearchResults] = useState([]); 

  useEffect(() => {
    const savedData = localStorage.getItem(departmentKey);
    if (savedData) {
      setData(JSON.parse(savedData)); 
    }
  }, [departmentKey]);

  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem(departmentKey, JSON.stringify(data)); 
    }
  }, [data, departmentKey]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRow({ ...newRow, [name]: value });
  };

  const handleSaveRow = () => {
    if (editingId !== null) {
      const updatedData = data.map((row) => 
        row.id === editingId ? { ...row, ...newRow } : row
      );
      setData(updatedData);
      setEditingId(null); 
    } else {
       const newEmployee = { id: Date.now(), ...newRow };
      setData([...data, newEmployee]);
    }
    setNewRow({ name: '', rank: '', position: '', phone: '' }); 
    setIsAdding(false); 
  };

  const handleEdit = (id) => {
    const employee = data.find((row) => row.id === id);
    setNewRow({ name: employee.name, rank: employee.rank, position: employee.position, phone: employee.phone });
    setEditingId(id); 
    setIsAdding(true); 
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((row) => row.id !== id);
    setData(updatedData);
  };

  const handleAddRow = () => {
    setIsAdding(true); 
    setEditingId(null); 
  };

  const handleSearch = (e) => {
    const query = e.target.value.trim().replace(/\s+/g, ''); 
    setSearchQuery(query); 
    if (query === '') {
      setSearchResults([]); 
    } else {
      const filtered = data.filter((row) => {
        const lowercasedQuery = query.toLowerCase();
        return (
          row.name.toLowerCase().replace(/\s+/g, '').includes(lowercasedQuery) || 
          row.rank.toLowerCase().replace(/\s+/g, '').includes(lowercasedQuery) || 
          row.position.toLowerCase().replace(/\s+/g, '').includes(lowercasedQuery) || 
          row.phone.replace(/\s+/g, '').includes(query) 
        );
      });
      setSearchResults(filtered); 
    }
  };

  const rowsToDisplay = searchQuery ? searchResults : data;

  return (
    <div>
      <h2>Таблица сотрудников</h2>

      <div style={{ marginBottom: '10px' }}>
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>ФИО</th>
              <th>Звание</th>
              <th>Должность</th>
              <th>Номер телефона</th>
              {isAdmin && <th>Действия</th>} 
            </tr>
          </thead>
          <tbody>
            {rowsToDisplay.length === 0 ? (
              <tr><td colSpan="6">Нет данных</td></tr>
            ) : (
              rowsToDisplay.map((row, index) => (
                <tr key={row.id}>
                  <td>{index + 1}</td>
                  <td>{row.name}</td>
                  <td>{row.rank}</td>
                  <td>{row.position}</td>
                  <td>
                    <a href={`tel:${row.phone}`}>{row.phone}</a>
                  </td>
                  {isAdmin && (
                    <td>
                      <button onClick={() => handleEdit(row.id)}>Изменить</button>
                      <button onClick={() => handleDelete(row.id)}>Удалить</button>
                    </td>
                  )}
                </tr>
              ))
            )}
            {isAdding && (
              <tr>
                <td>{data.length + 1}</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={newRow.name}
                    onChange={handleChange}
                    placeholder="ФИО"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="rank"
                    value={newRow.rank}
                    onChange={handleChange}
                    placeholder="Звание"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="position"
                    value={newRow.position}
                    onChange={handleChange}
                    placeholder="Должность"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="phone"
                    value={newRow.phone}
                    onChange={handleChange}
                    placeholder="Номер телефона"
                  />
                </td>
                <td>
                  <button onClick={handleSaveRow}>Сохранить</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {isAdmin && !isAdding && (
        <div>
          <button onClick={handleAddRow} style={{ marginBottom: '10px' }}>Добавить сотрудника</button>
        </div>
      )}
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Поиск по ФИО, званию, должности или телефону"
          style={{ padding: '5px', width: '250px', marginRight: '10px' }}
        />
        <button onClick={() => setSearchQuery('')} style={{ padding: '5px' }}>Отмена</button>
      </div>
    </div>
  );
};

export default Table;