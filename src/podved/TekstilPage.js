import React, { useState, useEffect } from 'react';
import Table from '../Table'; 
import '../App.css'; 

function TekstilPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div className="territorial-page">
      <h2>Мес текстиль</h2>
      <Table departmentKey="mes-tekstil" isAdmin={isAdmin} />
    </div>
  );
}

export default TekstilPage;