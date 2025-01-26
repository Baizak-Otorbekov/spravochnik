import React, { useState, useEffect } from 'react';
import Table from '../Table';
import '../App.css'; 

function GidrometPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div className="territorial-page">
      <h2>Гидромет</h2>
      <Table departmentKey="gidromed" isAdmin={isAdmin} />
    </div>
  );
}

export default GidrometPage;