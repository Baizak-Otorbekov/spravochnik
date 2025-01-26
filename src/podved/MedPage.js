import React, { useState, useEffect } from 'react';
import Table from '../Table'; 
import '../App.css'; 

function MedPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div className="territorial-page">
      <h2>Медицинская служба</h2>
      <Table departmentKey="medicinskaya-sluzhba" isAdmin={isAdmin} />
    </div>
  );
}

export default MedPage;