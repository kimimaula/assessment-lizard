import React from 'react';
import { Spinner, SpinnerContainer } from './styled.js';

export default function LoadingSpinner() {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
}
