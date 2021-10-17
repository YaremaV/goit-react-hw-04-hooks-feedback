import React from 'react';
import Section from '../Section/Section';
import './feedback.css';

export default function Feedback({ options, onLeaveFeedback }) {
  return (
    <Section title="Please leave Feedback">
      {options.map((option, idx) => (
        <button
          className="button"
          key={idx}
          type="button"
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </Section>
  );
}
