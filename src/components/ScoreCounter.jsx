import React, { PropTypes } from 'react';

class ScoreCounter extends React.Component {
  onClick(amount, e) {
    const { value, onChange } = this.props;
    e.preventDefault();

    onChange({
      target: {
        value: value + amount,
      },
    });
  }

  onChange(e) {
    const { onChange } = this.props;

    onChange({
      target: {
        value: parseInt(e.target.value, 10),
      },
    });
  }

  render() {
    const { value } = this.props;

    return (
      <div>
        <a href="" onClick={this.onClick.bind(this, -1)}>-</a>
        <input
          type="number"
          value={value}
          onChange={this.onChange.bind(this)}
        />
        <a href="" onClick={this.onClick.bind(this, 1)}>+</a>
      </div>
    );
  }
}

ScoreCounter.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ScoreCounter;
