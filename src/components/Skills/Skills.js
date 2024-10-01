// Skills.js

import React from 'react';
import uniqid from 'uniqid';
import { skills } from '../../portfolio';
import './Skills.css';

const Skills = () => {
  if (!skills.length) return null;

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      {skills.map((skillCategory) => (
        <div key={uniqid()} className='skills__category'>
          <h3 className='skills__category-title rainbow-text-animated'>
            {skillCategory.category}
          </h3>
          <ul className='skills__list'>
            {skillCategory.items.map((skill) => (
              <li key={uniqid()} className='skills__list-item btn btn--plain'>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;
