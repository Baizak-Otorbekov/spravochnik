import React, { useState, useEffect } from 'react';
import Table from '../Table'; 
import '../App.css'; 

function JapmoPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div className="territorial-page">
      <h2>Жалал-Абад ПМО</h2>
      <Table departmentKey="zhalal-abad-pmo" isAdmin={isAdmin} />
    </div>
  );
}

export default JapmoPage;