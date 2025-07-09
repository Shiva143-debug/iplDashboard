import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl');
    const data = await response.json();
    const updatedTeams = data.teams.map(team => ({
      id: team.id,
      name: team.name,
      teamImageUrl: team.team_image_url,
    }));
    setTeams(updatedTeams);
    setLoading(false);
  };

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <div className="home-container">
      <div className="header">
        <img src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png" alt="ipl logo" className="ipl-logo"/>
        <h1 className="heading">IPL Dashboard</h1>
      </div>
      {loading ? (
       <div data-testid="loader" className="loader" />
      ) : (
        <ul className="teams-list">
          {teams.map(team => (
            <Link to={`/team-matches/${team.id}`} key={team.id}>
              <li className="team-card">
                <img src={team.teamImageUrl} alt={team.name} className="team-logo" />
                <p className="team-name">{team.name}</p>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
