import React, { useEffect, useState } from 'react';
import {
  Container,
  ButtonList,
  Button,
  ColorPicker,
  Message,
  CountList,
  CountListItem,
  CountListItemRight,
  CountListItemWrong,
} from './App.styled';

export const App = () => {
  const [color, setColor] = useState('');
  const [answers, setAnswers] = useState([]);
  const [message, setMessage] = useState('');
  const [rightAnswer, setRightAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);

  const [rerun, setRerun] = useState(false);

  useEffect(() => {
    let color = getRandomHexColor();
    setColor(color);
    console.log(color);
    setAnswers(
      [color, getRandomHexColor(), getRandomHexColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  }, [rerun]);

  const henaldeRightAnswer = answer => {
    if (color === answer) {
      setMessage('Right answer');
      setRightAnswer(prev => prev + 1);
      setRerun(prev => !prev);
    } else {
      setMessage('Wrong answer');
      setWrongAnswer(prev => prev + 1);
    }
  };

  const handleResetCount = () => {
    setRightAnswer(0);
    setWrongAnswer(0);
    setMessage('');
  };

  return (
    <ColorPicker>
      <CountList>
        <CountListItem>total count: {rightAnswer + wrongAnswer}</CountListItem>
        <CountListItemRight>rigth answer: {rightAnswer}</CountListItemRight>
        <CountListItemWrong>wrong answer: {wrongAnswer}</CountListItemWrong>
      </CountList>

      <Button onClick={handleResetCount} type="button">
        Reset count
      </Button>

      <Container style={{ backgroundColor: color }} />
      <ButtonList>
        {answers.map(answer => (
          <li key={answer}>
            <Button onClick={() => henaldeRightAnswer(answer)} type="button">
              {answer}
            </Button>
          </li>
        ))}
      </ButtonList>
      <div>
        <Message>{message}</Message>
      </div>
    </ColorPicker>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
