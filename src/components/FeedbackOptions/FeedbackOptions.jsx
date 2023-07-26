import { Component } from 'react';
import PropTypes from 'prop-types';
import { List, Button } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    const keys = Object.keys(options);

    return (
      <List>
        {keys.map((key, index) => (
          <li key={index}>
            <Button onClick={() => onLeaveFeedback(key)}>{key}</Button>
          </li>
        ))}
      </List>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
