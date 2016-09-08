import React, { PropTypes } from 'react';

import TeamForm from './TeamForm.jsx';


function MatchForm(props) {
  const { teams, onChange, onSubmit } = props;

  return (
    <div>
      { teams.map((team, id) => <TeamForm key={id} id={id} team={team} onChange={onChange} />) }
      <button onClick={onSubmit}>Save!</button>
    </div>
  );
}

MatchForm.propTypes = {
  teams: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MatchForm;
