import React, { useState, useEffect } from 'react';
import Table from '../Table'; 
import '../App.css'; 

function KombPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div className="territorial-page">
      <h2>Республиканский комбинат</h2>
      <Table departmentKey="respublikanskij-speckombinat" isAdmin={isAdmin} />
    </div>
  );
}

export default KombPage;