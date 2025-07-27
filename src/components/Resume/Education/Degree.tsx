import React from 'react';

import Markdown from 'markdown-to-jsx';

import type { Degree as DegreeType } from '@/data/resume/degrees';

interface DegreeProps {
  data: DegreeType;
}

const Degree: React.FC<DegreeProps> = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree">{data.degree}</h4>
      <p className="school">
        <a href={data.link}>{data.school}</a>, {data.year}
      </p>
    </header>
    {data.fos ? (
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
        {data.fos}
      </Markdown>
    ) : null}
    {data.highlights ? (
      <ul className="points">
        {data.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    ) : null}
  </article>
);

export default Degree;
