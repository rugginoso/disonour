import React from 'react';

import MatchForm from '../components/MatchForm.jsx';
import RankList from '../components/RankList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [
        {
          keeper: '',
          forward: '',
          score: 0
        },
        {
          keeper: '',
          forward: '',
          score: 0
        },
      ],
      topDisonoured: [
        { name: 'Rugginoso', disonours: 10 },
        { name: 'Duplo', disonours: 7 },
        { name: 'Gianni', disonours: 4 }
      ]
    };
  }

  onMatchFormChange(team, field, value) {
    const newState = Object.assign({}, this.state);

    newState.teams[team][field] = value;

    this.setState(newState);
  }

  onMatchFormSubmitted() {
    console.log(JSON.stringify(this.state, null, 2));
  }

  render() {
    const { teams, topDisonoured } = this.state;

    return (
      <div>
        <MatchForm
          teams={teams}
          onChange={ this.onMatchFormChange.bind(this) }
          onSubmit={ this.onMatchFormSubmitted.bind(this) }
        />
        <RankList items={topDisonoured} limit={10} />
      </div>
    );
  }
}

export default App;
