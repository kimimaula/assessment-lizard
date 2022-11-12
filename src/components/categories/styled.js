import styled from 'styled-components';

const CategoriesTag = styled.div`
  min-width: 150px;
  padding: 7px;
  border-radius: 15px;
  margin: 5px;
  color: black;
  font-weight: 500;
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

export { CategoriesTag, CategoriesTagContainer };
