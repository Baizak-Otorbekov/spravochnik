import React, { useState, useEffect } from 'react';
import Table from '../Table'; 
import '../App.css'; 

function UicPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div className="territorial-page">
      <h2>УИЦ</h2>
      <Table departmentKey="uic" isAdmin={isAdmin} />
    </div>
  );
}

export default UicPage;