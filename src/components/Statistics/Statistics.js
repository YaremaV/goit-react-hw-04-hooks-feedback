import React from 'react';
import './statistics.css';
import Section from '../Section/Section';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <Section title="Statistics">
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback:{positivePercentage}%</p>
    </Section>
  );
}
