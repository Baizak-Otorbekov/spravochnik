import React, { useState, useEffect } from 'react';
import Table from '../Table'; 
import '../App.css'; 

function LesPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div className="territorial-page">
      <h2>Лесная служба</h2>
      <Table departmentKey="lesnaya-sluzhba" isAdmin={isAdmin} />
    </div>
  );
}

export default LesPage;