const React = require("react");
const PropTypes = require("prop-types");

function ReactView({ title, subtitle, description, date, worker, content }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <h3>{date}</h3>
      <p>{description}</p>
      <div>
        <p>{content}</p>
      </div>
      <div>
        <Worker worker={worker} />
      </div>
    </div>
  );
}

ReactView.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.object, // Dates are objects
  worker: PropTypes.string,
  content: PropTypes.string,
  handleSelect: PropTypes.func // a function type
};

module.exports = ReactView;
