import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MatchForm from '../components/MatchForm.jsx';
import RankList from '../components/RankList.jsx';

import actions from '../actions';

class App extends React.Component {
  onMatchFormSubmitted() {
    const { teams } = this.props;

    console.log(JSON.stringify(teams, null, 2));
  }

  render() {
    const {
      teams,
      onChangeTeamField,
      topDisonoured,
    } = this.props;

    return (
      <div>
        <MatchForm
          teams={teams}
          onChange={onChangeTeamField}
          onSubmit={this.onMatchFormSubmitted.bind(this)}
        />
        <RankList items={topDisonoured} limit={10} />
      </div>
    );
  }
}

App.propTypes = {
  onChangeTeamField: PropTypes.func.isRequired,
  teams: PropTypes.array.isRequired,
  topDisonoured: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    teams: state.teams,
    topDisonoured: state.topDisonoured,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onChangeTeamField: actions.changeTeamField,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
