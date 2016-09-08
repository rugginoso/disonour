import React from 'react';

function RankListItem(props) {
  const { item } = props;

  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.disonours}</td>
    </tr>
  );
}

export default RankListItem;
