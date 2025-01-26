import React, { useState, useEffect } from 'react';
import Table from '../Table'; 
import '../App.css'; 

function MejPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div className="territorial-page">
      <h2>Межрегиональный центр</h2>
      <Table departmentKey="mezhregionalnyj-centr" isAdmin={isAdmin} />
    </div>
  );
}

export default MejPage;