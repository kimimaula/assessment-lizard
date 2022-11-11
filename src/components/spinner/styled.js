import styled from 'styled-components';

const Spinner = styled.div`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  width: 50px;
  height: 50px;
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid var(--clr-blue); /* Black */
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
`;

const SpinnerContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
`;

export { Spinner, SpinnerContainer };
