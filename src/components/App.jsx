import { Component } from 'react';
import css from './Feedback.module.css';

import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = rating => {
    this.setState(prevState => ({ [rating]: (prevState[rating] += 1) }));
  };

  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = ({ good }, total) => {
    const positiveFeedback = good;
    return total !== 0 ? Math.round((positiveFeedback / total) * 100) : 0;
  };

  hasFeedback = ({ good, neutral, bad }) => {
    return good > 0 || neutral > 0 || bad > 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback(this.state);
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage(
      this.state,
      totalFeedback
    );

    return (
      <div className={css.box}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleClick}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {this.hasFeedback(this.state) ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
