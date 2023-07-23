import css from './Feedback.module.css';
// import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <section>
      <h1 className={css.heading}>{title}</h1>
      {children}
    </section>
  );
};
