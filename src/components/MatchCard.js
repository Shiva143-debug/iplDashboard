

const MatchCard = ({ match }) => (
  <li className="match-card">
    <img
      src={match.competingTeamLogo}
      alt={`competing team ${match.competingTeam}`}
      className="match-logo"
    />
    <p>{match.competingTeam}</p>
    <p>{match.result}</p>
    <p className={match.matchStatus === 'Won' ? 'status-won' : 'status-lost'}>
      {match.matchStatus}
    </p>
  </li>
);

export default MatchCard;
