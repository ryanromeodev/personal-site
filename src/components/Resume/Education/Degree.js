import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

const Degree = ({
  data: {
    degree, link, school, year, fos, highlights,
  },
}) => (
  <article className="degree-container">
    <header>
      <h4 className="degree">{degree}</h4>
      <p className="school">
        <a href={link}>{school}</a>, {year}
      </p>
    </header>
    {fos ? (
      <Markdown
        options={{
          overrides: {
            p: {
              props: {
                className: 'fos',
              },
            },
          },
        }}
      >
        {fos}
      </Markdown>
    ) : null}
    {highlights ? (
      <ul className="points">
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    ) : null}
  </article>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    fos: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
};

export default Degree;
