import { Component } from 'react';
import css from './Feedback.module.css';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    const keys = Object.keys(options);

    return (
      <ul>
        {keys.map((key, index) => (
          <li>
            <button
              key={index}
              className={css.button}
              onClick={() => onLeaveFeedback(key)}
            >
              {key}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
