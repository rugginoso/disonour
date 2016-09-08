import React, { PropTypes } from 'react';

import RankListItem from './RankListItem.jsx';

function RankList(props) {
  const { items, limit } = props;

  const limitedItems = items.slice(0, limit);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Disonours</th>
        </tr>
      </thead>
      <tbody>
        {limitedItems.map((item, key) => <RankListItem key={key} item={item} />)}
      </tbody>
    </table>
  );
}

RankList.propTypes = {
  items: PropTypes.array.isRequired,
  limit: PropTypes.number.isRequired,
};

export default RankList;
