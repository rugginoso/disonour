function changeTeamField(team, role, name) {
  return {
    type: 'CHANGE_TEAM_FIELD',
    payload: { team, role, name },
  };
}

export default changeTeamField;
