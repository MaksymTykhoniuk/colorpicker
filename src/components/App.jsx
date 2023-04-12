import React, { useEffect, useState } from 'react';
import {
  Container,
  ButtonList,
  Button,
  ColorPicker,
  Message,
} from './App.styled';

export const App = () => {
  const [color, setColor] = useState('');
  const [answers, setAnswers] = useState([]);
  const [message, setMessage] = useState('');

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
      setRerun(prev => !prev);
    } else {
      setMessage('Wrong answer');
    }
  };

  return (
    <ColorPicker>
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
