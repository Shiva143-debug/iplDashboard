import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import LatestMatch from './LatestMatch';
import MatchCard from './MatchCard';


const TeamMatches = () => {
  const { id } = useParams();
  const [teamData, setTeamData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getTeamMatches = async () => {
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`);
    const data = await response.json();

    const latestMatch = convertMatchData(data.latest_match_details);
    const recentMatches = data.recent_matches.map(convertMatchData);

    setTeamData({
      teamBannerUrl: data.team_banner_url,
      latestMatch,
      recentMatches,
    });
    setLoading(false);
  };

  useEffect(() => {
    getTeamMatches();
  }, [id]);

  return (
    <div className={`team-matches-container ${id.toLowerCase()}-bg`}>
      {loading ? (
        <div testid="loader">
          <Oval color="#ffffff" height={50} width={50} />
        </div>
      ) : (
        <>
          <img src={teamData.teamBannerUrl} alt="team banner" className="team-banner"/>
          <LatestMatch match={teamData.latestMatch} />
          <ul className="match-cards-list">
            {teamData.recentMatches.map(match => (
              <MatchCard key={match.id} match={match} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

const convertMatchData = data => ({
  umpires: data.umpires,
  result: data.result,
  manOfTheMatch: data.man_of_the_match,
  id: data.id,
  date: data.date,
  venue: data.venue,
  competingTeam: data.competing_team,
  competingTeamLogo: data.competing_team_logo,
  firstInnings: data.first_innings,
  secondInnings: data.second_innings,
  matchStatus: data.match_status,
});

export default TeamMatches;
