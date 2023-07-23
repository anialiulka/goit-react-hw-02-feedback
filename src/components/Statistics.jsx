import css from './Feedback.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul className={css.list}>
    <li className={css.rating}>Good: {good} </li>
    <li className={css.rating}>Neutral: {neutral} </li>
    <li className={css.rating}>Bad: {bad}</li>
    <li className={css.rating}>Total: {total}</li>
    <li className={css.rating}>Positive Feedback: {positivePercentage}%</li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
