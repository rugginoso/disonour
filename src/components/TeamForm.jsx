import React, { PropTypes } from 'react';

import ScoreCounter from './ScoreCounter.jsx';

class TeamForm extends React.Component {
  onChange(field, e) {
    const { id, onChange } = this.props;

    onChange(id, field, e.target.value);
  }

  render() {
    const { team } = this.props;

    return (
      <div>
        <p>
          <input
            type="text"
            value={team.keeper}
            placeholder="Keeper name"
            onChange={this.onChange.bind(this, 'keeper')}
          />
        </p>
        <p>
          <input
            type="text"
            value={team.forward}
            placeholder="Forward name"
            onChange={this.onChange.bind(this, 'forward')}
          />
        </p>
        <ScoreCounter
          value={team.score}
          onChange={this.onChange.bind(this, 'score')}
        />
      </div>
    );
  }
}

TeamForm.propTypes = {
  id: PropTypes.number.isRequired,
  team: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TeamForm;
