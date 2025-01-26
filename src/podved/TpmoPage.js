import React, { useState, useEffect } from 'react';
import Table from '../Table'; 
import '../App.css'; 

function TpmoPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div className="territorial-page">
      <h2>Талас ПМО</h2>
      <Table departmentKey="talas-pmo" isAdmin={isAdmin} />
    </div>
  );
}

export default TpmoPage;