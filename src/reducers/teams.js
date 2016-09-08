const initialState = [
  {
    keeper: '',
    forward: '',
    score: 0,
  },
  {
    keeper: '',
    forward: '',
    score: 0,
  },
];

function teams(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_TEAM_FIELD':
      {
        const { team, role, name } = action.payload;

        return state.map((t, i) => {
          if (i === team) {
            return Object.assign({}, t, { [role]: name });
          }
          return t;
        });
      }
    default:
      return state;
  }
}

export default teams;
