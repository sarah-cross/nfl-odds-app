import React from 'react';
import './TeamList.css';
import { Link } from 'react-router-dom';
import cardinalsLogo from '../assets/cardinals-logo.svg';
import falconsLogo from '../assets/falcons-logo.svg';
import ravensLogo from '../assets/ravens-logo.svg';
import billsLogo from '../assets/bills-logo (1).svg';
import panthersLogo from '../assets/panthers-logo.svg';
import bearsLogo from '../assets/bears-logo.svg';
import bengalsLogo from '../assets/bengals-logo.svg';
import brownsLogo from '../assets/browns-logo.svg';
import cowboysLogo from '../assets/cowboys-logo (1).svg';
import broncosLogo from '../assets/broncos-logo.svg';
import lionsLogo from '../assets/lions-logo (2).svg';
import packersLogo from '../assets/packers-logo.svg';
import texansLogo from '../assets/texans-logo (1).svg';
import coltsLogo from '../assets/Indianapolis_Colts_logo.svg.svg';
import jaguarsLogo from '../assets/jaguars-logo (1).svg';
import chiefsLogo from '../assets/chiefs-logo (2).svg';
import raidersLogo from '../assets/580b585b2edbce24c47b2b48.svg';
import chargersLogo from '../assets/chargers-logo.svg';
import ramsLogo from '../assets/rams-logo (1).svg';
import dolphinsLogo from '../assets/dolphins-logo.svg';
import vikingsLogo from '../assets/vikings-logo.svg';
import patriotsLogo from '../assets/patriots-logo (1).svg';
import saintsLogo from '../assets/saints-logo.svg';
import giantsLogo from '../assets/giants-logo1.svg';
import jetsLogo from '../assets/jets-logo.svg';
import eaglesLogo from '../assets/eagles-logo (1).svg';
import steelersLogo from '../assets/steelers-logo.svg';
import fortyNinerslogo from '../assets/49ers-logo.svg';
import seahawksLogo from '../assets/seahawks-logo.svg';
import buccaneersLogo from '../assets/buccaneers-logo.svg';
import titansLogo from '../assets/titans-logo.svg';
import commandersLogo from '../assets/commanders-logo.svg';


const teams = [
  { name: 'Arizona Cardinals', logo: cardinalsLogo, color: '#97233F' },
  { name: 'Atlanta Falcons', logo: falconsLogo, color: '#A71930' },
  { name: 'Baltimore Ravens', logo: ravensLogo, color: '#241773' },
  { name: 'Buffalo Bills', logo: billsLogo, color: '#00338D' },
  { name: 'Carolina Panthers', logo: panthersLogo, color: '#0085CA' },
  { name: 'Chicago Bears', logo: bearsLogo, color: '#0B162A' },
  { name: 'Cincinnati Bengals', logo: bengalsLogo, color: '#FB4F14' },
  { name: 'Cleveland Browns', logo: brownsLogo, color: '#311D00' },
  { name: 'Dallas Cowboys', logo: cowboysLogo, color: '#869397'},
  { name: 'Denver Broncos', logo: broncosLogo, color: '#002244' },
  { name: 'Detroit Lions', logo: lionsLogo, color: '#0076B6' },
  { name: 'Green Bay Packers', logo: packersLogo, color: '#203731' },
  { name: 'Houston Texans', logo: texansLogo, color: '#03202F' },
  { name: 'Indianapolis Colts', logo: coltsLogo, color: '#002C5F' },
  { name: 'Jacksonville Jaguars', logo: jaguarsLogo, color: '#006778' },
  { name: 'Kansas City Chiefs', logo: chiefsLogo, color: '#E31837' },
  { name: 'Las Vegas Raiders', logo: raidersLogo, color: '#000000' },
  { name: 'Los Angeles Chargers', logo: chargersLogo, color: '#0080C6' },
  { name: 'Los Angeles Rams', logo: ramsLogo, color: '#003594' },
  { name: 'Miami Dolphins', logo: dolphinsLogo, color: '#008E97' },
  { name: 'Minnesota Vikings', logo: vikingsLogo, color: '#4F2683' },
  { name: 'New England Patriots', logo: patriotsLogo, color: '#002244' },
  { name: 'New Orleans Saints', logo: saintsLogo, color: '#D3BC8D' },
  { name: 'New York Giants', logo: giantsLogo, color: '#0B2265' },
  { name: 'New York Jets', logo: jetsLogo, color: '#125740' },
  { name: 'Philadelphia Eagles', logo: eaglesLogo, color: '#004C54' },
  { name: 'Pittsburgh Steelers', logo: steelersLogo, color: '#FFB612' },
  { name: 'San Francisco 49ers', logo: fortyNinerslogo, color: '#AA0000' },
  { name: 'Seattle Seahawks', logo: seahawksLogo, color: '#002244' },
  { name: 'Tampa Bay Buccaneers', logo: buccaneersLogo, color: '#D50A0A' },
  { name: 'Tennessee Titans', logo: titansLogo, color: '#0C2340' },
  { name: 'Washington Commanders', logo: commandersLogo, color: '#5a1414' },

];

const TeamList = () => {
    return (
        <div className="team-list-page">
            <h1 className="team-list-title">Select your team</h1>
            {teams.map((team, index) => (
                <Link to={`/team/${team.name}`} key={index} className="team-list-item" style={{ backgroundColor: team.color }}>
                    <div className="team-logo-container">
                        <img src={team.logo} alt={`${team.name} logo`} className="team-logo" />
                    </div>
                    <div className="team-details">
                        <span className="team-name">{team.name}</span>
                        <button className="team-button">Schedule and Odds</button>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default TeamList;
