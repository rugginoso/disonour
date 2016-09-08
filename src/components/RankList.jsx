import React, {PropTypes} from 'react';

import RankListItem from './RankListItem.jsx';

class RankList extends React.Component {
  render() {
    const { items, limit } = this.props;

    const limitedItems = items.slice(0, limit);

    return (
      <table>
        <thead>
          <td>Name</td>
          <td>Disonours</td>
        </thead>
        <tbody>
          { limitedItems.map((item, key) => <RankListItem key={key} item={item} /> ) }
        </tbody>
      </table>
    );
  }
}

RankList.propTypes = {
  items: PropTypes.array.isRequired,
  limit: PropTypes.number.isRequired
};

export default RankList;
