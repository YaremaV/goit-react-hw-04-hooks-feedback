import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Feedback from './components/Feedback/Feedback';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';
import Container from './components/Container/Container';

class App extends Component {
  static defaultProps = {
    positivePercentage: 0,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getFeedback = feedBack => {
    this.setState(prevState => ({
      [feedBack]: prevState[feedBack] + 1,
    }));
  };

  countTotalFeedback = ({ good, neutral, bad } = this.state) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = ({ good } = this.state) => {
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);
    const stats = Object.values(this.state);

    return (
      <Container>
        <Feedback options={keys} onLeaveFeedback={this.getFeedback} />

        {stats.some(value => value > 0) ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Container>
    );
  }
}

export default App;
