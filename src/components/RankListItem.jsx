import React, { PropTypes } from 'react';

function RankListItem(props) {
  const { item } = props;

  return (
    <tr>
      <td>{ item.name }</td>
      <td>{ item.disonours }</td>
    </tr>
  );
}

RankListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default RankListItem;
