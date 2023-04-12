import styled from '@emotion/styled';

export const ColorPicker = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #313131;
`;

export const Container = styled.div`
  width: 300px;

  height: 300px;
  border-radius: 30px;
`;

export const ButtonList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0;
`;

export const Button = styled.button`
  padding: 10px 5px;
  border: 1px solid gray;
  border-radius: 10px;
`;

export const Message = styled.p`
  font-size: 40px;
  color: #000;
`;
