

const LatestMatch = ({ match }) => (
  <div className="latest-match-container">
    <h2 className="latest-match-title">Latest Matches</h2>
    <div className="latest-match-card">
      <div>
        <p className="team-name">{match.competingTeam}</p>
        <p>{match.date}</p>
        <p>{match.venue}</p>
        <p>{match.result}</p>
      </div>
      <img
        src={match.competingTeamLogo}
        alt={`latest match ${match.competingTeam}`}
        className="latest-match-logo"
      />
      <div>
        <p>First Innings: {match.firstInnings}</p>
        <p>Second Innings: {match.secondInnings}</p>
        <p>Man of the Match: {match.manOfTheMatch}</p>
        <p>Umpires: {match.umpires}</p>
      </div>
    </div>
  </div>
);

export default LatestMatch;
