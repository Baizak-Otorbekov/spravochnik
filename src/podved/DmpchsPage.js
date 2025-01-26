import React, { useState, useEffect } from 'react';
import Table from '../Table'; 
import '../App.css'; 

function DmpchsPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div className="territorial-page">
      <h2>ДМПЧС</h2>
      <Table departmentKey="dmpchs" isAdmin={isAdmin} />
    </div>
  );
}

export default DmpchsPage;