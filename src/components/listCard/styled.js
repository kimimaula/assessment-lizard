import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid var(--clr-lightGrey);
  margin: 12px 0;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 400px) {
    font-size: 10px;
    width: 300px;
  }
`;

const LabelText = styled.div`
  font-size: 14px;
`;

export { Card, LabelText };
