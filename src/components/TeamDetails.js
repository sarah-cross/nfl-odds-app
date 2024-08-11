import React, { useEffect } from 'react';
import './TeamDetails.css';
import { useParams, useNavigate } from 'react-router-dom';
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

  const TeamDetails = ({ oddsData }) => {
    const { teamName } = useParams();
    const navigate = useNavigate();
    const selectedTeam = teams.find(team => team.name === teamName);

    useEffect(() => {
        const rootElement = document.getElementById('root');
        if (selectedTeam) {
            rootElement.style.backgroundColor = selectedTeam.color;
        }
        return () => {
            rootElement.style.backgroundColor = ''; // Reset background color when leaving the page
        };
    }, [selectedTeam]);

    const teamOdds = extractTeamOdds(oddsData, teamName);
    const averagedOdds = calculateAverageOdds(teamOdds, teamName);

    return (
        <div className="team-details-page">
            <div className="back-arrow" onClick={() => navigate(-1)}>
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H19v-2z"/>
                </svg>
            </div>
            <h1>{teamName}</h1>
            {averagedOdds.map((game, index) => (
                <div key={index} className="game-card">
                    <div className="team-odds">
                        <div className="team">
                            <img src={teams.find(team => team.name === game.home_team)?.logo} alt={`${game.home_team} logo`} />
                            <p>{game.win_percentage[game.home_team] ? `${Math.round(game.win_percentage[game.home_team])}%` : 'N/A'}</p>
                        </div>
                        <div className="team">
                            <img src={teams.find(team => team.name === game.away_team)?.logo} alt={`${game.away_team} logo`} />
                            <p>{game.win_percentage[game.away_team] ? `${Math.round(game.win_percentage[game.away_team])}%` : 'N/A'}</p>
                        </div>
                    </div>
                    <div className="game-details">
                        <p>{game.home_team} (H) vs {game.away_team} (A)</p>
                        <p>{new Date(game.commence_time).toLocaleDateString()}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};


  /* const TeamDetails = ({ oddsData }) => {
    const { teamName } = useParams();
    const navigate = useNavigate();
    const teamOdds = extractTeamOdds(oddsData, teamName);
    const averagedOdds = calculateAverageOdds(teamOdds, teamName);
  
    const selectedTeam = teams.find(team => team.name === teamName);
  
    useEffect(() => {
      document.documentElement.style.setProperty('--team-color', selectedTeam?.color || '#333');
    }, [selectedTeam]);
  
    return (
      <div className="team-details-page">
        <div className="back-arrow" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H19v-2z"/>
          </svg>
        </div>
        <h1>{teamName}</h1>
        {averagedOdds.map((game, index) => {
          const homeTeam = teams.find(team => team.name === game.home_team);
          const awayTeam = teams.find(team => team.name === game.away_team);
  
          return (
            <div key={index} className="game-card">
              <div className="team-odds">
                <div className="team">
                  <img src={homeTeam?.logo} alt={`${game.home_team} logo`} />
                  <p>{game.win_percentage[game.home_team] ? `${Math.round(game.win_percentage[game.home_team])}%` : 'N/A'}</p>
                </div>
                <div className="team">
                  <img src={awayTeam?.logo} alt={`${game.away_team} logo`} />
                  <p>{game.win_percentage[game.away_team] ? `${Math.round(game.win_percentage[game.away_team])}%` : 'N/A'}</p>
                </div>
              </div>
              <div className="game-details">
                <p>{game.home_team} (H) vs {game.away_team} (A)</p>
                <p>{new Date(game.commence_time).toLocaleDateString()}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }; */

const extractTeamOdds = (data, teamName) => {
    return data
        .filter(game => game.home_team === teamName || game.away_team === teamName)
        .map(game => {
            const bookmakers = game.bookmakers.map(bookmaker => {
                const h2hMarket = bookmaker.markets.find(market => market.key === "h2h");
                const spreadMarket = bookmaker.markets.find(market => market.key === "spreads");

                return {
                    bookmaker: bookmaker.title,
                    h2h: h2hMarket ? h2hMarket.outcomes : [],
                    spreads: spreadMarket ? spreadMarket.outcomes : []
                };
            });

            return {
                gameId: game.id,
                commence_time: game.commence_time,
                home_team: game.home_team,
                away_team: game.away_team,
                bookmakers: bookmakers
            };
        });
};


const calculateAverageOdds = (teamOdds) => {
    return teamOdds.map(game => {
        const h2hPrices = {};
        const spreadPrices = {};
        const winPercentages = {};

        // Initialize accumulators
        game.bookmakers.forEach(bookmaker => {
            // Accumulate H2H odds
            bookmaker.h2h.forEach(outcome => {
                if (!h2hPrices[outcome.name]) {
                    h2hPrices[outcome.name] = 0;
                    winPercentages[outcome.name] = 0;
                }
                h2hPrices[outcome.name] += outcome.price;

                // Calculate win probability
                if (outcome.price > 0) {
                    winPercentages[outcome.name] += (100 / (outcome.price + 100));
                } else {
                    winPercentages[outcome.name] += (-outcome.price / (-outcome.price + 100));
                }
            });

            // Accumulate Spread odds
            bookmaker.spreads.forEach(outcome => {
                if (!spreadPrices[outcome.name]) {
                    spreadPrices[outcome.name] = { price: 0, point: 0 };
                }
                spreadPrices[outcome.name].price += outcome.price;
                spreadPrices[outcome.name].point += outcome.point;
            });
        });

        // Normalize win percentages to sum to 100%
        const totalWinPercentage = Object.values(winPercentages).reduce((sum, value) => sum + value, 0);
        Object.keys(winPercentages).forEach(name => {
            winPercentages[name] = (winPercentages[name] / totalWinPercentage) * 100;
        });

        // Compute the averages
        const h2hAvg = {};
        const spreadAvg = {};
        const winPercentageAvg = {};

        Object.keys(h2hPrices).forEach(name => {
            h2hAvg[name] = h2hPrices[name] / game.bookmakers.length;
            winPercentageAvg[name] = winPercentages[name]; // Already normalized
        });

        Object.keys(spreadPrices).forEach(name => {
            spreadAvg[name] = {
                price: spreadPrices[name].price / game.bookmakers.length,
                point: spreadPrices[name].point / game.bookmakers.length
            };
        });

        return {
            gameId: game.gameId,
            home_team: game.home_team,
            away_team: game.away_team,
            commence_time: game.commence_time,
            h2h: h2hAvg,
            spreads: spreadAvg,
            win_percentage: winPercentageAvg // Add win percentage data
        };
    });
};



export default TeamDetails;
