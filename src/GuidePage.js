import React, { useState, useEffect } from 'react';
import Table from './Table'; 
import './App.css';

function GuidePage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      setIsAdmin(true); 
    }
  }, []);

  return (
    <div className="guide-page">
      <h2>Руководство</h2>
      <Table departmentKey="guide" isAdmin={isAdmin} /> 
    </div>
  );
}

export default GuidePage;