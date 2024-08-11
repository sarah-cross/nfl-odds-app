const API_KEY = 'fa169b9b94d4a8724e2bd17c2774a0d4';
const BASE_URL = 'https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/'

export const fetchTeamScheduleAndOdds = async () => {
    try {
        const response = await fetch(`${BASE_URL}?apiKey=${API_KEY}&regions=us&markets=h2h,spreads&oddsFormat=american`);
        const data = await response.json();
        console.log('response data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching team schedule and odds:', error);
        return null;
    }
};