import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeamList from './components/TeamList';
import TeamDetails from './components/TeamDetails';
import { fetchTeamScheduleAndOdds } from './api';
import './App.css';

function App() {
  const [oddsData, setOddsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamScheduleAndOdds();
      setOddsData(data);
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TeamList />} />
          <Route path="/team/:teamName" element={<TeamDetails oddsData={oddsData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



