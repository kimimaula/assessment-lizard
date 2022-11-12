import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid var(--light-grey);
  margin: 12px 0;
  padding: 10px;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    font-size: 10px;
    width: 300px;
  }
`;

const CategoriesTag = styled.div`
  border: 1px solid black;
  min-width: 150px;
  padding: 7px;
  border-radius: 15px;
  margin: 5px;
  @media screen and (max-width: 400px) {
    min-width: 100px;
    padding: 5px;
  }
`;

const CategoriesTagContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

const HeaderText = styled.div`
  margin: 10px 0 0 0;
  font-weight: bold;
  font-size: 15px;
  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
`;

const LabelText = styled.div`
  font-size: 13px;
`;

export { Card, CategoriesTag, CategoriesTagContainer, HeaderText, LabelText };
