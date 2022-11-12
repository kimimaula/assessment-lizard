import styled from 'styled-components';

const DetailPageContainer = styled.div`
  margin: 30px;
  border: 1px solid var(--light-grey);
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  max-width: 50%;
  margin-right: auto;
  margin-left: auto;
`;

const DetailsHeader = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 25px;
  font-weight: bold;
  font-size: 15px;
`;

const DetailsContainer = styled.div`
  padding: 20px;
`;

const DetailTitle = styled.div`
  color: var(--clr-blue);
  font-weight: bold;
  font-size: 18px;
  margin: 5px 0;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  border: 1px solid var(--light-grey);
`;

const AvatarContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export {
  DetailPageContainer,
  DetailsHeader,
  DetailsContainer,
  DetailTitle,
  Avatar,
  AvatarContainer,
};
