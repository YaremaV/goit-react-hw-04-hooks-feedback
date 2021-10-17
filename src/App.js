import React, { useState } from 'react';
import Feedback from './components/Feedback/Feedback';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';
import Container from './components/Container/Container';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const getFeedback = type => {
    switch (type) {
      case 'good':
        return setGood(good + 1);

      case 'neutral':
        return setNeutral(neutral + 1);

      case 'bad':
        return setBad(bad + 1);

      default:
    }
  };

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    return Math.round((good / countTotalFeedback()) * 100);
  }

  const key = Object.keys({ good, neutral, bad });
  return (
    <Container>
      <Feedback options={key} onLeaveFeedback={getFeedback} />

      {[good, neutral, bad].some(value => value > 0) ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </Container>
  );
}

// class App extends Component {
//   static defaultProps = {
//     positivePercentage: 0,
//   };

//   static propTypes = {
//     good: PropTypes.number,
//     neutral: PropTypes.number,
//     bad: PropTypes.number,
//   };

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   getFeedback = feedBack => {
//     this.setState(prevState => ({
//       [feedBack]: prevState[feedBack] + 1,
//     }));
//   };

//   countTotalFeedback = ({ good, neutral, bad } = this.state) => {
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = ({ good } = this.state) => {
//     return Math.round((good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const keys = Object.keys(this.state);
//     const stats = Object.values(this.state);

//     return (
//       <Container>
//         <Feedback options={keys} onLeaveFeedback={this.getFeedback} />

//         {stats.some(value => value > 0) ? (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback()}
//             positivePercentage={this.countPositiveFeedbackPercentage()}
//           />
//         ) : (
//           <Notification message="No feedback given" />
//         )}
//       </Container>
//     );
//   }
// }

// export default App;
