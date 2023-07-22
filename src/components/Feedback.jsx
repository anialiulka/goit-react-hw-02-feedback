import { Component } from 'react';
import css from './Feedback.module.css';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.box}>
        <h1 className={css.heading}>Please leave feedback</h1>
        <ul className={css.list}>
          <li>
            <button className={css.button}>Good</button>
          </li>
          <li>
            <button className={css.button}>Neutral</button>
          </li>
          <li>
            <button className={css.button}>Bad</button>
          </li>
        </ul>
        <h2 className={css.heading}>Statistics</h2>
        <ul className={css.list}>
          <li className={css.rating}>Good: {good} </li>
          <li className={css.rating}>Neutral: {neutral} </li>
          <li className={css.rating}>Bad: {bad}</li>
        </ul>
      </div>
    );
  }
}
